import React from 'react';

import Messageuserlist from './Msguserlist';
import Msguser from './Msguser';


const Msg = () => {
  return(
    <div className="container-fluid">
      <div className="clearfix_height"></div>
        <div className="row">
          <div className="container">
            <div className="row">
              <Messageuserlist/>
              <Msguser/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Msg;