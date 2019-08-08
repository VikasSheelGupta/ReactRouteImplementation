import EventEmmiter from 'events';
import { getaicteYear,getPesticideUrl,getPANUrl, getERState } from '../../../common/url';
import { postFetchApiData, getFetchApiData } from '../../../common/utility';

class ExtensionReformsStore extends EventEmmiter {
    constructor(){
        super();
        this.storeData = {statesData:[],yearData:[]}
    }
//=========================================================================
// To call API
    fetchData = (data, headers, level) => {
      
             if (Object.keys(this.storeData.yearData).length < 1) {
                    postFetchApiData(getERState(), data, headers, this.getStateApiData);
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
            this.emit("store_year_updated");
        } 

     // getStateApiData = response => {
     //    if (response && response.hasOwnProperty("pd")) {
     //        let apiResult = response.pd;
     //        this.storeData = {
     //            ...this.storeData,
     //            statesData: apiResult !== null ? apiResult : [],
     //        };
     //        }
     //        this.emit("store_state_updated");
     //    }

    getStoreData() {
        return this.storeData;
    }

    // getInstituteList = (cb, failureCb) => {
    //     // postFetchApiData("url", params, headers, this.storeInstituteList)
    //     getFetchApiData("serviceData/instituteList.json", 
    //         (data) => {
    //             this.storeInstituteList(data, cb);
    //         }, failureCb());
    // }

    // setSelectedInstitute = (instituteId) => {
    //   this.storeData.instituteList = instituteId;
    // }

    // storeInstituteList = (data, cb) => {
    //     this.storeData = {
    //         ...this.storeData,
    //         instituteList: data.approvedinstitute
    //     };
    //     cb();
    //}
//=========================================================================
    // setAICTEDetails(headers, params, cb, failure) {
    //     this.isResponse = false;
    //     window.setTimeout(() => {
    //         if (!this.isResponse) {
    //             failure();
    //         }
    //     }, 10000);      
    //     postFetchApiData(getPANUrl(), params, headers, (data) => {
    //         this.isResponse = true;
    //         this.panDetails = data;
    //         if (cb && data.rs === "S") {
    //             cb();
    //         }   else {
    //             failure(data.rd);
    //         }
    //     }, (data) => {
    //         this.isResponse = true;
    //         failure(data.rd);
    //     });
    // }
//===========================================================================
     // getYear() {
     //     return this.year;
     // }

     // setYear = Year => {
     //     this.year = year;
     // }

   //  getState() {
   //      return this.state;
   //  }

   //  setState = State => {
   //      this.state = state;
   //  }
   //  getProgram() {
   //      return this.program;
   //  }

   //  setProgram = Program => {
   //      this.program = program;
   //  }

   //  getLevel() {
   //      return this.level;
   //  }

   //  setLevel = Level => {
   //      this.level = level;
   //  }

   //   getCourse() {
   //      return this.course;
   //  }

   //  setCourse = Course => {
   //      this.course = course;
   //  }
   // getIType() {
   //      return this.itype;
   //  }

   //  setIType = IType => {
   //      this.itype = itype;
   //  }

}
const extensionReformsStore = new ExtensionReformsStore();
export default extensionReformsStore;