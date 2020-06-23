import React, { Component } from 'react';
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://localhost:8000"

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    componentDidMount(){
    const socket = socketIOClient(ENDPOINT);
    }

    render() { 
        return ( 
            <React.Fragment>
                <h2>Chat</h2>
            </React.Fragment>
         );
    }
}
 
export default Chat;