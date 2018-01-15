import React, { Component } from 'react';

class Logger extends Component{

    constructor(props){
        super(props);
        console.log('costructor running');
    }

    componentWillMount(){
        console.log('Component will mount method');
    }

    componentWillReceiveProps(nextProps){
        console.log('Next Props', nextProps);
    }

    shouldComponentUpdate(newProps, newState){
        console.log('Should Component Update');
        console.log('New Props', newProps);
        console.log('New State', newState);

        return true;
    }

    render(){
        console.log('Render is running');
        return(
            <h1>{this.props.time}</h1>            
        )
    }
}

export default Logger;