import React, { Component } from 'react';
import SessionSelect from './SessionSelect'
import TimePicker from './TimePicker'
import DatePicker from './DatePicker'

export default class RegisterAppointment extends Component {

    constructor(props){
        super(props)
        //TODO find available sessions in DB
        this.state = {
            "session_name": "",
            "session": {
                minDate: new Date(),
                maxDate: new Date(),
                disabledDays: [new Date(2018, 1, 21)]
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
                maxDate: new Date(2018, 1, 1),
                disabledDays: [new Date(2018, 1, 23)]
            }
            this.setState({session: session})
        }else{
            this.setState({session: {
                minDate: new Date(2018, 1, 1),
                maxDate: new Date(2018, 2, 1),
                disabledDays: [new Date(2018, 1, 22), new Date(2018, 1, 15)]
            }})
        }
    }

    dateSelected(day, {disabled, selected }){
        if (disabled)
            return
        this.setState({
            day: selected ? undefined : day,
            timepicker: !selected
        })
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
                <DatePicker selectedDay={this.state.day} dateSelected={this.dateSelected}
                            {...this.state.session}
                />
                <TimePicker visible={this.state.timepicker}
                            availableTimes={this.state.availableTimes}
                            timeSelected={this.timeSelected}
                />

            </div>
        )
    }

}
