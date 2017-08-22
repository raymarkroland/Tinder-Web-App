import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return(
		<nav id="header" className="navbar navbar-fixed-top">
		    <div id="header-container" className="container navbar-container">
		        <div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                <span className="sr-only">Toggle navigation</span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		            </button>
		            <a id="brand" className="navbar-brand remove_padding_brand" href="#"><img src="img/brand.png"/></a>
		        </div>
		        <div id="navbar" className="collapse navbar-collapse">
		            <ul className="nav navbar-nav">
		                <li><Link to='/Profile'>Profile</Link></li>
		                <li><Link to='/'>People near you</Link></li>
		                <li><Link to='/Group'>Group</Link></li>
		                <li><Link to='Messages'>Messages</Link></li>
		            </ul>
		            <ul className="nav navbar-nav navbar-right">
		              <li><Link to='/Settings'>Settings</Link></li>
		              <li><a className="ripple" href="#logout">Log out</a></li>
		            </ul>
		        </div>
		    </div>
		</nav>
	)
}

export default Navbar;

 
