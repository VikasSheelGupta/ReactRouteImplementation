import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import './scripts/Header.css'
import Router from './route';

class App extends React.Component {
  render() {
  return (
    <div className = 'Header'>		
			<Header />
			<Router />	
    </div>
  );
}
}

export default App;
