import React, { Component } from 'react';

var calendarStyle = {"height": "500px", "border-color": "black"}
class Calendar extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
           <div id ="inlineContainer" className="col-lg-8" style={calendarStyle}>
           </div>
        )
    }

}

export default Calendar;
