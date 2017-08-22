import React from 'react';
import Profilebanner from './profile-banner';
import Profilebody from './profile-body';
import Profilefooter from './profile-footer';

const Profile = () => {
  return(
    <div className="container-fluid">
      <div className="clearfix_height2"></div>
        <div className="container-fluid wrap_banner">
            <Profilebanner/>
        </div>
        <Profilebody/>
        <Profilefooter/>
    </div>
  )
}

export default Profile;