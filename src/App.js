import React from 'react';
import './App.css';
import Nav from './Nav';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import { tsConstructorType } from '@babel/types';

function App() {

 
  return (
    
    <div className="App">
        <MenuIcon onClick={() => this.setState({showNav: true})}/>
         <SideNav
         showNav = {true}
         onHideNav = {() => this.setState({showNav: false})}>
            <Nav /> 
         </SideNav>
         <Content />
    </div>
  );
}

export default App;
