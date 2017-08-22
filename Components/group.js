import React from 'react';
import Grouphead from './group-head';
import Grouplist from './group-list';
import Groupmodal from './group-modal';

const Group = () => {
	return(
		<div className="container-fluid">
		<div className="clearfix_height"></div>
			<div className="row">
				<Grouphead/>
				<Grouplist/>
				<button className="btn_ceate_group ripple" data-toggle="modal" data-target="#groupModal"><i className="fa fa-plus" aria-hidden="true"></i></button>
			</div>
			<Groupmodal/>
		</div>
	)
}

export default Group;