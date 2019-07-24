import React, { Component } from 'react'
import { getFetchApiData } from '../../../common/utility';
 import './style.scss';
import InternalHeader from '../../Shared/serviceInternalHeader';
import GlobalStore from '../../../stores';
import Constant from '../../../constants';
import * as GlobalActions from '../../../actions';
import Footer from '../../Shared/Footer';
import PANStore from "./store";

export default class ChildLineVideo3 extends Component {
  constructor() {
    super();
    this.tokenData = JSON.parse(localStorage.getItem("login_token"));
    this.state = { 
    navIndex:0,
    inputValue:"",
    headers: {
      "Authorization": 'Bearer ' + this.tokenData.access_token,
      "Content-Type": "application/json",
      "deptid": "42",
      "srvid": "513"
    },
    params: {
      "tkn": this.tokenData.tkn,
      "trkr": "UW-d1544015472378",
      "lang": "en",
      "lat": "",
      "lon": "",
      "lac": "3348",
      "usag": "null",
      "usrid": this.tokenData.uid,
      "srvid": "513",
      "mode": "web",
      "pltfrm": "Android 7.1.2",
      "apitrkr": "z1544017141614",
      "did": "null",
      "deptid": "42",
      "userID": "null",
      "entityID": "U",
      "groupID": "PAN_MOBILE",
      "subsid": "l3_1088",
      "subsid2": "0",
      "formtrkr": "0"
      }
      }
      this.handleCancelButton = this.handleCancelButton.bind(this);
    }

    componentDidMount() {
       GlobalStore.on("key_action_dispatch", this.keyActionDispatch);
       GlobalStore.on("key_down_action_dispatch", this.keyDownDispatch);
       GlobalActions.headerVisible(false,0);
       document.querySelector('.active').focus();
      
      //this.getAppStatus();
    }
      componentWillUnmount() {
         GlobalStore.removeListener("key_action_dispatch", this.keyActionDispatch);
         GlobalStore.removeListener("key_down_action_dispatch", this.keyDownDispatch);
          GlobalActions.headerVisible(true,0);
    }

     keyActionDispatch = keyObject =>{

        if (keyObject.event.key === Constant.KEY_UP && this.state.navIndex >0) {
          this.setState({
              navIndex:this.state.navIndex - 1
            })
            document.querySelector('.active').focus();
          }

          if (keyObject.event.key === Constant.KEY_DOWN && this.state.navIndex <1) {
            this.setState({
              navIndex:this.state.navIndex + 1
            })
            document.querySelector('.active').focus();
          }
    if(keyObject.event.key === Constant.KEY_RSK){
        if (this.state.inputValue) {
      
            let params = {
               "inputValue": this.state.inputValue
            }
            params = { ...params, ...this.state.params };
            PANStore.setPANDetails(this.state.headers, params, () => {
                document.getElementById("rsk").click();
            });
      }
    }
}
      keyDownDispatch = keyDown => {
   
        GlobalStore.isPreventDefault = true;
      }

      changeinputValue =(event) => {
        this.setState({
            inputValue: event.target.value
        },
        () => {
            GlobalStore.isPreventDefault = !!this.state.inputValue.length;
        });
        
    
    
    }
    handleCancelButton(){
      console.log("cancel button clicked");
    }
          
      
  render() {   
    let lsklabel = {textData:"Cancel", onClickButton: this.handleCancelButton};
    let csklabel = {textData:"", to:""};
    let rsklabel = {textData:"Submit", to: "/PANInfo"};

    console.log("state",this.state);
    console.log("isPreventDefault",GlobalStore.isPreventDefault);
    return (
      <div>
      <InternalHeader header={"Track Your PAN Card "}/>
          <div className="description">
          <input type="text"
          value = {this.state.inputValue}
          placeholder="Enter Pan Number"
          onChange={(event)=>this.changeinputValue(event)}
          className= {this.state.navIndex=== 0 ? "active up-down input-field" : " up-down input-field"} />
          <input type="text"
          className= {this.state.navIndex=== 1 ? "active up-down input-field" : " up-down input-field"} />
          </div>
          <Footer csklabel={csklabel} rsklabel={rsklabel} lsklabel={lsklabel}/>
      </div>
    )
  }
}
