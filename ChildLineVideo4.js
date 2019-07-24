import React, { Component } from 'react'
import { getFetchApiData } from '../../../common/utility';
import './style.scss';
import InternalHeader from '../../Shared/serviceInternalHeader';
import PANStore from "./store";

export default class ChildLineVideo4 extends Component {
  constructor() {
    super();
    this.tokenData = JSON.parse(localStorage.getItem("login_token"));
    this.state = { 
      ...PANStore.getStoreData(),
      defaultHeaders: {

                "Content-Type": "application/json",
                Accept: "application/json",
                deptid: "58",
                srvid: "545"
            },
            defaultRequestData: {
                trkr: "UW-c1551940781332",
                lang: "en",
                lac: "null",
                lon: "null",
                lat: "null",
                usag: "null",
                usrid: this.tokenData["uid"],
                srvid: "545",
                mode: "web",
                pltfrm: "CHROME",
                apitrkr: "j1551941298241",
                did: "https://stgweb.umang.gov.in/kisanSuvidha/api/deptt/kisanSuvidha/?redirectUrl=ksWeather",
                level: "State",
                lcode: "",
                todate: "null",
                fromdate: "null",
                sector: "null",
                text: "null",
                stype: "null",
                deptid: "58",
                category: "null",
                bcode: "null",
                subsid: "0",
                subsid2: "0",
                formtrkr: "0"
            }
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
         PANStore.fetchData(newRequestData, newHeaders, "statesData");
         PANStore.on("store_state_updated", this.getStoreState);

    }

    componentDidMount() {
    }
      componentWillUnmount() {

      }
      getStoreState= async () => {
        this.setState({
          ...PANStore.getStoreData()
        })
      }
      
     
      
  render() {
    console.log("statesData",this.state);
    return (
      <div>
      <InternalHeader header={"PAN Query "}/>
          <div className="description">

          {this.state.statesData.length > 0 && this.state.statesData.map((state,index) =>{
           return( <div key={index}>{state.stateNM}</div> )
          })}
          </div>
      </div>
    )
  }
}
