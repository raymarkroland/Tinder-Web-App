import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Switch,Route, Link } from 'react-router-dom';

import Navbar from './Components/navbar';
import Profile from './Components/profile';
import Peoplenearyou from './Components/peoplenearyou';
import Group from './Components/group';
import Settings from './Components/settings';
import Msg from './Components/msg';

 
render(

	<BrowserRouter>
		<div className="container-fluid">
			<Navbar/>
			<Switch>
				<Route exact path="/" component={Peoplenearyou} /> 
				<Route exact path="/Profile" component={Profile} /> 
				<Route exact path="/Group" component={Group} />
				<Route exact path="/Messages" component={Msg} /> 				
					<Route exact path="/Settings" component={Settings} /> 				
			</Switch>		
		</div>
	</BrowserRouter>,

	document.getElementById('tinder')	
);