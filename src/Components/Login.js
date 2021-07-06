import {Link} from 'react-router-dom'
import React,{useRef, useState} from 'react'
import {Form , Card, Alert} from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import {useAuthContext} from './Contexts/AuthContext'
import  validator from 'validator';
import {auth} from '../Components/firebase.prod' 


export default function Login(props) {
    const {login} = useAuthContext();    
    const emailRef=useRef();
    const passwordRef=useRef();
    
    const [error, setError]= useState();
    const [loading, setLoading]= useState(false);        //25-27 video
    var nextPath='/login'
    function handleSubmit(event){
       if( !validator.isEmail(emailRef.current.value))
       {setError('Enter valid email address');
         return;}
      
        try{
           
            if(!auth.currentUser.emailVerified()){
                setError('Your e-mail is not verified :(');
            }
            login(emailRef.current.value, passwordRef.current.value);
            

             nextPath='/dashboard'
           /* console.log(JSON.parse(localStorage.getItem('userObject')));*/
        }
        catch{
            setError('could not create an account')
        }
       
    }
    return (
        <>
            <Card style={{position:'absolute', width:'400px', height:'400px', top:'100px', right:'20px'}}>
              <Card.Body >
                  <h2 className='text-center mb-4'>Log In</h2>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <Alert variant="info">{props.msg}</Alert>
                  <Form  >
                      <Form.Group id='email'>
                         <Form.Label>E-mail</Form.Label>
                         <Form.Control type='email' ref={emailRef} required ></Form.Control>
                      </Form.Group>
                      <Form.Group id='password'>
                         <Form.Label>Password</Form.Label>
                         <Form.Control type='password' ref={passwordRef} required></Form.Control>
                      </Form.Group>
                     
                      <Button disabled={loading} onClick={handleSubmit} variant="contained" color="secondary" type="submit"><Link to='/dashboard'>Log in</Link> </Button>
                  </Form>
              </Card.Body>
            </Card>
            
            <div className='w-100 text-center mt-2'>
                Sign Up
            </div>
        </>
    )
}
