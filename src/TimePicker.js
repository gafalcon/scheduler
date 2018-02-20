import React, { Component } from 'react';
import $ from 'jquery'
import '../node_modules/pickadate/lib/picker.js'
import '../node_modules/pickadate/lib/picker.time.js'
import '../node_modules/pickadate/lib/themes/default.css'
import '../node_modules/pickadate/lib/themes/default.time.css'

export default class TimePicker extends Component {

    constructor(props){
        super(props)
        this.timepickerClosed = this.timepickerClosed.bind(this)
    }

    componentDidMount(){

        var interval = 15;
        var minTime= [8,30];
        var maxTime= [14, 15];
        var disabledTimes = [
            [12,30],
            [12,45],
            [9,15]
        ]

        this.input =  $('.timepicker').pickatime({
            clear: "Cerrar",
            interval: interval,
            min: minTime,
            max: maxTime,
            disable: disabledTimes,
            editable: false,
            onClose: function() {
                console.log('Closed now');
                this.$holder.blur();
            },
        });

        this.timepicker = this.input.pickatime('picker');
        this.timepicker.on('close', this.timepickerClosed);
    }

    componentWillUnmount(){
        //TODO release resources
        /* this.*/
    }

    timepickerClosed(){
        console.log("Closed");
        this.props.timeSelected(this.timepicker.get())
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.visible === true && this.props.visible !== nextProps.visible){
            this.timepicker.open()
            console.log("Make visible")
        }
    }

    render(){
        return (
            <input id="timepicker" className="timepicker" name="" type="text" value="" style={{visibility: "hidden"}}/>
        )
    }

}
