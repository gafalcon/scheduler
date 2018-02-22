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
        this.getInitialState = this.getInitialState.bind(this)
    }

    getInitialState(){
        fetch("/sessions/available", {
            headers: new Headers({'Content-Type': 'application/json'})
        }).then(res => res.json())
          .then(response => {
              this.setState(
                  {
                      sessions: response,
                      availableSessions: response.map((session) => session.name )
                  }
              )
          })
          .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getInitialState()
    }

    session_selected(event){
        var session_name = event.target.value
        this.setState({session_name: session_name})

        const sess = this.state.sessions.find((s, i) => s.name === session_name )
        window.sess = sess
        if (sess){
            this.setState({session: {
                minDate: new Date(sess.minDate),
                maxDate: new Date(sess.maxDate),
                disabledDays: []
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
