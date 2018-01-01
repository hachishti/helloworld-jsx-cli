import React, { Component } from 'react';

class TestMethod extends Component {

    myTestLink(){
        return 'http://youtube.com'
    }

    myTestLinkText(){
        return 'Click Here'
    }
    render() {
        return(
            <div> 
                <p>This is my test text and below is my test link.....</p>
                <a href={this.myTestLink()}>{this.myTestLinkText()}</a>
            </div>
        )
    }
}

export default TestMethod;