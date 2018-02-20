import React, { Component } from 'react';
import DateRangePicker from './DateRangePicker.js'



export default class CreateSesionForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            "time_intervals": [{"from": "12:14", "to": null}]
        }
        this.addTimeInterval = this.addTimeInterval.bind(this)
        this.deleteTimeInterval = this.deleteTimeInterval.bind(this)
    }

    addTimeInterval(event){
        event.preventDefault()
       console.log("add time interval")
        const time_intervals = this.state.time_intervals
        this.setState({time_intervals: [...time_intervals, {"from": null, to: null}]})
    }

    deleteTimeInterval(event){
        console.log("delete t inter")
        console.log(i)
    }
    render(){
        const { time_intervals } = this.state
        return (
            <div>
                <h1>Crear Nueva Sesión</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea className="form-control" id="description" name="" rows="2"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duración</label>
                        <div className="row"  style={{"display": "flex", "alignItems": "center"}}>
                            <div className="col-md-11" style={{marginRight: 0, paddingRight: 0}}>
                                <input type="number" className="form-control" id="duration" placeholder="duración" /> 
                            </div>
                            <div className="col-md-1" style={{paddingLeft: 5}}>minutos</div>
                        </div>
                    </div>
                    <label>Seleccione rango de días</label>
                    <DateRangePicker />
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
                                     <tr key={i}>
                                         <td>
                                             <input className="form-control" name="" type="time" value={t_interval.from}/>
                                         </td>
                                         <td>
                                             <input className="form-control" name="" type="time" value={t_interval.to}/>
                                         </td>
                                         <td>
                                             <button onClick={() => this.deleteTimeInterval(i)}>Eliminar</button>
                                         </td>
                                     </tr>
                                 )

                            })}
                        </tbody>
                    </table>
                    <p><a href="#" onClick={this.addTimeInterval}>Nuevo Intervalo</a></p>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>

            </div>

        )
    }
}
