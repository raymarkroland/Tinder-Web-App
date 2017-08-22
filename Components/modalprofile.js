import React from 'react';

const Modalprofile = () => {
	return(
		<div className="modal fade" id="profile" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header remove_padding_modal_view_profile">
            <button type="button" className="close close_profile" data-dismiss="modal" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i></button>
          </div>
          <div className="modal-body remove_padding_modal_view_profile">
            <div className="row">
              <div className="main-container">
                    <div id="carousel-example-generic" className="carousel slide">

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <div className="wrap_btn_thubnails2">
                      <button className="btn_thubnails ripple2"><i className="fa fa-times fa-lg dislike" aria-hidden="true"></i></button>
                      <button className="btn_thubnails ripple2"><i className="fa fa-heart fa-lg green" aria-hidden="true"></i></button>
                      <button className="btn_thubnails ripple2"><i className="fa fa-star fa-lg blue" aria-hidden="true"></i></button>
                    </div>

                    <div className="carousel-inner" role="listbox">
                      <div className="item active"><img src="img/cover.jpg"/></div>
                      <div className="item skyblue"></div>
                      <div className="item darkerskyblue"></div>
                    </div>               
                  </div>
              </div>
              <div className="row">
                <div className="wrap_name_profile_view">
                  <label className="lbl_name_profile">Jean, <span>20</span></label>
                  <ul className="wrap_profile_info">
                    <li>
                      <label><i className="fa fa-briefcase" aria-hidden="true"></i></label>Freelance Model
                    </li>
                    <li>
                      <label><i className="fa fa-graduation-cap" aria-hidden="true"></i></label>Far East University
                    </li>
                    <li>
                      <label><i className="fa fa-map-marker" aria-hidden="true"></i></label>12 Miles away
                    </li>
                  </ul>
                </div>
              </div>
              <label className="line_sep_modal_profile"></label>
              <div className="row">
                <div className="wrap_name_profile_view">
                  <p className="lbl_profile_info">
                    Women are attracted to funny guys. In fact, 77% of women told Men’s Health that a
                  </p>
                </div>
              </div>
              <label className="line_sep_modal_profile"></label>
              <div className="row">
                <div className="wrap_name_profile_view">
                  <label className="lbl_instagram_photos">123 Instagram Photos</label>
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-sx-3 text-center padding_dec">
                      <img className="img_instagram" src="img/default_img.png"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-sx-3 text-center padding_dec">
                      <img className="img_instagram" src="img/default_img.png"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-sx-3 text-center padding_dec">
                      <img className="img_instagram" src="img/default_img.png"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-sx-3 text-center padding_dec">
                      <img className="img_instagram" src="img/default_img.png"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-sx-3 text-center padding_dec">
                      <img className="img_instagram" src="img/default_img.png"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-sx-3 text-center padding_dec">
                      <img className="img_instagram" src="img/default_img.png"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-sx-3 text-center padding_dec">
                      <img className="img_instagram" src="img/default_img.png"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="wrap_btn_profile">
                  <button className="btn_boost_me remove_margin ripple">Recomend Jean to a Freand</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Modalprofile;

 