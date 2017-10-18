import React from 'react';
import Parts from './Parts';
import SignUp from './SignUp';
import SignUpCar from './SignUpCar';
import SignUpUser from './SignUpUser';
import Map from './Map';
import AddPhoto from './addPhoto'
import Home from './Home';
import Damage from './damage'
import Camera from './camera';
import Info from './Info';
import Abstract from './Abstract'
import Results from './Results';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect	
} from 'react-router-dom';

let info = new Info();
const App = (props) => {
	const {model} =  props;
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/damage" render={() => <Damage info={info} />}/>	   
				<Route  path="/home" render={() => <Home info={info} />}/>
				<Route  path="/signup" render={() => <SignUp info={info} />}/>
				<Route  path="/signupCar" render={() => <SignUpCar info={info} />}/>
				<Route  path="/signupUser" render={() => <SignUpUser info={info} />}/>
				<Route  path="/showParts" render={() => <Parts info={info} />}/>
				<Route  path="/camera" render={() => <Camera info={info} />}/>
				<Route  path="/map" render={() => <Map model={model} info={info} />}/>
				<Route  path="/addPhoto" render={() => <AddPhoto info={info} />}/>
				<Route  path="/abstract" render={() => <Abstract info={info} />}/>
				<Route  path="/results" render={() => <Results info={info} />}/>
				<Route render={() => <Home info={info} />}/>
			</Switch>
		</div>
	</BrowserRouter>)
}
export default App;

