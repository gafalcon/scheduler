import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login'
import RegisterAppointment from './RegisterAppointment'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {"username": "", "session": ""}
        this.logged_in = this.logged_in.bind(this)
        this.session_selected = this.session_selected.bind(this)
    }

    logged_in(username){
        console.log("Username: " + username)
        this.setState({username: username}) 
    }

    session_selected(session){
        console.log("Session : " + session)
        this.setState({username: this.state.username, session: session.target.value})
    }

  render() {
    return (
        <RegisterAppointment />
    );
  }
}

export default App;
