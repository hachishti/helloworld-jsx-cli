import React, { Component } from 'react';
import './App.css'
import DigitalClock from './Digitalclock';
import AnalogClock from './Analogclock';
import Logger from './Logger';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString(),
            countVar: 0
        }
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.setState(
                {
                    currentTime: new Date().toLocaleString(),
                    countVar: this.state.countVar+1
                }
            )
        }, 1000)
    }

    render() {
        return (
            // <h1>{this.state.currentTime}</h1>
            <div>
                {/* <DigitalClock time={this.state.currentTime} />
                <AnalogClock time={this.state.currentTime} /> */}
                {
                    (this.state.countVar < 3) ?
                        (<Logger time={this.state.currentTime} ></Logger>) :
                        (<div></div>)
                }

            </div>
        )
    }
}

export default Clock;