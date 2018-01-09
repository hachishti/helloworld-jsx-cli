import React, { Component } from 'react';
import './App.css'
import DigitalClock from './Digitalclock';
import AnalogClock from './Analogclock';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        }
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.setState(
                {
                    currentTime: new Date().toLocaleString()
                }
            )
        }, 1000)
    }

    render() {
        return (
            // <h1>{this.state.currentTime}</h1>
            <div>
                <DigitalClock time={this.state.currentTime} />
                <AnalogClock time={this.state.currentTime} />
            </div>
        )
    }
}

export default Clock;