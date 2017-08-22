import React from 'react';

const list = [
	{
		id: 1,
		name: 'Mae',
		friend: '3',
		img1: './img/img1.png',
		img2: './img/img1-3.png',
		img3: './img/img1-2.png',
		img4: './img/img1-5.png'
	},
	{
		id: 2,
		name: 'Marry',
		friend: '3',
		img1: './img/img1.png',
		img2: './img/img1-2.png',
		img3: './img/img1-3.png',
		img4: './img/img1-4.png'
	},
	{
		id: 3,
		name: 'Jane',
		friend: '3',
		img1: './img/img1-3.png',
		img2: './img/img1-4.png',
		img3: './img/img1.png',
		img4: './img/img1-2.png'
	}

];

class Grouplist extends React.Component {
	constructor(){
		super();
	}

	createList(){
		return list.map((i)=>{
			return(	
				<div key={i.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-12 hide_onclick">
	              <div className="wrap_image" data-toggle="modal" data-target="#profile">
	                <div className="row">
	                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 wrap_group_img"><img src={i.img1}/></div>
	                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 wrap_group_img"><img src={i.img2}/></div>
	                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 wrap_group_img"><img src={i.img3}/></div>
	                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 wrap_group_img"><img src={i.img4}/></div>
	                </div>
	                <div className="caption">
	                  <div className="wrap_per_name group_name_caption">
	                    <label>{i.name} & {i.friend} Friends</label>
	                  </div>
	                </div>
	              </div>
	            </div>
			)
		})
	}

	render(){
		return(
			<div className="container">
	        <div className="row">
	          {this.createList()}	          	          
	        </div>
	      </div>
		)
	}
}

export default Grouplist;

 