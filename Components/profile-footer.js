import React from 'react';

const Profilefooter = () => {
	return(
     <div className="row">
      <div className="container">
        <div className="row">
          <hr/>
        </div>
        <div className="row">
          <div className="wrap_profile_info_list">
            <label htmlFor="">Control your Profile</label><br/>
            <label className="lbl_switch">Don't Show My Age</label>
            <div className="slide">
              <input type="checkbox" id="check"/>
              <label htmlFor="check" className="slider">
                <span className="switch"></span>
              </label>
            </div>
          </div>
          <div className="wrap_profile_info_list">
            <label className="lbl_switch">Make My Distance Invisible</label>
            <div className="slide">
              <input type="checkbox" id="check2"/>
              <label htmlFor="check2" className="slider">
                <span className="switch"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Profilefooter;

 