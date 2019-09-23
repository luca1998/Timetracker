import React, {Component} from 'react';
import './zeitEintragen.css';
import TimePicker from 'react-time-picker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

//TODO check why css not works

class ZeitEintragen extends Component {

    state = {
        startTime: '08:00',
        endTime: '17:00',

    }

    onChangeStart = startTime => this.setState({startTime})
    onChangeEnd = endTime => this.setState({endTime})

    render() {

        return (
            <div>
                <div id="timetrack">
                    <form>
                        <span id="time"><br/>
                        <TimePicker
                            onChange={this.onChangeStart}
                            value={this.state.startTime}
                        />
                        </span>
                        <span id="time">

                        <TimePicker
                            onChange={this.onChangeEnd}
                            value={this.state.endTime}
                        />
                        </span>
                        <br/>
                        <br/>
                        <input id="input" type="number"/><br/>

                        <Button variant="primary" size="lg" id="btn" >Save</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ZeitEintragen;