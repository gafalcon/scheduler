import React from 'react';

var SessionSelect = function(props){
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Seleccione una sesión</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={props.session_selected}>
                <option value=""></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
}

export default SessionSelect;
