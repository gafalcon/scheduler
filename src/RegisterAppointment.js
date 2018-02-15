import React, { Component } from 'react';
import SessionSelect from './SessionSelect'
import Calendar from './Calendar'

export default class RegisterAppointment extends Component {

    constructor(props){
        super(props)
        this.state = {"session_name": "",
            "session": {
                minDate: new Date(2018, 0, 1),
                maxDate: new Date(2018, 3, 1)
            }
        }
        this.session_selected = this.session_selected.bind(this)
        this.dateSelected = this.dateSelected.bind(this)
    }

    session_selected(event){
        var session_name = event.target.value
        this.setState({session_name: session_name})

        if (session_name === "1"){
            var session = {
                minDate: new Date(2018, 0, 1),
                maxDate: new Date(2018, 1, 1)
            }
            this.setState({session: session})
        }else{
            this.setState({session: {
                minDate: new Date(2018, 1, 1),
                maxDate: new Date(2018, 2, 1)
            }})
        }
    }

    dateSelected(day){
        this.setState({"day": day})
    }

    render (){
        return (
            <div>
                <h1>Registro de cita</h1>
                <SessionSelect session_selected={this.session_selected}/>
                <Calendar {...this.state.session} dateSelected={this.dateSelected}/>
            </div>
        )
    }

}
