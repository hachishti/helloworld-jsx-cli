import React from 'react';

function AnalogClock(props) {

    let varTime = new Date(props.time);

    let clockContainer = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'Solid',
        borderColor: 'blue'
    }

    let secondHand = {
        position: 'relative',
        top: 100,
        left: 100,
        width: '40%',
        height: 1,
        border: '1px solid',
        transform: 'rotate('+ ((varTime.getSeconds()/60)*360-90).toString() +'deg)',
        transformOrigin: '0% 0%',
        // borderColor: 'pink',
        background: 'black'
    }

   let  minuteHand = {
        position: 'relative',
        top: 100,
        left: 100,
        width: '40%',
        height: 3,
        border: '1px solid',
        transform: 'rotate('+ ((varTime.getMinutes()/60)*360-90).toString() +'deg)',
        transformOrigin: '0% 0%',
        // borderColor: 'green',
        background: 'green'        
    }

    let hourHand = {
        position: 'relative',
        top: 100,
        left: 100,
        width: '20%',
        height: 7,
        border: '1px solid',
        transform: 'rotate('+ ((varTime.getHours()/12)*360-90).toString() +'deg)',
        transformOrigin: '0% 0%',
        // borderColor: 'red'
        background: 'red'        
    }

    return (
        <div style={clockContainer}>
            <div style={secondHand}></div>
            <div style={minuteHand}></div>
            <div style={hourHand}></div>
        </div>
    )
}

export default AnalogClock;