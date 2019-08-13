import React from 'react';
import './App.css';
import Nav from './Nav';
import SideNav from 'react-simple-sidenav';

function App() {
  return (
    <div className="App">
      <SideNav
  
           showNav = {true}
          onHideNav = {() => this.setState({showNav: false})} />
         <Nav /> 
    </div>
  );
}

export default App;
