import React,{useState, useRef} from 'react'
import { Modal } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import {Form ,Col, Row, Card} from 'react-bootstrap';
import {ajaxOperations} from '../../utils/ajax'
import {config} from '../../utils/config'

export default function TrueOrFalseSection(props) {
    
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const questionRef=useRef();
    const selectedRef = useRef();
    const ransref= useRef();
    const scoreRef = useRef();
    
    const answers = (rans, score)=>{
        return {rans:rans, score:score};
    }

    function addquestion(e){
        handleClose();
        
        const answersArray=[];
        answersArray.push(answers(ransref.current.value, scoreRef.current.value));

        const questionObject = {
            name:questionRef.current.value,
            answers:answersArray, 
            type:"T/F"
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

                <Form.Group as={Row} controlId="selected">
                  <Form.Label column sm={2}>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={selectedRef} type="selected" placeholder="Enter your answer as (T or F)" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="rans">
                  <Form.Label column sm={2}>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={ransref} type="rans" placeholder="Enter the right answer" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="score">
                  <Form.Label column sm={2}>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control ref={scoreRef} type="score" placeholder="Enter the score for this question" />
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
