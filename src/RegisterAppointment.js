import React, { Component } from 'react';
import SessionSelect from './SessionSelect'
import Calendar from './Calendar'
import TimePicker from './TimePicker'

export default class RegisterAppointment extends Component {

    constructor(props){
        super(props)
        //TODO find available sessions in DB
        this.state = {
            "session_name": "",
            "session": {
                minDate: new Date(),
                maxDate: new Date()
            },
            "availableSessions": ["sesion1", "sesion2", "sesion3"],
            availableTimes: [],
            timepicker: false
        }
        this.session_selected = this.session_selected.bind(this)
        this.dateSelected = this.dateSelected.bind(this)
        this.timeSelected = this.timeSelected.bind(this)
    }

    session_selected(event){
        var session_name = event.target.value
        this.setState({session_name: session_name})

        //TODO find available dates on a DB
        if (session_name === "sesion1"){
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
        this.setState({"day": day, timepicker: true})
        // TODO find available times for timepicker
    }

    timeSelected(time){
        this.setState({time: time, timepicker: false})
    }

    render (){
        return (
            <div>
                <h1>Registro de cita</h1>
                <SessionSelect session_selected={this.session_selected} availableSessions={this.state.availableSessions}/>
                <Calendar {...this.state.session} dateSelected={this.dateSelected}/>
                <TimePicker visible={this.state.timepicker}
                            availableTimes={this.state.availableTimes}
                            timeSelected={this.timeSelected}
                />

            </div>
        )
    }

}
