import React from 'react';

const Modalboost = () => {
	return(
		<div className="modal fade" id="myboost" role="dialog" aria-labelledby="mySmallModalLabel">
      <div className="modal-dialog modal-sm modal_boost" role="document">
        <div className="modal-content">
          <div className="wrap_header_boost_modal">
            <button className="btn_thubnails_boost" disabled="disabled"><i className="fa fa-bolt fa-2x violet" aria-hidden="true"></i></button>
            <div className="wrap_boost_info">
              <label>Out of Boost!</label><br/>
              <p>Be the top profile area<br/>for 30 minutes to get more mathes</p>
            </div>
          </div>
          <div className="row row_padding">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 remove_padding_pricing">
              <div className="wrap_pricing">
                <label className="lbl_amount colorchange">10</label>
                <label className="lbl_boost colorchange">Boosts</label>
                <label className="lbl_price colorchange">PHP 120.0/ea</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 remove_padding_pricing">
              <div className="wrap_pricing default_pricing_load">
                <label className="lbl_save">Save 26%</label>
                <label className="lbl_amount">5</label>
                <label className="lbl_boost">Boosts</label>
                <label className="lbl_price">PHP 143.36/ea</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 remove_padding_pricing">
              <div className="wrap_pricing">
                <label className="lbl_amount colorchange">1</label>
                <label className="lbl_boost colorchange">Boosts</label>
                <label className="lbl_price colorchange">PHP 190.00/ea</label>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <button className="btn_boost_me ripple">Boost Me</button>
            <label className="lbl_or">Or</label>
            <button className="btn_get_tinder ripple2">Get Tinder Plus <br/> <span>(1 free Boost every month)</span></button>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Modalboost;

 