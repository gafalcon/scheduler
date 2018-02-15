import React, { Component } from 'react';

var formStyle = {
    margin: "auto"
}
class Login extends Component {

    constructor(props){
        super(props)
        this.state = {"username": "", "passwd": ""}
        this.passwdChange = this.passwdChange.bind(this)
        this.usernameChange = this.usernameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("on submit")
        console.log(this.state)
        this.props.logged_in(this.state.username)
    }

    passwdChange(event){
        this.setState({"passwd": event.target.value})
    }

    usernameChange(event){
        this.setState({username: event.target.value})
    }

    render(){
        return (
        <div>
            <h1>Login</h1>
            <div className="row">
                <form style={formStyle} onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Usuario</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese usuario" value={this.state.username} onChange={this.usernameChange}/>
                            <div className="input-group-prepend">
                                <div className="input-group-text">@espol.edu.ec</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese Contraseña" value={this.state.passwd} onChange={this.passwdChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Login;
