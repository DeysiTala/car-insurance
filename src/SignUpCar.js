import React, { Component } from 'react';
import './SignUpCar.css';
import {
  NavLink
} from 'react-router-dom'

class SignUpCar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }

    this.userInfo = {
      phone: null
    }
  }

  render() {
    const { model } = this.props;
    console.log('SignUpForm');

    const onInputChange = (e) => {
      if (e.target.value === "") {
        console.log("false");
        this.setState({
          completed: false
        });
      } else {
        console.log("true");
        this.setState({
          completed: true
        });
      }
    }

    const HeaderSignUp = () => {
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
                <h4 className = "infoCar">Información del Vehículo</h4>
              </div>
            </div>
          </div>
        </header>
      );
    }

  


    return (
      <div className="container-fluid" >
        <div className="row">
          <HeaderSignUp />
          <section>
              <div className="col-xs-10 col-xs-offset-1 text-center">
                <form
                  data-toggle="validator">
                  <div className="input-group">
                  <div className="input-group-btn ">
                    <div className="form-group">
                      <select className="form-control" required>
                        <option>Marca</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Chevrolet</option>
                        <option>Ford</option>
                        <option>Honda</option>
                        <option>Hyundai</option>
                        <option>Jeep</option>
                        <option>Kia</option>
                        <option>Land Rover</option>
                        <option>Mahindra</option>
                        <option>Mazda</option>
                        <option>Mercedes-Benz</option>
                        <option>Mitsubisshi</option>
                        <option>Nissan</option>
                        <option>Porsche</option>
                        <option>Renault</option>
                        <option>Subaru</option>
                        <option>Susuki</option>
                        <option>Toyota</option>
                        <option>Volkswagen</option>
                        <option>Volvo</option>
                      </select>
                    </div>
                  </div>
                    <input
                      id="telNumber"
                      className="form-control"
                      type="text"
                      placeholder= "Modelo"
                      required
                      />
                  </div>
                  <br />

                  <div>
                  <label htmlFor="text">Año de Fabricación:</label>
                  <input
                      className="form-control"
                      type="number"
                      placeholder= "Año de Fabricación"
                      required
                      />
                  </div>
                  <br />

                  <div>
                  <label htmlFor="text">Valor Sugerido del Vehículo:</label>
                  <input
                      className="form-control"
                      type="number"
                      placeholder= "S/. 00 000 Nuevos Soles"
                      required
                      />
                  </div>
                  <br />

                  <div>
                  <label htmlFor="text">Número de Placa:</label>
                  <input
                      className="form-control"
                      type="text"
                      placeholder= "ABC-123"
                      required
                      onChange={onInputChange} />
                  </div>
                  <br />

                  {
                    this.state.completed ?
                      <NavLink to={"./SignUpUser"}
                          className="btn btn-lg btn-block next">
                          Siguiente
                      </NavLink>
                      :
                      <button
                        className="btn btn-lg btn-block next disabled">Siguiente</button>
                  }
                </form>
              </div >
          
        </section>
        </div>
      </div>
    );
  }
}


export default SignUpCar;