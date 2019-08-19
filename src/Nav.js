import React, { Component } from 'react';
import './nav.css';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import ZeitEintragen from "./ZeitEintragen";
import ZeitUebersicht from "./ZeitUebersicht";
import Ferienuebersicht from "./Ferienuebersicht"


class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showNav: true,
        }
    }

    render() {
        return (

            <BrowserRouter>

                <MenuIcon onClick={() => this.setState({ showNav: true })}
                    style={{ verticalAlign: 'middle', padding: '12px' }} />
                <SideNav
                    showNav={this.state.showNav}
                    onHideNav={() => this.setState({ showNav: false })}


                />
                <div>
                    <ol id="test">
                        <li><NavLink to="/ZeitEintragen">ZeitEintragen</NavLink></li>
                        <li><NavLink to="/ZeitUebersicht">ZeitUebersicht</NavLink></li>
                        <li><NavLink to="/Ferienuebersicht">Ferienuebersicht</NavLink></li>
                    </ol>
                    <div className="content">
                        <Route path="/ZeitEintragen" component={ZeitEintragen} />
                        <Route path="/ZeitUebersicht" component={ZeitUebersicht} />
                        <Route path="/Ferienuebersicht" component={Ferienuebersicht} />
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default Nav;
