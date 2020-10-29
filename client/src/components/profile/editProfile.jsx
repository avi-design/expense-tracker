import React,{Fragment, useState} from 'react';

  const EditProfileForm = ({editProfileFormData, editchange})=>{
  const{userName,email,firstname,lastname, address, city, country, postalCode, aboutMe} = editProfileFormData;
  console.log(aboutMe);  
  return(
        <Fragment>
        <div className="pl-lg-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-username">Username</label>
              <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value={userName} name="userName" readOnly onChange={e=>editchange(e)}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-email">Email address</label> 
              <input type="email" id="input-email" className="form-control form-control-alternative" value={email} name="email" onChange={e=>editchange(e)} /> 
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-first-name">First name</label>
              <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" name="firstname" onChange={e=>editchange(e)} value={firstname}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-last-name">Last name</label>
              <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" name="lastname" onChange={e=>editchange(e)} value={lastname}/>
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
              <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" name="address" onChange={e=>editchange(e)} type="text" value={address}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-city">City</label>
              <input type="text" id="input-city" className="form-control form-control-alternative" name="city" placeholder="city" onChange={e=>editchange(e)} value={city}/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-country">Country</label>
              <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" name="country" onChange={e=>editchange(e)} value={country}/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="form-control-label" htmlFor="input-country">Postal code</label>
              <input type="number" id="input-postal-code" className="form-control form-control-alternative" name="postalCode" placeholder="Postal code" onChange={e=>editchange(e)} value={postalCode}/>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">About me</h6>
     <div className="pl-lg-4">
        <div className="form-group">
          <label>About Me</label>
          <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ..." name="aboutMe" onChange={e=>editchange(e)} value={aboutMe}>{aboutMe}</textarea>
        </div>
      </div>
      </Fragment>
    )
  }
  
  export default EditProfileForm;