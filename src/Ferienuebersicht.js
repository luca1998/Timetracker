import React, { Component } from 'react';
import './App.css';
import './ferienuebersicht.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Ferienuebersicht extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        })
    }

    render() {
        return (
            <div>
                <div id="datepickers">
                    <DatePicker id="datepickerStart"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleChangeEnd}
                    />
                </div>


            </div>


        );
    }
}

export default Ferienuebersicht;