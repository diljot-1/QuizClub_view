import React, {useState,useRef } from 'react'
import { Modal, Navbar } from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import GlobalHeaderContainer from '../../Containers/GlobalHeaderContainer'
import {Form , Card} from 'react-bootstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import widgetImage from '../../utils/monkey.png'
import Tooltip from 'react-bootstrap/Tooltip'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import TrueOrFalseSection from './TrueOrFalseSection'
import MultipleChoiceSection from './MultipleChoiceSection'
import './test.css'
import {ajaxOperations} from '../../utils/ajax'
import {config} from '../../utils/config'
import MyStuffContainer from '../UserInfo/MyStuffContainer';
export default function CreateNewTest(props) {
    const buttonStyle={
      backgroundColor: '#B8336A',
      color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    }    
    const [show, setShow] = useState(true);
    const [loadMultipleChoiceSection, setLoadMultipleChoiceSection]=useState(false);
    const [loadTrueOrFalseSection, setLoadTrueOrFalseSection]=useState(false);

    const nameRef=useRef();
    const subjectRef=useRef();
    const deadlineRef=useRef();

    const renderTooltip = (props) => (
      <Tooltip style={{position: 'absolute', top: '50em', left: '50em'}} id="button-tooltip" {...props}>
         Without teachers, life would have no class !
      </Tooltip>
    );
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(){

      const testObject ={'name':nameRef.current.value, 'userid':localStorage.getItem('userId')}
      // ajax call to create test in db
      const promise=ajaxOperations.post('http://localhost:1234/tests/addtest', testObject)
      promise.then(response =>{
        console.log(response)
        localStorage.setItem('testId', response.data.testId)
      }
      ).catch(err => console.log(err))

      handleClose();
    }

    function handleWidgetClickM(){
      setLoadMultipleChoiceSection(true);
    }

    function handleWidgetClickT(){
      setLoadTrueOrFalseSection(true);
    }
    return (
        <>
     {show &&  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
              <Card.Body >
                  
                  
                  <Form>
                      <Form.Group id='name'>
                         <Form.Label>Test Name</Form.Label>
                         <Form.Control ref={nameRef} type='text'   required></Form.Control>
                      </Form.Group>
                      <Form.Group id='UserName'>
                         <Form.Label>Relevant subjects</Form.Label>
                         <Form.Control ref={subjectRef} type='text' required></Form.Control>
                      </Form.Group>
                      <Form.Group id='Deadline'>
                         <Form.Label>Deadline</Form.Label>
                         <Form.Control ref={deadlineRef} type='date' required></Form.Control>
                      </Form.Group>
                      
                      
                  </Form>
              </Card.Body>
            </Card>
        </Modal.Body>
        <Modal.Footer>
        <Button  variant="contained" type="submit"  onClick={handleSubmit} >Let's Start !</Button>
        </Modal.Footer>
      </Modal>}
      <Navbar registerStatus='false'/> 
      <MyStuffContainer/>
      
      <Container maxWidth="sm" style={{ backgroundColor:'#f2f2f2', width: '50em' }}>
        <Typography component="div" style={{ backgroundColor: '#f2f2f2', height: '40vh',position: 'absolute',top: '20em', width: '50em'}} >
            
        <Button onClick={handleWidgetClickM} variant="outlined" color="secondary" style={{position:'absolute',top:'1em', left:'14em'}}>
           <div style={buttonStyle}>
              <i  class="fas fa-check-square"></i>
           </div>
           <br></br>
            <div style={{display:'block', position: 'absolute', top:'5.5em'}}>
              
              Multiple choice 
            </div>
          
         </Button>   

         <Button onClick={handleWidgetClickT} variant="outlined" color="secondary" style={{position:'absolute',top:'1em', left:'26em'}}>
           <div style={buttonStyle}>
           <i class="fas fa-hand-pointer"></i>
           </div>
           <br></br>
            <div style={{display:'block', position: 'absolute', top:'5.5em'}}>
              
              True OR False
            </div>
          
         </Button>  
         <OverlayTrigger 
          style={{position: 'absolute', top: '50em'}}
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
   
      >
         <img style={{width:'8em', top:'9.1em', position: 'absolute'}} src={widgetImage} alt="avatar for widget"/></OverlayTrigger>
        </Typography>    
      </Container>
    

      {loadMultipleChoiceSection && <MultipleChoiceSection/>}
      {loadTrueOrFalseSection && <TrueOrFalseSection/>}
    </>
  )
}

const WidgetSection=styled.div`
   
    

    >button{
      appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    -webkit-tap-highlight-color: transparent;
    font: 400 13.3333px Arial;
    text-rendering: auto;
    
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;

    }

    
`