import React from 'react';

const Profilebody = () => {
	return(
      <div className="row">
        <div className="container">
          <div className="row">
            <p className="lbl_profile_info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptates, vero praesentium nihil. <br/> Dolor dolores quasi iste suscipit totam doloribus unde officia amet corporis magnam ratione soluta, vitae nihil a!
            </p>
          </div>
          <div className="row">
             <div className="wrap_profile_info_list">
               <label>Current Work</label><br/>
               <span>UX/UI Developer at Google Inc.</span>
             </div>
           </div> 
           <div className="row">
             <div className="wrap_profile_info_list">
               <label >School</label><br/>
               <span>System Technology Institute (STI)</span>
             </div>
           </div>
           <div className="row">
             <div className="wrap_profile_info_list">
               <label>Show my Instagram Photos</label><br/>
               <a href="#">Connect to Instagram</a>
             </div>
           </div> 
           <div className="row">
             <div className="wrap_profile_info_list">
               <label>Anthem</label><br/>
               <span><i className="fa fa-spotify fa-lg" aria-hidden="true"></i>Travist Scott</span>
             </div>
           </div>
           <div className="row">
             <div className="wrap_profile_info_list">
               <label>My Top Spotify Artists</label><br/>
               <span><i className="fa fa-spotify fa-lg" aria-hidden="true"></i>EdSheeran, Linkin Park, Boyce Avenue +7</span>
             </div>
           </div>
           <div className="row">
             <div className="wrap_profile_info_list">
               <label>Gender</label><br/>
               <div className="pure-radiobutton">
                  <input id="male" name="radio" type="radio" className="radio" checked="checked"/>
                  <label className="lbl_group_friends_name" htmlFor="male">Male</label>
                </div>
                <div className="pure-radiobutton">
                  <input id="female" name="radio" type="radio" className="radio"/>
                  <label className="lbl_group_friends_name" htmlFor="fefmale">Female</label>
                </div>
             </div>
           </div>    
        </div>
      </div>
	)
}

export default Profilebody;

 