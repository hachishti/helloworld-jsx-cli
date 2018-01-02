import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   
import HelloWorldJsx from './Helloworld';
import TestMethod from './Methods';
import Clock from './Digitalclock';
let varmain = document.getElementById('root');
ReactDOM.render(
    <div>
        <HelloWorldJsx link='https://gmail.com' linkText='GMAIL'/>
        <HelloWorldJsx link='https://yahoo.com' linkText='YAHOO' />
        <TestMethod />
        <Clock />
    </div>
,varmain);