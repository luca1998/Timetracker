import React, {Component} from 'react';
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
        });
    }

    render() {
        let style ={
            float: "left",
            width: "50vh"
        }
        return (
            <div>

                <div id="vacationForm">
                    <DatePicker id="datepickerStart"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                    />
                    <DatePicker id="datepickerEnd"
                                selected={this.state.endDate}
                                onChange={this.handleChangeEnd}
                    />
                    <br/>
                    <br/>
                    <textarea style={style}></textarea>
                </div>

            </div>

        );
    }
}

export default Ferienuebersicht;