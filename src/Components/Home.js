import React, {useState} from 'react'
import GlobalHeaderContainer from '../Containers/GlobalHeaderContainer'
import SignUp from './SignUp'
import Button from '@material-ui/core/Button'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import BackgroundPlayer from './BackgroundPlayer'
import MidUpper from '../Containers/MidUpper'
import {Carousel} from '3d-react-carousal';
import SlideView from './SlideView'
import SlideViewText from './SlideViewText'
import {Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'


export default function Home(props) {
    const [loadSignUp, setSignUp]= useState(false);
  
        function loadSignUpComponentFunc(){
             setSignUp({loadSignUp: true});
            

        }

    return (
        <>
              <Navbar registerStatus='true'/>    
             <GlobalHeaderContainer loadSignUpComponent={loadSignUpComponentFunc}/> 
              {  <FeaturedContentContainer style={{left: 100, top: 250}}>
                  <div>
                   <h2>The Best Quiz Maker for Business & Education</h2>
                   <p><strong>Test Engine's</strong> secure, professional web-based is an easy-to-use, customizable online testing solution for business, training & educational assessments with Tests & Quizzes graded instantly, saving hours of paperwork!</p>
                   <Link to ="/signup" ><Button   variant="contained" color="secondary">Register</Button></Link> 
                   </div>
              </FeaturedContentContainer>}
             <BackgroundPlayer/>
           
             
             <Container fluid='md' className='d-flex test-align-center justify-content-md-end' style={{minHeight:'100vh',maxWidth:'400px', maxHeight:'400px', left:'599px'}}>
              <div className='w-100' style={{width:'400px'}}>
             
                 {loadSignUp && 
                   <SignUp />
                   
                 }
               </div>
               </Container>
              
           
             
       
        <MidUpper/>
        <div style={{margin:'8em'}}><SlideView/></div>
        
        <SlideViewText style={{margin:'3em'}}/>
     
       
        
         
        </>
    )
}

const FeaturedContentContainer=styled.div`
width: 95%;
max-width: 454px; 
height: 348px;
float: left;
margin-right: 40px;
display: block;
color: #fff;
left:252px;
position:absolute;
 >p{
    font-size: 15px;
    color: #fff;
    
    line-height: 1.46;
 }
 >h2{
    color: #fff;
    font-size: 37px;
    line-height: 1.15;
    margin-top: 45px;
    margin-bottom: 12px;
    text-shadow: 1px 1px 2px #282929;
    display: block;
    font-size: 2.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
 }
`
const SlideViewContainer=styled.div`
  width: 100%;
  height:748px;
`