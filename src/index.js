import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   
import HelloWorldJsx from './App';
import TestMethod from './Methods';
let varmain = document.getElementById('root');
ReactDOM.render(
    <div>
        <HelloWorldJsx link='https://gmail.com' linkText='GMAIL'/>
        <HelloWorldJsx link='https://yahoo.com' linkText='YAHOO' />
        <TestMethod />
    </div>
,varmain);