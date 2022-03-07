import React from 'react'
import Moralis from 'moralis'
 import './LandingPage.css'
import Pepolls from "../images/Pepolls.png"
import {Button} from 'react-bootstrap'

 /* Moralis init code */
 const serverUrl = "https://id24xxoum4uf.usemoralis.com:2053/server";
 const appId = "xiIuy3CAtaKs58vXNOyspGwU8NznT6qFiQDYx8uR";
 Moralis.start({ serverUrl, appId });
 /* TODO: Add Moralis Authentication code */
  
 async function login() {
  console.log("login clicked");
  let user = Moralis.User.current();
  if (!user) {
      user = await Moralis.authenticate();
    
  }
  await Moralis.enableWeb3();
  console.log('you are logged in')
  console.log("logged in user:", user);
  console.log(user.get('ethAddress'));
 }

function LandingPage() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">WELCOME TO PEPOLLS </h1>
          <p className="description">

            if you have an account 
          </p>
          <Button className="button" onClick={() => {
    login();
  }}variant="primary">Login in with metamask</Button> 
   
     </div>


      </div>
      <img src={Pepolls} alt="logo Pepolls" className='image' />

    </div>
  )
}

export default LandingPage