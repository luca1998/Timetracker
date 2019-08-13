import React, { Component } from 'react';
import './nav.css';
import SideNav from 'react-simple-sidenav';
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import ZeitEintragen from "./ZeitEintragen";
import ZeitUebersicht from "./ZeitUebersicht";
import Ferienuebersicht from "./Ferienuebersicht"


class Nav extends Component {
    render() {
        return (
            <SideNav>
                showNav =  {this.state.showNav}
                onHideNav =  {() => this.setState({ showNav: false })}
                <BrowserRouter>
                    <div>
                        <ol id="test">
                            items =  {[<li><NavLink to="/ZeitEintragen">ZeitEintragen</NavLink></li>,
                            <li><NavLink to="/ZeitUebersicht">ZeitUebersicht</NavLink></li>,
                            <li><NavLink to="/Ferienuebersicht">Ferienuebersicht</NavLink></li>]}
                        </ol>
                        <div className="content">
                            <Route path="/ZeitEintragen" component={ZeitEintragen} />
                            <Route path="/ZeitUebersicht" component={ZeitUebersicht} />
                            <Route path="/Ferienuebersicht" component={Ferienuebersicht} />
                        </div>
                    </div>
                </BrowserRouter>
            </SideNav>
        );
    }
}

export default Nav;
