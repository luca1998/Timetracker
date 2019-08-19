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
            showNav: false,
        }
    }

    render() {
        return (

            <BrowserRouter>
                <SideNav
                    openFromRight={true}
                    showNav={this.state.showNav}
                    onHideNav={() => this.setState({ showNav: false })}
                    title="test"
                    items={[<NavLink to="/ZeitEintragen">ZeitEintragen</NavLink>,
                    <NavLink to="/ZeitUebersicht">ZeitUebersicht</NavLink>,
                    <NavLink to="/Ferienuebersicht">Ferienuebersicht</NavLink>]}
                    itemHoverStyle={{ backroundColor: '#a39f9e' }}

                />

                <div>
                    <button onClick={() => this.setState({ showNav: true })} />
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
