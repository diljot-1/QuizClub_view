import React,{useRef, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import {ajaxOperations} from '../../utils/ajax'
import {config} from '../../utils/config'
export default function AdminLogin(props) {
    
    const emailRef=useRef();
    const otpRef=useRef();
    function sendOTP(){
        
        console.log(emailRef.current.value); 

        const otpObject={
            mail: emailRef.current.value,
            otp:'123'
        }

        const promise = ajaxOperations.post(config.URLS.OTP_SEND_URL, otpObject);
        promise.then(response=>{
           // setMessage(response.data);
            console.log('Data is ',response);
        }).catch(err=>{
            //setMessage(err);
            console.log('Error in Add ',err);
        })
    }

    function verifyOTP(){
        console.log(emailRef.current.value); 

        const otpObjectVerify={
            mail: emailRef.current.value,
            otp: otpRef.current.value
        }

        console.log(otpRef.current.value)
        
        const promise = ajaxOperations.post(config.URLS.OTP_VERIFY_URL, otpObjectVerify);
        promise.then(response=>{
           // setMessage(response.data);
           
          
            console.log('Data is ',response);
            <Link to='/admin/dashboard'></Link>
            
        }).catch(err=>{
            //setMessage(err);
            
            console.log('Error in Add ',err);
            
        })

    }
       
   

    return (
        <>  <Card style={{position:'absolute', top:'10em', width:'480px', height:'410px', left:'30em'}}>
              <Form style={{position:'absolute', top:'0em', marginTop:'50px', left:'3em'}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} style={{width:'25em'}} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group   controlId="formBasicPassword">
                    <Form.Label>OTP</Form.Label>
                    <Form.Control ref={otpRef} type="text" placeholder="Enter the OTP" />
                </Form.Group>
                
                {<Button onClick={sendOTP} variant="primary" >
                    Send OTP
                </Button>}

                {<Button onClick={verifyOTP} variant="primary" >Verify OTP</Button>}

                  {<Form.Text className="text-muted">
                    The OTP has been sent to your e-mail
                    </Form.Text>}

                
                </Form>
                </Card> 
        </>
    )
}
