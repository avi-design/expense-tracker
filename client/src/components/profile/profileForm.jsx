import React,{Fragment, useState} from 'react';

const ProfileForm = ({profile})=>{
    // console.log(editProfileFormData);
    return(
        <Fragment>
        <h1>test</h1>
        <div className="pl-lg-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-username">Username</label>
              <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value={profile.user.email} readOnly/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-email">Email address</label> 
              <input type="email" id="input-email" className="form-control form-control-alternative" placeholder={profile.user.email} readOnly/> 
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-first-name">First name</label>
              <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value={profile.firstname} readOnly/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-last-name">Last name</label>
              <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value={profile.lastname} readOnly/>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Contact information</h6>
      <div className="pl-lg-4">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-address">Address</label>
              <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value={profile.address} type="text" readOnly/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-city">City</label>
              <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York" readOnly/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-country">Country</label>
              <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value={[profile].city} readOnly/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-country">Postal code</label>
              <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" readOnly/>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">About me</h6>
      <div className="pl-lg-4">
        <div className="form-group">
          <label>About Me</label>
          <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ..." value={profile.aboutme} readOnly></textarea>
        </div>
      </div>
      </Fragment>
    )
  }

  export default ProfileForm;