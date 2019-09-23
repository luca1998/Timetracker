import React, {Component} from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
                    openFromRight={false}
                    showNav={this.state.showNav}
                    itemStyle={{backgroundColor: '#fff'}}
                    itemHoverStyle={{backgroundColor: '#9c9797'}}
                    navStyle={{listStyleType: 'none'}}
                    titleStyle={{backgroundColor: '#4643a8'}}
                    onHideNav={() => this.setState({showNav: false})}
                    title="TIME-TOOL"
                    items={[<NavLink to="/ZeitEintragen"><h3>Zeit Eintragen</h3></NavLink>,
                        <NavLink to="/ZeitUebersicht"><h3>Zeit Übersicht</h3></NavLink>,
                        <NavLink to="/Ferienuebersicht"><h3>Ferienübersicht</h3></NavLink>]}
                />
                <div>
                    <Button variant="outline-primary"
                            onClick={() => this.setState({showNav: true})}>Menu
                    </Button>


                    <div className="content">
                        <Route path="/ZeitEintragen" component={ZeitEintragen}/>
                        <Route path="/ZeitUebersicht" component={ZeitUebersicht}/>
                        <Route path="/Ferienuebersicht" component={Ferienuebersicht}/>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default Nav;
