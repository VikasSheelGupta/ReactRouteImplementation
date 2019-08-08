import React, { Component } from 'react'
import { getFetchApiData } from '../../../common/utility';
import './style.scss';
import InternalHeader from '../../Shared/serviceInternalHeader';
import Footer from '../../Shared/Footer';
import ExtensionReformsStore from "./store";
import GlobalStore from '../../../stores';
import Constant from '../../../constants';

export default class StateListER extends Component {
  constructor() {
    super();
    this.tokenData = JSON.parse(localStorage.getItem("login_token"));
    this.state = { 
      ...ExtensionReformsStore.getStoreData(),
      // Year Details....
      defaultHeaders: {
                "Content-Type":"application/json",
                Accept: "application/json",
                deptid: "65",
                srvid: "567"
            },
      defaultRequestData: {
                "trkr": "UW-m1558006561518",
                "lat": null,
                "lon": null,
                "lac": null,
                "usag": "null",
                "lang": "en",
                "usrid": "1000007935",
                "srvid": "567",
                "mode": "web",
                "pltfrm": "CHROME",
                "deptid": "65",
                "subsid": null,
                "subsid2": null,
                "formtrkr": null 
            },

      // Year Details....
      }
       this.accessToken = {
         Authorization: "Bearer" + this.tokenData["access_token"]
       }
       this.loginToken = {tkn: this.tokenData["tkn"]};
    }

    componentWillMount() {
         const {defaultHeaders,defaultRequestData} = this.state;
         const newHeaders = { ...defaultHeaders, ...this.accessToken};
         const newRequestData = { ...defaultRequestData, ...this.loginToken};
         ExtensionReformsStore.fetchData(newRequestData, newHeaders, "statesData");
         ExtensionReformsStore.on("store_year_updated", this.getStoreState);
    }

    componentDidMount() {
         GlobalStore.on("key_action_dispatch", this.keyActionDispatch);
    }
    componentWillUnmount() {
      GlobalStore.removeListener("key_action_dispatch", this.keyActionDispatch);
    }
    getStoreState= async () => {
         this.setState({
           ...ExtensionReformsStore.getApiData()
         })
       }
 
  handleResetButton()
  {
    console.log ("Reset Button Clicked..");
  }    

   keyActionDispatch = keyObject =>{
        if (keyObject.event.key === Constant.KEY_UP ||
            keyObject.event.key === Constant.KEY_DOWN ) {
            GlobalStore.updatePostion(keyObject, document.getElementById("main"),
             document.getElementById("content"));
          }

        if (keyObject.event.key === Constant.KEY_RSK) {
          // AICTEStore.getInstituteList(headers, params);
          ExtensionReformsStore.getStoreState(() => {
            document.getElementById("rsk").click()
          }, () => {
            console.log("data not loaded");
          });
        }
      }   
      
  render() {
    let lsklabel = {textData:"Reset", onClickButton: this.handleResetButton};
    let csklabel = {textData:"", to:""};
    let rsklabel = {textData:"Submit", to: ""};
    //let yearData = this.state.yearData;

     return (
     <div id="main">
      <InternalHeader header={"View Extension Funcationaries"}/>
      <div className="description" id="content">
              <select name="Program">
                <option value="ATM">ATM</option>
                <option value="BTM">BTM</option>
              </select><br/><br/>
              <select name="State">
              {this.state.statesData.length > 0 && this.state.statesData.map((state,index) =>{
              return( <option value={index}>{state.colName}</option> )
              })}  
              </select><br/><br/>              
              </div>
              <br/>
             <Footer csklabel={csklabel} rsklabel={rsklabel} lsklabel={lsklabel}/>
      </div>
    )
  }
}
