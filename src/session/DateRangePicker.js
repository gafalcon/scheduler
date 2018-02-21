import React from 'react'

import DayPicker, { DateUtils } from 'react-day-picker'
import '../../node_modules/react-day-picker/lib/style.css'
import './DateRange.css'

export default class DateRangePicker extends React.Component {
    constructor(props){
        super(props)
        this.handleDayClick = this.handleDayClick.bind(this)
        this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
        this.state = this.getInitialState()
    }

    getInitialState(){
        return {
            enteredTo: null //keep track of the last day for mouseEnter
        }
    }
    isSelectingFirstDay(from, to, day){
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from)
        const isRangeSelected = from && to
        return !from || isBeforeFirstDay || isRangeSelected
    }
    handleDayClick(day){
        const { from, to } = this.props;
        if (from && to && day >= from && day <= to){
            this.handleResetClick()
            return;
        }
        if (this.isSelectingFirstDay(from, to, day)){
            this.props.handleDate({
                from: day,
                to: null,
            })
            this.setState({
                enteredTo: null
            })
        }else{
            this.props.handleDate({to: day})
            this.setState({
                enteredTo: day
            })
        }
    }
    handleDayMouseEnter(day){
        const from = this.props.from
        const to = this.props.to
        if (!this.isSelectingFirstDay(from, to, day)){
            this.setState({
                enteredTo: day
            })
        }
    }
    handleResetClick(){
        this.props.handleDate({from: null, to: null})
        this.setState(this.getInitialState())
    }
    render(){
        const { from, to } = this.props;
        const enteredTo = this.state.enteredTo
        const modifiers = { start: from, end: enteredTo };
        const disabledDays = { before: this.props.from };
        const selectedDays = [from, {from, to: enteredTo }]
        return (
            <div>
                <DayPicker
                    className="Range"
                    numberOfMonths={2}
                    fromMonth={from}
                    selectedDays={selectedDays}
                    disabledDays={disabledDays}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                    onDayMouseEnter={this.handleDayMouseEnter}
                />
                <p>
                    {!from && !to && 'Seleccione dia de inicio.'}
                    {from && !to && 'Seleccione el día de fin.'}
                    {from && to &&
                     `Seleccionado desde ${from.toLocaleDateString()} a ${to.toLocaleDateString()} `}
                </p>

            </div>

        )
    }
}
