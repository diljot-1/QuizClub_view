import React, {useState,useRef} from 'react'
import {Form , Card} from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import Modal from 'react-bootstrap/Modal'
import {ajaxOperations} from '../../utils/ajax'
import {config} from '../../utils/config'
export default function EditableUsernameComponent(props) {
  
  const [loginFail, setError] = useState({}) ;
  const realNameRef=useRef();
  const userNameRef=useRef();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function handleSaveChanges(e){
      e.preventDefault();
      
      if(!realNameRef.current.value)
        return;
      handleClose();
      localStorage.setItem('userName', userNameRef.current.value)
      setShow(false);
      console.log(realNameRef.current.value);
      var userObject=JSON.parse(localStorage.getItem('userObject'))
      userObject.name=realNameRef.current.value
    

     

      if(userObject){
        console.log('user :::::::::::',userObject);
        const promise = ajaxOperations.postNoIntercept(config.URLS.OAUTH,userObject );
        promise.then(response=>{
             let userInfo =response.data
            console.log('Response is :::: ',userInfo);
            if(userInfo){
               
                localStorage.tokenId = response.data.tokenid;
                localStorage.setItem('userId', userInfo.userinfo._id);

                console.log(localStorage.getItem('userId'))
                console.log('::::::::During SetState UserInfo ',userInfo, response.data.tokenid);
               

            }
            else{
                setError({message:'Login Failed No User Detail Found...'});
            }
        }).catch(err=>{
            console.log(err);
            setError({message:'Login Failed, Contact to System Admin'});
        })

      }

  }
    return (
        <>
    
  
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
              <Card.Body >
                  
                  
                  <Form >
                      <Form.Group id='name'>
                         <Form.Label>Real Name</Form.Label>
                         <Form.Control type='text' ref={realNameRef}  required></Form.Control>
                      </Form.Group>
                      <Form.Group id='UserName'>
                         <Form.Label>UserName</Form.Label>
                         <Form.Control type='text' ref={userNameRef} required></Form.Control>
                      </Form.Group>
                      
                      
                  </Form>
              </Card.Body>
            </Card>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleSaveChanges} variant="contained" color="secondary" >Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  



            
         
       
    )
}
//handle submit