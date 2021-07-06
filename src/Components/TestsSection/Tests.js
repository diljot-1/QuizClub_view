import { Button } from '@material-ui/core'
import React, { useEffect, useState,useRef } from 'react'
import {colours} from './colours'
import MyStuffContainer from '../UserInfo/MyStuffContainer'
import UserInfoAll from '../UserInfo/UserInfoAll'
import Modal from 'react-bootstrap/Modal'

import {Link} from 'react-router-dom'
import testObjectArray from './test_details.json'
import Card from 'react-bootstrap/Card'
import { Avatar} from '@material-ui/core'
import {ajaxOperations} from '../../utils/ajax'
import TestAttend from './TestAttend'
import {Form} from 'react-bootstrap';
import AssignTest from './AssignTest'
import Navbar from '../Navbar/Navbar'
export default function Tests(props) {
   var questions =[]  
   let posLeft;
   const [testsCollection, setTestsCollection]=useState([])
   const [assign, setAssign]=useState({status:false})
   const emailRef=useRef()
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   useEffect(()=>{
           
    const promise=  ajaxOperations.fetch(`http://localhost:1234/tests/getdetails/${localStorage.getItem('userId')}`)
    promise.then(response=>{
        console.log((response)+"**************")
        
         // setLoader(true);
           
          
         setTestsCollection(response.data)
           

    }).catch(err=>{
        console.log(err)
    })

  },[])
   async function handleAssign(id){
     const AssignObject={'testId':id, 'email':emailRef.current.value}
       const response=await ajaxOperations.post(`http://localhost:1234/tests/assigntest`,AssignObject)
      console.log(response)
      }
  async function attendFunc(id){
    const response = await  ajaxOperations.fetch(`http://localhost:1234/tests/gettest/${id}`)
    
        console.log(JSON.stringify(response.data)+"**************")
        questions=response.data
        console.log(questions[0])
        localStorage.setItem('test',JSON.stringify(questions));
        
    
  }
    return (
        <>
           
           <Navbar registerStatus='false'/>  
            <MyStuffContainer  style={{position: 'relative'}}/>
            <div style={{position: 'absolute',width:'400px', height:'100px', top:'15em', left:'32em'}}>
            {testsCollection.map((test, index)=>{
             
               return ( 
                <div >
                    <Card style={{ width: '56rem', height:'128px', marginBottom: '36px'}}>
                    <Avatar variant="square" style={{ height:'128px', width:'10em', backgroundColor:colours[index]}}><h1>{test.name[0].toUpperCase()}</h1></Avatar>
                    <Card.Body style={{position: 'absolute',left:'13em'}}>
                        <Card.Title><h3>{test.name}</h3></Card.Title>
                        <Card.Text>
                          <h5>{test.description.author}</h5>
                         {localStorage.getItem('role')=='student' && <Link to="/attend">  <button onClick={() => attendFunc(test._id)} style={{position: 'absolute',left:'25em', width:'11.5em', height:'4em'}} type="button" class="btn btn-secondary btn-rounded">Attend </button></Link>}
                          {localStorage.getItem('role')=='teacher' && <Button variant="primary" onClick={handleShow}>
                              Assign
                            </Button>}

                            <Modal
                              show={show}
                              onHide={handleClose}
                              backdrop="static"
                              keyboard={false}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Test Name:{test.name}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                               <b> Kindly enter the e-mail for whom you want to assign the test</b>
                                <Form >
                                <Form.Group id='email'>
                                
                                <Form.Control type='text' ref={emailRef}  required></Form.Control>
                            </Form.Group>
                             </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button onClick={() => handleAssign(test._id)} variant="primary">Assign</Button>
                              </Modal.Footer>
                            </Modal>
                          
                        </Card.Text>
                         <h6 style={{position: 'absolute',left:'1em'}}>created on {test.description.issuedOn}</h6>
                         <h5 style={{position: 'absolute',top:15,left:'27em', color: '#f50057'}}>Maximum marks: {test.description.maxScore}</h5>
                    </Card.Body>
                    </Card>
                    
                </div>)
          })}
          </div>
          {localStorage.getItem('role')==="teacher" && <Link to="/dashboard/tests/newtest"><Button style={{position: 'absolute', top: '35.2em'}} variant="contained" color="secondary"> create test</Button></Link> }
        </>
    )
}
