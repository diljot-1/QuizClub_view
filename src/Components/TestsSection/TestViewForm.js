import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import TestsObject from './Test_ques.json'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import GameOver from './GameOver'
import Card from 'react-bootstrap/Card'
const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const TestViewForm = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);
    var Quesarray=[];
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }

    useEffect(() => {

         
         Quesarray=JSON.parse(localStorage.getItem('test'))
         console.log(Quesarray[0])
                setQuiz(Quesarray.map((item, index)=> (

                    {
                        question: item.name,
                        options: shuffle([...item.answers]),
                        answer: item.rans
                    }

                )));
            


    }, []);


    return (<>
        <CountdownCircleTimer
                isPlaying
                duration={600}
                colors={[
                ['#004777', 0.33]
                
                ]}
            >
                {({ remainingTime }) => Math.ceil(remainingTime/60)}
            </CountdownCircleTimer>
        <QuizWindow>
            { quiz[number] &&

                <>
                 <Card style={{position: 'absolute',left: '400px', top:'208px',width:'800px', height:'500px'}}>
                    <Card.Header as="h5"><b>Question {number+1}:</b><Question style={{color: 'blue', fontSize:'30px'}} dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question></Card.Header>
                    <Card.Body>
                        
                        <Card.Text>
                        <Options>
                        {quiz[number].options.map((item, index) => (
                            <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Option>
                        ))}
                    </Options>
                        </Card.Text>
                       
                    </Card.Body>
                    </Card>
                    

                    
                </>

            }
            {
                number === 2 &&  <GameOver pts={pts} />
            } 
             
            
        </QuizWindow>
        </>
    )
        }


      export default TestViewForm 