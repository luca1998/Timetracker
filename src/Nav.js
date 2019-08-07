import React, { Component } from 'react';
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import ZeitEintragen from "./ZeitEintragen";
import ZeitUebersicht from "./ZeitUebersicht";


class Nav extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ol id="test">
                        <li><NavLink to="/ZeitEintragen">ZeitEintragen</NavLink></li>
                        <li><NavLink to="/ZeitUebersicht">ZeitUebersicht</NavLink></li>

                    </ol>
                    <div className="content">
                        <Route path="/ZeitEintragen" component={ZeitEintragen} />
                        <Route path="/ZeitUebersicht" component={ZeitUebersicht} />

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Nav;
