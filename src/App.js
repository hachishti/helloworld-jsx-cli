import React, { Component } from 'react';
class HelloworlsReactJsx extends Component{
  render(){
    return(
      <a href={this.props.link}>{this.props.linkText}</a>
    );
  }
}
export default HelloworlsReactJsx;