import React from 'react'
import DayPicker from 'react-day-picker'
import '../node_modules/react-day-picker/lib/style.css'

export default function DatePicker(props){
    return <DayPicker
               selectedDays={props.selectedDay}
               onDayClick={props.dateSelected}
               disabledDays={[...props.disabledDays,
                              {daysOfWeek: [0, 6]},
                              {after: props.maxDate, before: props.minDate}
               ]}
    />
}
