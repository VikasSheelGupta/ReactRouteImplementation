import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';


class Header extends React.Component {	
  render() {
  return (
    <div id="headerDiv_1" className="tab" >
	  <Link to ="/home" className="tablinks">Home</Link>
	  <Link to ="/flagship" className="tablinks">Flagship Scheme</Link>
	  <Link to ="/fav" className="tablinks">Favourite</Link>
	</div>
	);
  }
}

export default Header;
