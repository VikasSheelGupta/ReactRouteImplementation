import React, { Component } from 'react'
import { getFetchApiData } from '../../../common/utility';
import './style.scss';
import InternalHeader from '../../Shared/serviceInternalHeader';
import GlobalStore from '../../../stores';
import Constant from '../../../constants';

export default class ChildLineVideo1 extends Component {
  constructor() {
    super();
    this.state = { 
    pd:{}
      }
    }

    componentDidMount() {
      //up key event
       GlobalStore.on("key_action_dispatch", this.keyActionDispatch);
      
     // this.getAppStatus();
    }
      componentWillUnmount() {
       GlobalStore.removeListener("key_action_dispatch", this.keyActionDispatch);
    }
      
      keyActionDispatch = keyObject =>{
        if (keyObject.event.key === Constant.KEY_UP ||
            keyObject.event.key === Constant.KEY_DOWN ) {
            GlobalStore.updatePostion(keyObject, document.getElementById("main"),
             document.getElementById("content"));
          }
      }
      
      
  render() {
    return (
      <div id="main">
      <InternalHeader header={"PAN Query "}/>
          <div className="description" id="content"> THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;THis is Vikas Sheel Gupta;</div>
      </div>
    )
  }
}
