import './SignUpUser.css';
import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'

class SignUpUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goFordward: false
        }

        this.userInfo = {
            name: null,
            surname: null,
            email: null,
            phone: null
        }
    }

    render() {
        const { model } = this.props;
        console.log('SignUpForm');

        const onInputChange = (e) => {
            this.setState({
                goFordward: e.target.checked
            });
        }

        const HeaderProfile = () => {
            return (
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1 col-xs-1 text-center">
                                <a href="javascript:window.history.back();">
                                    <i
                                        className="fa fa-chevron-left arrow"
                                        aria-hidden="true" />
                                </a>
                            </div>
                            <div className="col-md-10 col-xs-10 text-center">
                                <h1 className="titleCar">Regístrate</h1>
                                <br /> <br />
                                <h4 className = "infoCar">Información del Propietario</h4>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }

        return (
            <div>
                <HeaderProfile />
                <section className="container-fluid">
                    <div className="row">

                    <div className="col-xs-10 col-xs-offset-1 text-center">
                            
                            <form
                                data-toggle="validator">
                                <div className="input-group">
                                <div className="input-group-btn ">
                                    <div className="form-group">
                                    <select className="form-control">
                                        <option>DNI</option>
                                        <option>CEX</option>
                                        <option>RUC</option>
                                    </select>
                                    </div>
                                </div>
                                    <input
                                    id="telNumber"
                                    className="form-control"
                                    type="number"
                                    placeholder= "Número"
                                    required
                                    />
                                </div>
                                <br />
                                <div className="form-group dataRegister">
                                    <div className="col-md-6 col-xs-6 dataInput">
                                        <label htmlFor="text">Nombre:</label>
                                        <input type="text" className="form-control" name="fist name" placeholder="Nombre" required/>
                                    </div>
                                    <div className="col-md-6 col-xs-6 dataInput">
                                        <label htmlFor="text">Apellidos:</label>
                                        <input type="text" className="form-control" name="last name"  placeholder="Apellidos" required/>
                                    </div><br/>
                                
                                </div><br/>
                                <div className="form-group dataRegister">
                                    <div className="col-md-6 col-xs-6 dataInput">
                                        <label htmlFor="text">Teléfono:</label>
                                        <input type="number" className="form-control"  placeholder="Telf / Celular" required/>
                                    </div>
                                    <div className="col-md-6 col-xs-6 dataInput">
                                        <label htmlFor="email">Correo:</label>
                                        <input type="email" className="form-control" name="email" placeholder="correo@dominio.com<" required/>
                                    </div><br/>
                                    
                                </div>
                                <br/>
                                <div>
                                <input className="form-check-input" id="agreeUser" type="checkbox"  required onChange={onInputChange}/>
                                    Estoy de Acuerdo con los <a href="lyft.com"> Términos del Servicio</a>
                                </div><br/>
                                    
                                
                                {
                                    this.state.goFordward ?
                                        <NavLink className="btn btn-lg btn-block  next"
                                            to={"/map"}> Siguiente
                                        </NavLink>
                                        :
                                        <button
                                            className="btn btn-lg btn-block next disabled">Siguiente</button>

                                }
                            </form>
                            </div>
                 
                    </div>
                </section>
            </div>

        );
    }
}

export default SignUpUser;