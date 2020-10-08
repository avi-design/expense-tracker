import React,{Fragment, useState} from 'react';
import FooterContainer from "../footer/footer";
import { connect } from "react-redux";
import{Redirect} from "react-router-dom";
const Profile = ({auth, profile}) =>{
    const [editDetails, seteditDetails] = useState(false);
    const [editProfileFormData, seteditProfileFormData] = useState({});
    //console.log(auth+"............."+ profile);
    /*   useEffect(() => {
        profileForm();
    }, []) */
    

    const editchange = (e)=>{
        seteditProfileFormData({...editProfileFormData, [e.target.name]:e.target.value});
    }
    const{fname, lname, address, city, country, postalCode, aboutMe } = editProfileFormData;

    const profileForm = ()=>{
        return(
            <Fragment>
            <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-username">Username</label>
                  <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value={profile.user.email}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">Email address</label> 
                  <input type="email" id="input-email" className="form-control form-control-alternative" placeholder={profile.user.email}/> 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-first-name">First name</label>
                  <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value={profile.firstname}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                  <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value={profile.lastname}/>
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
                  <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value={profile.address} type="text"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-city">City</label>
                  <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York"/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-country">Country</label>
                  <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value={[profile].city}/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-country">Postal code</label>
                  <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code"/>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-muted mb-4">About me</h6>
          <div className="pl-lg-4">
            <div className="form-group">
              <label>About Me</label>
              <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">{profile.aboutme}</textarea>
            </div>
          </div>
          </Fragment>
        )
    }


    const editProfileForm = ()=>{
        console.log(profile);
        return(
            <Fragment>
            <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-username">Username</label>
                  <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value={profile.user.email} disabled/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">Email address</label> 
                  <input type="email" id="input-email" className="form-control form-control-alternative" value={profile.user.email}/> 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-first-name">First name</label>
                  <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" name="fname" onChange={e=>editchange(e)} value={fname}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                  <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" name="lname" onChange={e=>editchange(e)} value={lname}/>
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
                  <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" name="address" value={address} onChange={e=>editchange(e)} type="text"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-city">City</label>
                  <input type="text" id="input-city" className="form-control form-control-alternative" name="city" placeholder="City" onChange={e=>editchange(e)} value={city}/>
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
              <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ..." name="aboutMe" onChange={e=>editchange(e)}>{aboutMe}</textarea>
            </div>
          </div>
          </Fragment>
        )
    }


    const editProfile = ()=>{
        seteditDetails(true);
    }


if(auth.isAuthenticated){
    return(
        <Fragment>
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ minHeight: "600px", backgroundImage: "url(../assets/img/theme/profile-cover.jpg)", backgroundSize: "cover", backgroundPosition: "center top"}}>
      <span className="mask bg-gradient-default opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white">Hello {profile.firstname}</h1>
            <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            <a href="#!" className="btn btn-info" onClick={editProfile}>Edit profile</a>
          </div>
        </div>
      </div>
    </div>

<div className="container-fluid mt--7">
<div className="row">
  <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
    <div className="card card-profile shadow">
      <div className="row justify-content-center">
        <div className="col-lg-3 order-lg-2">
          <div className="card-profile-image">
            <a href="#">
              <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
          <a href="#" className="btn btn-sm btn-default float-right">Message</a>
        </div>
      </div> */}
      <div className="card-body pt-0 pt-md-4">
        {/* <div className="row">
          <div className="col">
            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
              <div>
                <span className="heading">22</span>
                <span className="description">Friends</span>
              </div>
              <div>
                <span className="heading">10</span>
                <span className="description">Photos</span>
              </div>
              <div>
                <span className="heading">89</span>
                <span className="description">Comments</span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="text-center">
          <h3>
          {profile.firstname} {profile.lastname}
          </h3>
          <div className="h5 font-weight-300">
            <i className="ni location_pin mr-2"></i>{profile.city}, {profile.country}
          </div>
          <div className="h5 mt-4">
            <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
          </div>
          <div>
            <i className="ni education_hat mr-2"></i>University of Computer Science
          </div>
          <hr className="my-4" />
          <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-8 order-xl-1">
    <div className="card bg-secondary shadow">
      <div className="card-header bg-white border-0">
        <div className="row align-items-center">
          <div className="col-12">
            <h3 className="mb-0">My account</h3>
          </div>
          {/* <div className="col-4 text-right">
            <a href="#!" className="btn btn-sm btn-primary">Settings</a>
          </div> */}
        </div>
      </div>
      <div className="card-body">
        <form>
          <h6 className="heading-small text-muted mb-4">User information</h6>
          {editDetails ? editProfileForm() : profileForm()}
          <div className="text-center">
            <button type="button" className="btn btn-primary my-4">Save Profile</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
<FooterContainer/>
</Fragment>
    )
}
else{
    return <Redirect to="/"/>
}

}

const mapStateToProps = state =>{
    return{
        auth:state.auth,
        profile:state.user.userDetails
    }
}


export default connect(mapStateToProps)(Profile);