import React , { useState }from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Card } from 'semantic-ui-react'
import './Log.css'
import Pepolls from "../images/Pepolls.png"
import Moralis from 'moralis'
import PropTypes from 'prop-types';

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




async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }






function Log({ setToken }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }


  return (

      <>
      
    <div className="sign-up">
             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                 <Card>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={Pepolls} alt="logo Pepolls" className='image' /> Log-in to your account
      </Header>
      <Form  onSubmit={handleSubmit} className="form" size='large'>
        <Segment stacked>
          <Form.Input 
          className='input'
         
          placeholder='E-mail address' 
           onChange={e => setEmail(e.target.value)} 
           />
          
          <Form.Input
          className='input'
            
            placeholder='Password'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
         <div className='button'>
          <Button onClick={() => {
    login();
  }} color='teal' fluid size='large'>
            Login
          </Button>
          </div>
        </Segment>
      </Form>
      
     
                      </Grid.Column>
               </Card>
             </Grid>
            
            
            
            </div>
            
            </>

  )
}

Log.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Log