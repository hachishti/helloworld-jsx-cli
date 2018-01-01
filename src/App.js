import React, { Component } from 'react';
import './App.css'
class HelloworlsReactJsx extends Component{
  
  customLinkStyle = {
    backgroundColor: 'lightblue', 
    textDecoration: 'underline'
  }
  
  render(){
    return(
      <a href={this.props.link} style={this.customLinkStyle}>{this.props.linkText}</a>
    );
  }
}
export default HelloworlsReactJsx;