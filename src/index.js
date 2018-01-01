import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldJsx from './App';
let varmain = document.getElementById('root');
ReactDOM.render(
    <div>
        <HelloWorldJsx link='https://gmail.com' linkText='GMAIL'/>
        <HelloWorldJsx link='https://yahoo.com' linkText='YAHOO' />

    </div>
,varmain);