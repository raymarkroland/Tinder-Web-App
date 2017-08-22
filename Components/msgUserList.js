import React from 'react'

const Msguserlist =() => {
	return(
		<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <ul className="wrap_list_user">
                <li>
                    <div className="wrap_img_msg"><img src="img/img2.png" alt=""/></div>
                    <div className="wrap_name_msg">
                      <label>Marko Polo</label><br/>
                      <span>System Technology Institute</span>
                      <p>Hi, How are you?</p>
                    </div>
                  </li>
                  <li>
                    <div className="wrap_img_msg"><img src="img/img3.png" alt=""/></div>
                    <div className="wrap_name_msg">
                      <label>Jenny M. Ortiz</label><br/>
                      <span>Far Eastern University</span>
                      <p>Hi, How are you?</p>
                    </div>
                  </li>
                  <li>
                    <div className="wrap_img_msg"><img src="img/img4.png" alt=""/></div>
                    <div className="wrap_name_msg">
                      <label>Barbie Lee</label><br/>
                      <span>University of Santo Thomas</span>
                      <p>Hi, How are you?</p>
                    </div>
                  </li>
                  <li>
                    <div className="wrap_img_msg"><img src="img/img5.png" alt=""/></div>
                    <div className="wrap_name_msg">
                      <label>Michael Wayne</label><br/>
                      <span>University of Santo Thomas</span>
                      <p>Hi, How are you?</p>
                    </div>
                  </li>
              </ul>
            </div>
	)
}

export default Msguserlist;