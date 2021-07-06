import React,{useRef} from 'react'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import {ajaxOperations} from '../../utils/ajax'
import {config} from '../../utils/config'

export default function RoleAdder(props) {
    const roleRef=useRef();
    
    function handleSubmit(){
         const roleObject ={
             'role':roleRef.current.value
         }

         const promise = ajaxOperations.post(config.URLS.ADD_ROLE_URL, roleObject);
        promise.then(response=>{
           // setMessage(response.data);
            console.log('Data is ',response);
        }).catch(err=>{
            //setMessage(err);
            console.log('Error in Add ',err);
        })
    }
    return (
        <> 

            <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Role</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form.Control ref={roleRef} type="text" placeholder="Enter new role" />
                <div style={{width:'10px', height:'20px'}}></div>
                <p style={{color:'red'}}>Kindly choose the role name carefully once locked it wont change .</p>
            </Modal.Body>

            <Modal.Footer>
                
            <Button onClick={handleSubmit} variant="contained" color="secondary">Lock it </Button>
            </Modal.Footer>
            </Modal.Dialog>
           
                 
        </>
    )
}
