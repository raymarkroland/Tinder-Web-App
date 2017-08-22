import React from 'react'

const Msguser =() => {
	return(
		<div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
        <div className="row">
          <div className="wrap_msg">
            <div className="msg_recieve">
              <div className="img_msg"><img src="img/img2.png" alt=""/></div>
              <div className="cont_msg">
                Hi! How are you today?
              </div>
            </div>

            <div className="msg_send">
              <div className="img_msg2"><img src="img/img3.png" alt=""/></div>
              <div className="cont_msg2">
                Hello!
              </div>
            </div>
            </div>
        </div>
        <div className="row">
          <input className="input_msg" type="text" name=""/>
          <button className="btn_send ripple">Send</button>
        </div>
    </div>
	)
}

export default Msguser;