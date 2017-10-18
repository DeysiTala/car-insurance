import React, { Component } from "react";
import DataInfo from './datainfo';
import {Col,Thumbnail,Glyphicon,Button} from 'react-bootstrap';
import './Result.css';
import {
  NavLink
} from "react-router-dom";

class Results extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        completed: false
      }
      this.userInfo = {
        phone: '+32 978 888 444'
      }
    }
    showDetails()
    {
      let obj = DataInfo.DetailInsurance[this.props.info.typeDamage];
      return <div>
        <h4>Tipo de daño</h4>
        <p className='user-info'>{obj.nameDamage}({obj.damage})</p>
        <h4>Su seguro debe hacer lo siguiente: </h4>
        <p className='user-info'>{obj.description}</p>
        <h4>Y le brinda las siguientes soluciones:</h4>
        <ul className='user-info'>
          {
            obj.solutions.map((item,index)=>{
              return <li key={index}>{DataInfo.Solutions[item]}</li>
            })
          }
        </ul>

      </div>
    }
    render(){
      
      const BtnCall = () => (
          <NavLink to={'/map'} className="btn btn-block">Llamar</NavLink>
      );
      return (<div className="container">
                <div className='row'>
                  <div className="col-md-1 col-xs-1 text-center">
                      <a href="javascript:window.history.back();">
                          <i className="fa fa-chevron-left arrow" aria-hidden="true" />
                        </a>
                  </div>
                      <div className="col-md-10 col-xs-10 text-center">
                          <h3 className="titleCar">Resultado</h3>
                      </div>                                
                  </div>
                <Col xs={10} md={4} id="card">
                  <Thumbnail src="https://7c1096715b08106e45d9-86066560621c8d09273ccd7d125f633d.ssl.cf5.rackcdn.com/r/logos/875/2706_5952b70779d0e.jpg">
                    <h2 id="name">Estimado usuario: {this.props.info.user}</h2>
                    
                    <p>
                      {this.showDetails()}
                    </p>
                  </Thumbnail>
                    <BtnCall/>
                </Col>
              </div>)
      }  
}  
export default Results;