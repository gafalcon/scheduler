import React, { Component } from 'react';
import $ from 'jquery'
/* import '../node_modules/pickadate/lib/picker.js'*/
import '../node_modules/pickadate/lib/picker.time.js'

export default class TimePicker extends Component {

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
                /* this.$holder.blur();*/
            },
        });
    }

    render(){
        return (
            <input id="timepicker" className="timepicker" name="" type="text" value="" style={{visibility: "hidden"}}/>
        )
    }

}
