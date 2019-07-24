import EventEmmiter from 'events';
import { getPANUrl,getPesticideUrl } from '../../../common/url';
import { postFetchApiData } from '../../../common/utility';

class PANStore extends EventEmmiter {
    constructor(){
        super();
        this.storeData = {
        	statesData:[]
        }
    }
// To call API
    fetchData = (data, headers, level) => {
 //       this.storeData = { ...this.storeData, level: level };
        if (Object.keys(this.storeData.statesData).length < 1) {
            postFetchApiData(getPesticideUrl(), data, headers, this.getApiData);
        } else {

            this.emit("store_state_updated");

        }

    };

    // To manage Response
     getApiData = response => {

        if (response && response.hasOwnProperty("pd")) {

            let apiResult = response.pd;
            this.storeData = {

                ...this.storeData,

                statesData: apiResult !== null ? apiResult : [],
            };
            }
            this.emit("store_state_updated");

        } 

        getStoreData() {

        return this.storeData;

    }

    setPANDetails(headers, params, cb, failure) {
        this.isResponse = false;
        window.setTimeout(() => {
            if (!this.isResponse) {
                failure();
            }
        }, 10000);      
        postFetchApiData(getPANUrl(), params, headers, (data) => {
            this.isResponse = true;
            this.panDetails = data;
            if (cb && data.rs === "S") {
                cb();
            }   else {
                failure(data.rd);
            }
        }, (data) => {
            this.isResponse = true;
            failure(data.rd);
        });
    }

    getPANNo() {
        return this.panNo;
    }

    setPANNo = panNo => {
        this.panNo = panNo.toUpperCase();
    }
}
const panStore = new PANStore();
export default panStore;