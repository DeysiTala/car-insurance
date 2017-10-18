import React, { Component } from 'react';
import {
	NavLink
} from 'react-router-dom'
import './Home.css'


const Home = ({ model }) => {

	return (
		
		<div className="home container">
			<div className="row">
				<div className="col-xs-12 text-center logo-home">
					<img src="./logo.png"  className="text-center"/>
				</div>
			</div>
			<div className="row  btns">
				<div className="col-xs-6 col-lg-6 col-md-6">
					<NavLink to={"/signupCar"}
						className="btn lit btn-lg btn-block btn-signUp"
					>
						Registrate
					</NavLink>
				</div>
				<div className="col-xs-6 col-lg-6 col-md-6">
					<NavLink to={"/signup"}
						className="btn lit btn-lg btn-block btn-signUp"
					>
						Iniciar sesión
					</NavLink>
				</div>
			</div>

		</div>
	);
}

export default Home;