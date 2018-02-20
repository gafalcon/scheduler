import React, { Component } from 'react';
import DayPicker from 'react-day-picker'
import DateRangePicker from './DateRangePicker.js'


export default function CreateSesionForm(props){
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
                <table className="table">
                    <thead>
                        <tr>
                            <th>Desde</th>
                            <th>Hasta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input className="form-control" name="" type="time" value=""/>
                            </td>
                            <td>
                                <input className="form-control" name="" type="time" value=""/>
                            </td>
                            <td>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                    <a href="">Nuevo Intervalo</a>
                </table>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>

        </div>

    )

}
