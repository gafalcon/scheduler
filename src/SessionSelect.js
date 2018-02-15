import React from 'react';

var SessionSelect = function(props){
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Seleccione una sesión</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={props.session_selected}>
                <option value=""></option>
                { props.availableSessions.map((opt, i) => <option>{opt}</option> )}
            </select>
        </div>
    )
}

export default SessionSelect;
