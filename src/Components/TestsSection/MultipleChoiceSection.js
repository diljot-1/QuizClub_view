import React,{useState, useRef} from 'react'
import { Modal } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import {Form ,Col, Row, Card} from 'react-bootstrap';
import './test.css'
import {ajaxOperations} from '../../utils/ajax'
import {config} from '../../utils/config'
export default function MultipleChoiceSection(props) {
    const [show, setShow] = useState(true);
    const testId=useRef();
    const questionRef=useRef();
    const option1ref=useRef();
    const option2ref=useRef();
    const option3ref=useRef();
    const option4ref=useRef();
    const ransref=useRef();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const answers = (answer, correctAns='N')=>{
      return {name:answer.current.value, rans:correctAns};
  }

    function addquestion(e){
      handleClose();
      
      const answersArray = [];
      if(ransref.current.value == option1ref.current.value){
          answersArray.push(answers(option1ref, 'Y'));
      }
      else{
          answersArray.push(answers(option1ref, 'N'));
      }
      if(ransref.current.value == option2ref.current.value){
          answersArray.push(answers(option2ref, 'Y'));
      }
      else{
          answersArray.push(answers(option2ref, 'N'));
      }

      if(ransref.current.value == option3ref.current.value){
          answersArray.push(answers(option3ref, 'Y'));
      }
       else{
          answersArray.push(answers(option3ref, 'N'));
      }

      if(ransref.current.value == option4ref.current.value){
          answersArray.push(answers(option4ref, 'Y'));
      }
      else{
          answersArray.push(answers(option4ref, 'N'));
      }

      const questionObject = {
          testId:localStorage.getItem('testId'),
          name:questionRef.current.value,
          answers:answersArray, 
          type:"MCQ",
          rans:ransref.current.value
      }
      console.log('Question Object is ', questionObject);
     const promise = ajaxOperations.post(config.URLS.QUESTION_ADD_URL, questionObject);
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
            <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='title' closeButton>
          <Modal.Title className="title">Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card >
              <Card.Body >
              <Form >
                
                <Form.Group as={Row} controlId="formHorizontalQuestion">
                  
                  <Col sm={10}>
                    <Form.Control ref={questionRef} style={{width: '45.5em', height: '6em', textAlign: 'top'}} type="question" placeholder="Write your question here" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalOption1">
                  <Form.Label column sm={2}>
                  <Form.Check
                        type="radio"
                        label="Option 1"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={option1ref} type="Option1" placeholder="Answer Option 1" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalOption2">
                  <Form.Label column sm={2}>
                  <Form.Check
                        type="radio"
                        label="Option 2"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={option2ref} type="Option2" placeholder="Answer Option 2" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalOption3">
                  <Form.Label column sm={2}>
                  <Form.Check
                        type="radio"
                        label="Option 3"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={option3ref} type="Option3" placeholder="Answer Option 3" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalOption4">
                  <Form.Label column sm={2}>
                  <Form.Check
                        type="radio"
                        label="Option 4"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={option4ref} type="Option4" placeholder="Answer Option 4" />
                  </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="rans">
                  <Form.Label column sm={2}>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={ransref} type="rans" placeholder="rans" />
                  </Col>
                </Form.Group>
                <fieldset>
                  
                </fieldset>
   
              </Form>         
            
             </Card.Body>
            </Card>
         </Modal.Body>
         <Modal.Footer>
        <Button  variant="contained" color="secondary"type="save"  onClick={addquestion} >Save</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
