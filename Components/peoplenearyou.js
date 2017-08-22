import React from 'react';
import BodyList from './bodylist';
import Modalboost from './Modalboost';
import Modalprofile from './modalprofile';


const Peoplenearyou = (props) => {
  console.log(props);
	return(
    <section>
    	<div className="clearfix_height"></div>
        <BodyList/>
         <div className="wrap_heart">
	        <div id="heart"></div>
	      </div>
        <Modalboost/>
        <Modalprofile/>
    </section>
	)
}

export default Peoplenearyou;

 