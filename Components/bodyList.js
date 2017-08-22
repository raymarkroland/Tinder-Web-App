import React from 'react';

const list = [
	{
		id: 1,
		name: 'Jean O',
		age: '23',
		img: './img/img1.png',
		school: 'Far Eastern university',
		className1: 'col-lg-3 col-md-3 col-sm-6 col-xs-12 hide_onclick'
	},
	{
		id: 2,
		name: 'Anne M',
		age: '23',
		img: './img/img1-3.png',
		school: 'University of Santo Thomas',
		className1: 'col-lg-3 col-md-3 col-sm-6 col-xs-12 hide_onclick1'
	},
	{
		id: 3,
		name: 'Casy',
		age: '25',
		img: './img/img1-5.png',
		school: 'University of Santo Thomas',
		className1: 'col-lg-3 col-md-3 col-sm-6 col-xs-12 hide_onclick2'
	}

];

class Bodylist extends React.Component {
	constructor(){
		super();
		this.state = {
			bodyList: true
		};
	}

	handleClickHideList() {
		this.setState({
			bodyList: false
		});
		console.log(this.state.bodyList)
	};


	createList(){
		return list.map((i)=>{
			return(	
				<div key={i.id} className={i.className1}>
				
		            <div className="wrap_image" data-toggle="modal" data-target="#profile">
		              <img src={i.img}/>
		              <div className="caption">
		                <div className="wrap_per_name">
		                  <label>{i.name},<span className="lbl_age">{i.age}</span></label>
		                  <span className="lbl_univ">{i.school}</span>
		                </div>
		              </div>
		            </div>
		            <div className="wrap_btn_thubnails">
		              <button className="btn_thubnails ripple2 dislike"><i className="fa fa-times fa-lg dislike" aria-hidden="true"></i></button>
		              <button className="btn_thubnails ripple2" data-toggle="modal" data-target="#myboost"><i className="fa fa-bolt fa-lg violet" aria-hidden="true"></i></button>
		              <button className="btn_thubnails ripple2 like"><i className="fa fa-heart fa-lg green" aria-hidden="true"></i></button>
		              <button className="btn_thubnails ripple2"><i className="fa fa-star fa-lg blue" aria-hidden="true"></i></button>
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

export default Bodylist;

 