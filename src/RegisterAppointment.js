import React, { Component } from 'react';
import SessionSelect from './SessionSelect'
import Calendar from './Calendar'

export default class RegisterAppointment extends Component {

    constructor(props){
        super(props)
        this.state = {"session": ""}
        this.session_selected = this.session_selected.bind(this)
    }

    session_selected(session){
        this.setState({session: session.target.value})
    }

    render (){
        return (
            <div>
                <SessionSelect session_selected={this.session_selected}/>
                <Calendar />
            </div>
        )
    }

}
