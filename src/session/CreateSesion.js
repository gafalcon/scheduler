import React, { Component } from 'react';
import DateRangePicker from './DateRangePicker.js'


class DeleteButton extends Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault()
        this.props.deleteTimeInterval(this.props.t_id)
    }
    render(){
        return <button onClick={this.handleClick}>Eliminar</button>
    }
}

export default class CreateSesionForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            "time_intervals": [{"from": "07:00", "to": "16:00", "id": "0"}],
            "name": "",
            "description": "",
            "duration": "",
            from: null,
            to: null
        }
        this.addTimeInterval = this.addTimeInterval.bind(this)
        this.deleteTimeInterval = this.deleteTimeInterval.bind(this)
        this.nameChanged = this.nameChanged.bind(this)
        this.durationChanged = this.durationChanged.bind(this)
        this.descriptionChanged = this.descriptionChanged.bind(this)
        this.handleDate = this.handleDate.bind(this)
    }

    handleDate(dateState){
        this.setState(dateState)
    }

    addTimeInterval(event){
        event.preventDefault()
        const time_intervals = this.state.time_intervals
        this.setState({time_intervals: [...time_intervals, {"from": "", to: "", "id": `${time_intervals.length}`}]})
    }

    deleteTimeInterval(t_id){
        this.setState((prevState, props) => ({
            time_intervals: prevState.time_intervals.filter((t_inter, i) => i !== t_id)
        }))
    }

    timeChangedG(t_id, type){
        return function(event){
            const { time_intervals } = this.state
            const new_time_intervals = time_intervals.map((t, idx) => (
                (idx === t_id)
                ? {...t, [type]: event.target.value}
                : t
            ))
            this.setState({time_intervals: new_time_intervals} )
        }
    }

    nameChanged(e){ this.setState({name: e.target.value}) }
    durationChanged(e){ this.setState({ duration: e.target.value })}
    descriptionChanged(e){ this.setState({ description: e.target.value })}

    render(){
        const { time_intervals, name, duration, description } = this.state
        return (
            <div>
                <h1>Crear Nueva Sesión</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={this.nameChanged}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea className="form-control" id="description" name="" rows="2" value={description} onChange={this.descriptionChanged}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duración</label>
                        <div className="row"  style={{"display": "flex", "alignItems": "center"}}>
                            <div className="col-md-11" style={{marginRight: 0, paddingRight: 0}}>
                                <input type="number" className="form-control" id="duration" placeholder="duración" value={duration} onChange={this.durationChanged}/> 
                            </div>
                            <div className="col-md-1" style={{paddingLeft: 5}}>minutos</div>
                        </div>
                    </div>
                    <label>Seleccione rango de días</label>
                    <DateRangePicker from={this.state.from} to={this.state.to} handleDate={this.handleDate}/>
                    <label>Seleccione Disponibilidad de tiempo</label>
                    <table >
                        <thead>
                            <tr>
                                <th>Desde</th>
                                <th>Hasta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {time_intervals.map((t_interval, i) => {
                                 return (
                                     <tr key={t_interval.id}>
                                         <td>
                                             <input className="form-control" name="" type="time" value={t_interval.from} onChange={this.timeChangedG(i, "from").bind(this)}/>
                                         </td>
                                         <td>
                                             <input className="form-control" name="" type="time" value={t_interval.to} onChange={this.timeChangedG(i, "to").bind(this)}/>
                                         </td>
                                         <td>
                                             <DeleteButton deleteTimeInterval={this.deleteTimeInterval} t_id={i} />
                                         </td>
                                     </tr>
                                 )

                            })}
                        </tbody>
                    </table>
                    <p><button type="button" className="btn btn-link" onClick={this.addTimeInterval}>+ Nuevo Intervalo</button></p>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>

            </div>

        )
    }
}
