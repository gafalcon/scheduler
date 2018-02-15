import React, { Component } from 'react';
import Datepickk from 'datepickk';
import 'datepickk/dist/datepickk.min.css';

var calendarStyle = {"height": "500px", "borderColor": "black"}
class Calendar extends Component {

    constructor(props){
        super(props);

        this.onDateSelect = this.onDateSelect.bind(this)
    }

    onDateSelect(checked){
        if (checked){
            /* timepicker.open();*/
            this.props.dateSelected(this.datepicker.selectedDates[0])
        }
    }

    componentDidMount() {

        /* var minDate = new Date(2018,0,1);
         * var maxDate = new Date(2018,11,23);*/
        var container = document.querySelector('#inlineContainer');

        this.datepicker = new Datepickk({
		        container: container,
		        inline: true,
            title: "Escoja día para su cita",
            disabledDays: [0, 6],
            maxDate: this.props.maxDate,
            minDate: this.props.minDate,
            maxSelections: 1,
            onSelect: this.onDateSelect
            /* onSelect: onDateSelect,
             * disabledDates: disabledDates,*/
            /* lang: 'es',*/
            /* onNavigation: function(){
             *     var month = document.querySelector('.d-month');
             *     console.log(month.innerHTML);
             *     this.title = "Mes: " + month.innerHTML;
             * }*/

        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.maxDate !== nextProps.maxDate)
            this.datepicker.maxDate = nextProps.maxDate; 
        if (this.props.minDate !== nextProps.minDate)
            this.datepicker.minDate = nextProps.minDate; 
        /* if (props.params.id !== nextProps.params.id) {
         *     doSomething(nextProps.params.id);
         * }*/
    }
    render(){
        return (
            <div>
                <div className="col-lg-2" style={calendarStyle}>
                </div>
                <div id ="inlineContainer" className="col-lg-8" style={calendarStyle}>
                </div>
            </div>
        )
    }

}

export default Calendar;
