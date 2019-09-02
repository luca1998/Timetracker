import React, { Component } from 'react';
import TimePicker from 'react-time-picker';
import './App.css';
import './zeitEintragen.css'

class ZeitEintragen extends Component {

    state = {
        startTime:  '10:00',
        endTime: '10:00',

    }

    onChangeStart = startTime => this.setState({ startTime })
    onChangeEnd = endTime => this.setState({endTime})

    render() {
        return (
            <div>
                <TimePicker id="time"
                    onChange={this.onChangeStart}
                    value={this.state.startTime}
                />

                <TimePicker id="time"
                            onChange={this.onChangeEnd}
                            value={this.state.endTime}
                />
            </div>
        );
    }
}

export default ZeitEintragen;