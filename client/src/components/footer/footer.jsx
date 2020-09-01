import React, { Component } from 'react';

class FooterContainer extends Component{
    render(){
        return(
            <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6">
            <div className="copyright text-center text-xl-left text-muted">
              &copy; 2020 <a href="" className="font-weight-bold ml-1" target="_blank">Kolkata Developers</a>
            </div>
          </div>
          <div className="col-xl-6">
            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
              <li className="nav-item">
                <a href="" className="nav-link" target="_blank">Kolkata developers</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link" target="_blank">About Us</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link" target="_blank">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
        )
    }
}

export default FooterContainer;