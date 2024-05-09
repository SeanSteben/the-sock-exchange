
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sock from "./components/Sock";
import sock_data from './assets/sock.json';
import Footer from "./components/Footer";
import Promo from "./components/Promo";
import promo_data from './assets/promo.json';
import Search from "./components/Search"
import React, { useState, useEffect } from "react";


function App() {
  
  return (
    
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TSE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <Search/>
          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

        <div className="container-fluid">
          <div className="row">
            Both socks and space rockets 🚀 will take you to new heights, but only one will get cold feet!
            <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}></div>
            
            {
            promo_data.map((promo) => (
            <Promo key={promo.id} data={promo} />
                ))
            }
            {
    // Change from static sock_data to data coming from sock API
    data.map((sock) => (
        <Sock key={sock._id} data={sock} /> // Change id to _id. _id is the key in the API response
    ))
  }
             <Footer environment={"DEVELOPMENT"} />
          </div>
          
        </div>
      </main>
    </>
  )
}





export default App