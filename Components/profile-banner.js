import React from 'react';

const Profilebanner = () => {
	return(
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 text-center">
                <div className="wrap_profile_img">
                  <img src="img/img2.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-8 col-xs-12">
              <div className="clearfix_name_profile"></div>
                <label className="lbl_name_your_name">Marko Polo,<span>24</span></label>
                <span className="lbl_shool_name">System Technoloogy Institute</span>
                </div>
            </div>
            <div className="clearfix_name_profile"></div>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2">
                <label htmlFor="uploadimg" className="img_icon_upload"><i className="fa fa-plus-circle" aria-hidden="true"></i></label>
                <div className="thumbnail_wraper_img">
                  <img id="imgDisplay" src="img/default_img2.png"/>
                </div>
                <input id="uploadimg" className="custom-file-input hideinput_file" type="file" accept="image/*" capture="camera" />
              </div>
            </div>
          </div>
        </div>
      </div>
	)
}

export default Profilebanner;

 