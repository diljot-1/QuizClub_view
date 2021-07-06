import {Link} from 'react-router-dom'
import React,{useRef, useState} from 'react'
import {Form , Card, Alert} from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import {useAuthContext} from './Contexts/AuthContext'
import RolePicker from './RoleSelector/RolePicker';
import Login from './Login';
import auth from '../Components/firebase.prod'

export default function SignUp(props) {
    const {signup} = useAuthContext();    
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const [error, setError]= useState();
    const [loading, setLoading]= useState(false);        //25-27 video
    const [loadSignUp, setLoadSignUp]= useState(false)
    const [laodLogin, setLoadLogin]= useState({status:false, msg:""});

    var userObject={};
    var nextpath='/'
    var roleChoose=''
    function handleTeacherRole(){
        
        localStorage.setItem('role', 'teacher');
        setLoadSignUp(true);
    }

    function handleStudentRole(){
       
        localStorage.setItem('role', 'student');
        setLoadSignUp(true);
        
    }
    function handleSubmit(e){
        console.log(userObject);
        e.preventDefault();
        
        if(passwordRef.current.value!== passwordConfirmRef.current.value)
        {
            return setError('Passwords do not match')
        }
        
        try{
            console.log(userObject);
            const promise=signup(emailRef.current.value, passwordRef.current.value)
            
            console.log(userObject);
            promise.then(user=>{
                
                user.user.sendEmailVerification()
                console.log(userObject);
                localStorage.setItem('mail',emailRef.current.value);
                console.log(user);
               
                userObject.mail= emailRef.current.value
                userObject.password= passwordRef.current.value 
                userObject.role=localStorage.getItem('role')
                
                localStorage.setItem('userObject',JSON.stringify(userObject))
                
              console.log(userObject)
              setLoadSignUp(false);
              if(!auth.currentUser.emailVerified()){
                setLoadLogin({status:true, msg:'Verify e-mail'});
              }
              setLoadLogin({status:true, msg:'A verification link has been sent to your mail, kindly verify and then log in Happy Learning'});
            }).catch(err=>{
                setLoadLogin({status:true, msg:'User already exists with this email address. kindly Log In'})
                console.log(err);
            })

            
        }
        catch{
            setError('could not create an account')
        }
        setLoading(false);
    }
    return (
        <>
           <RolePicker handleTeacherRole={handleTeacherRole} handleStudentRole={handleStudentRole}/>
           {loadSignUp &&  <Card style={{position:'absolute', width:'400px', height:'400px', top:'100px', right:'20px'}}>
              <Card.Body >
                  <h2 className='text-center mb-4'>Sign Up</h2>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <Form >
                      <Form.Group id='email'>
                         <Form.Label>E-mail</Form.Label>
                         <Form.Control type='email' ref={emailRef} required></Form.Control>
                      </Form.Group>
                      <Form.Group id='password'>
                         <Form.Label>Password</Form.Label>
                         <Form.Control type='password' ref={passwordRef} required></Form.Control>
                      </Form.Group>
                      <Form.Group id='password-confirm'>
                         <Form.Label>Password Confirmation</Form.Label>
                         <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                      </Form.Group>
                       <Button onClick={handleSubmit} disabled={loading}  variant="contained" color="secondary" >Sign Up</Button> 
                  </Form>
              </Card.Body>
            </Card>}

            {laodLogin.status && <Login msg={laodLogin.msg}/>}
            
            <div className='w-100 text-center mt-2'>
                Already have an account? Log In
            </div>
        </>
    )
}
