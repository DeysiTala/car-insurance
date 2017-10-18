import React, { Component } from "react";
import {
	NavLink
	
} from "react-router-dom";
import Utils from "./Utils.js";
import './SignUp.css';

class SignUp extends Component {
	constructor(props,context) {
		super(props,context);
		this.inputName = undefined;
		this.inputEmail = undefined;
		this.inputpassword = undefined;
		this.state = {
			goFordwardInp: false,
			goFordwardPass: false,
			complete: false
		};
	}
		formsName(e) {
		this.inputName = e.target.value;

	}
	formsEmail(e) {
		this.inputEmail = e.target.value;
		if(this.inputEmail.indexOf('@')!=-1 && this.inputEmail.indexOf('.')!=-1){
			this.setState({
				goFordwardInp: true
			});
		}
		else
			this.setState({
				goFordwardInp:false
			});

		console.log("inp",this.state.goFordwardInp);
	}
	formsPassword(e) {
		this.inputpassword = e.target.value;
		if((this.inputpassword).length > 6){
			this.setState({
				goFordwardPass: true
			});
		}
		else
		this.setState({
			goFordwardPass:false
		});
		console.log("pass ",this.state.goFordwardPass);
	}
	render() {
		const saveInfo = () => {
			this.props.info.email = this.inputEmail
			this.props.info.user = this.inputName
		}
		const validation = e => {
			this.setState = {
				complete: true
			};
		};

		return (
			<div>
				<section className="container-fluid form text-center">
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
							<h1 className="titleCar">Iniciar sesión</h1>
							</div>
						</div>
						</div>
					</header><br/><br/>
					<form
						className="">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="glyphicon glyphicon-envelope" />
							</span>
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Correo"
								onChange={e => (this.formsEmail(e))}
								required
							/>
						</div>
						<br />
						<div className="input-group">
							<span className="input-group-addon">
							<i className="fa fa-unlock" aria-hidden="true"></i>
							</span>
							<input type="password" onChange={e => (this.formsPassword(e))} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
						</div>
						<div />
						<br />
						<a className=" btn-block btn-social btn-facebook">
						<i className="fa fa-facebook"></i> Ingresar con Facebook
						</a>
						<a className=" btn-block btn-social btn-google-plus">
						<i className="fa fa-google-plus"></i> Ingresar con Google
						</a><br/>

						<label className="form-check-label">
							<input
								className="form-check-input"
								id="agreeUser"
								type="checkbox"
							/>
							Recuerdame 
							<br />
						</label>

		 <br />
						{this.state.goFordwardInp && this.state.goFordwardPass ? (
							<NavLink
								onClick={saveInfo}
								to={"/map"}
								className="btn btn-lg btn-block btn-lyft"
							>
								Siguiente
              </NavLink>
						) : (
								<button className="btn btn-lg btn-block btn-lyft disabled">
									Siguiente
              </button>
							)}
					</form>
					
					<div>
      </div>
				</section>
			</div>
		);
	}
}
export default SignUp;

	
	
	
	
