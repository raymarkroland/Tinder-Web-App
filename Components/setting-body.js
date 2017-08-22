import React from 'react';

const SettingsdBody = () => {
	return(
		<div className="container-fluid">
			<div className="container">
	            <div className="row">
	                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
	                    <button className="ripple2 btn_prem">Get Tinder Plus</button>
	                </div>
	                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
	                    <button className="btn_prem violet ripple2">Get More Boosts <br/> <span>Click to Refill Now...</span></button>
	                </div>
	                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
	                    <button className="btn_prem blue ripple2">Get Super Likes <br/> <span>Click to Refill Now...</span></button>
	                </div>
	            </div>
	        </div>




	        <div className="clearfix_height2"></div>
	        <div className="container">
	            <div className="row">
	                <label htmlFor="" className="lbl_settings">Discover Settings</label><br/>
	                <span className="lbl_sub_settings">Find match in</span><br/>
	                <span className="lbl_sub_settings"><i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>My Current Location</span>
	            </div>
	            <div className="clearfix_height2"></div>
	            <div className="row">
	                <label htmlFor="" className="lbl_sub_seetings1">Show Me</label><br/>
	                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">Male</label>
	                  <div className="slide">
	                    <input type="checkbox" id="male"/>
	                    <label htmlFor="male" className="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div>
	                </div>
	                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">Women</label>
	                  <div className="slide">
	                    <input type="checkbox" id="women"/>
	                    <label htmlFor="women" className="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div>
	                </div>
	            </div>
	            <div className="clearfix_height2"></div>
	            <div className="row">
	                <label htmlFor="" className="lbl_sub_seetings1">Maximum Distance</label><br/>
	                  <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
	                    <div className="budget-wrap">
	                        <div className="budget">
	                            <div className="header">
	                                <div className="title clearfix"><span className="pull-right"></span></div>
	                            </div>
	                            <div className="content">
	                                <input type="range" min="0" max="100" value="0" data-rangeslider/>
	                            </div>
	                        </div>
	                    </div>
	                  </div>                
	            </div>
	            <div className="clearfix_height2"></div>
	            <div className="row">
	                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
	                    <label className="lbl_sub_seetings1">Age Range</label>
	                    <div className="clearfix_reg1"></div>
	                    <input className="text" id="range" value="" name="range" />
	                    <span className="lbl_sub_settings2">
	                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores temporibus tempore inventore incidunt quidem ratione voluptatibus pariatur esse numquam saepe magnam eum nihil natus, aut laboriosam quia adipisci, nisi dolorum.
	                    </span>
	                </div>
	            </div>
	            <div className="clearfix_height2"></div>
	            <div className="row">
	                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">Show me on  Tinder</label>
	                  <div className="slide">
	                    <input type="checkbox" id="show"/>
	                    <label htmlFor="show" className="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div><br/><br/>    
	                  <span className="lbl_sub_settings2">
	                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Quod autem magnum dolorem 
	                    </span>
	                </div>
	                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">Swipe with friends</label>
	                  <div className="slide">
	                    <input type="checkbox" id="swipe"/>
	                    <label htmlFor="swipe" className="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div><br/><br/>
	                  <span className="lbl_sub_settings2">
	                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Quod autem magnum dolorem 
	                  </span>
	                </div>
	            </div>
	        </div>



	        <div className="clearfix_height2"></div>
	        <div className="container">
	            <div className="row"><hr/></div>
	        </div>


	        <div className="container">
	        <div className="clearfix_height2"></div>
	            <div className="row">
	                <label htmlFor="" className="lbl_settings">App Settings</label><br/>
	                <label className="lbl_switch">Notification</label><br/><br/>
	                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">New Matches</label>
	                  <div className="slide">
	                    <input type="checkbox" id="new"/>
	                    <label htmlFor="new" class="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div>
	                </div>
	                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">Messages</label>
	                  <div className="slide">
	                    <input type="checkbox" id="msg"/>
	                    <label htmlFor="msg" className="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div>
	                </div>
	            </div>
	            <div className="clearfix_height2"></div>
	            <div className="row">
	                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">Likes</label>
	                  <div className="slide">
	                    <input type="checkbox" id="like"/>
	                    <label htmlFor="like" className="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div>
	                </div>
	                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                  <label className="lbl_switch">Super Likes</label>
	                  <div className="slide">
	                    <input type="checkbox" id="super"/>
	                    <label htmlFor="super" className="slider">
	                      <span className="switch"></span>
	                    </label>
	                  </div>
	                </div>
	            </div>
	        </div>


	        <div className="clearfix_height2"></div>
	        <div className="container">
	            <div className="row">
	                <label htmlFor="" className="lbl_switch">Show Distance in</label><br/>
	                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                 <div className="pure-radiobutton">
	                    <input id="mi" name="radio" type="radio" className="radio"/>
	                    <label className="lbl_group_friends_name" htmlFor="mi">Mi.</label>
	                  </div>
	                </div>
	                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                  <div className="pure-radiobutton">
	                    <input id="km" name="radio" type="radio" className="radio"/>
	                    <label className="lbl_group_friends_name" htmlFor="km">Km</label>
	                  </div>
	                </div>
	            </div>
	            <div className="clearfix_height2"></div>
	            <div className="row">
	                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                 <label htmlFor="" className="lbl_settings">Contact us</label><br/>
	                    <ul className="wrap_contact">
	                        <li><a href="">Help & Support</a></li>
	                        <li><a href="">Share Tinder</a></li>
	                        <li><a href="">Restore Purchase</a></li>
	                    </ul>
	                </div>
	                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                 <label htmlFor="" className="lbl_settings">Legal</label><br/>
	                    <ul className="wrap_contact">
	                        <li><a href="">Licences</a></li>
	                        <li><a href="">Privacy Policy</a></li>
	                        <li><a href="">Terms of Services</a></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
		</div>
	)
}

export default SettingsdBody;