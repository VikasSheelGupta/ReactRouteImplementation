import React, { Component } from 'react'
import { getFetchApiData } from '../../../common/utility';
 import './style.scss';
import InternalHeader from '../../Shared/serviceInternalHeader';
import GlobalStore from '../../../stores';
import Constant from '../../../constants';
import * as GlobalActions from '../../../actions';

export default class ChildLineVideo2 extends Component {
  constructor() {
    super();
    this.state = { 
    navIndex:0
      }
    }

    componentDidMount() {
       GlobalStore.on("key_action_dispatch", this.keyActionDispatch);
       GlobalActions.headerVisible(false,0);
      // document.querySelector('.active').value = "";
       document.querySelector('.active').focus();
      
      //this.getAppStatus();
    }
      componentWillUnmount() {
         GlobalStore.removeListener("key_action_dispatch", this.keyActionDispatch);
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
      }
      
     
      
  render() {
   
    return (
      <div>
      <InternalHeader header={"PAN Query "}/>
          <div className="description">
          <input type="text"
          className= {this.state.navIndex=== 0 ? "active up-down input-field" : " up-down input-field"} />
          <input type="text"
          className= {this.state.navIndex=== 1 ? "active up-down input-field" : " up-down input-field"} />
          </div>
      </div>
    )
  }
}
