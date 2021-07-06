import React, {useState} from 'react'
import GlobalHeaderContainer from '../Containers/GlobalHeaderContainer'
import UserInfoAll from './UserInfo/UserInfoAll'
import MyStuffContainer from './UserInfo/MyStuffContainer'
import styled from 'styled-components'
import testEngineProcess from '../utils/testEngineProcess.png'
import EditableUsernameComponent from './UserInfo/EditableUserNameComponent'
import teacherAvatar from '../utils/teacher_avatar.png'
import studentAvatar from '../utils/student_avatar.jpg'
import Navbar from './Navbar/Navbar'
export default function DashBoard(props) {
    console.log(props)
    const [loadEditableUserName, setLoadEditableUserName]=useState(false);
    const [loadIntroStepContainer, setLoadIntroStepContainer]=useState(true);
     function handleClick(e){
          setLoadEditableUserName(false);
     }
    
    
    return (
        <>
           
            
            
            <EditableUsernameComponent/>
            <Navbar registerStatus='false'/>
            {localStorage.getItem('role')=='teacher'&& <img src={teacherAvatar}></img>}
            {localStorage.getItem('role')=='student'&& <img src={studentAvatar} style={{width:'120px', height:'120px'}}></img>}
            <MyStuffContainer  style={{position: 'relative'}}/>
             <IntroStepContainer>
                <h4>How QuizClub works</h4>
                <img src={testEngineProcess}></img>
               
                         <div style={{position:'absolute', top: '29em'}}>
                        <strong>Sign Up :</strong>
                        <div style={{width: '162.5px', height: '5px'}}></div>
                         <h5><b>Quiz Club</b></h5>
                         </div>
                   
                         <div>
                        <strong>Create:</strong>
                        <div style={{width: '162.5px', height: '5px'}}></div>
                         <h5><b>Tests</b></h5>
                         </div>

                         <div style={{position:'absolute', top: '29em', left:'23em'}}>
                        <strong>Give Tests via</strong>
                        <div style={{width: '162.5px', height: '5px'}}></div>
                         <h5><b>Invites</b></h5>
                         </div> 
                
                
            </IntroStepContainer>
            
        </>
    )
}

const IntroStepContainer=styled.div`
   top:9em;
   position:absolute;
   text-align:center;
   left:45em;
   display: block;
   border: 0;
    font: inherit;
    margin: 0;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;
    >h4{
        font-size: 2.4em;
        padding: 2px 0 10px;
        clear: both;
        font-weight: 700;
        line-height: 1.4em;
        margin-bottom: .3em;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: #444;
    }

    >ul{
        line-height: 1.3;
        left:-15em;
        text-align: center;
        margin-top: 20px;
        width: 100%;
        margin-right: 0;
        position: absolute;
        list-style: none outside none;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

`
