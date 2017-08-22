import React from 'react';

const Groupmodal = () => {
	return(
	    <div className="modal fade" id="groupModal" role="dialog" aria-labelledby="myModalLabel">
	      <div className="modal-dialog modal_add_group" role="document">
	        <div className="modal-content">
	          <div className="modal-header remove_border_group_modal">
	            <div className="user_group_img">
	              <img src="img/img2.png"/>
	            </div>
	            <div className="clearfix_height_group"></div>
	            <div className="wrap_group_modal_info">
	              <p><strong>Create a group to swipe with friends.</strong><br/><span>Choose at least 1 friend to continue</span></p>
	            </div>
	          </div>
	          <div className="modal-body">
	              <ul className="wrpa_group_list">
	                <li>
	                  <div className="pure-radiobutton">
	                    <input id="radio1" name="radio" type="radio" className="radio"/>
	                    <label className="lbl_group_friends_name" htmlFor="radio1"><img src="img/img2.png" className="img_social_friend" alt=""/>John Doe</label>
	                  </div>
	                </li>
	                <li>
	                  <div className="pure-radiobutton">
	                      <input id="radio2" name="radio" type="radio" className="radio"/>
	                      <label className="lbl_group_friends_name" htmlFor="radio2"><img src="img/img2.png" className="img_social_friend" alt=""/>Mark Miller</label>
	                  </div>
	                </li>
	              </ul>
	            </div>
	          <div className="modal-footer remove_border_group_modal">
	            <div className="wrap_btn_group_close">
	              
	            </div>
	            <button type="button" className="btn_close_group_modal ripple" data-dismiss="modal">Create</button>
	          </div>
	        </div>
	      </div>
	    </div>
	)
}

export default Groupmodal;

 