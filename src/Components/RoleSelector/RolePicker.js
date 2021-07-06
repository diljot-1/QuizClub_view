import React from 'react'
import styled from 'styled-components'
import teacherAvatar from '../../utils/teacher_avatar.png'
import studentAvatar from '../../utils/student_avatar.jpg'
import './RolePicker.css'
export default function RolePicker(props) {
 //   console.log(props.location.state)

    return (
        <>
            <OuterContainer>
            <RoleContainer>
                <ContentWrapper>
                    <RolePickerWidget>
                        <Title>I am a ...</Title>
                        <div style={{display: 'inline-block', position: 'relative'}}>
                        <buton onClick={props.handleTeacherRole} style={{position: 'relative',display: 'block'}}>
                            <div className="avatarsection">
                             <img style={{width:'120px', height:'150px'}}src={teacherAvatar}></img>
                             <br></br>
                             <br></br>
                             <h3 ><b>Teacher</b></h3>
                             </div>
                        </buton>
                        <buton onClick={props.handleStudentRole} style={{position: 'absolute',display: 'inline', left:'180px', top:'0px'}}>
                            <div className="avatarsection">
                             <img style={{width:'120px', height:'150px'}}src={studentAvatar}></img>
                             <br></br>
                             <br></br>
                             <h3 ><b>Student</b></h3>
                             </div>
                        </buton>
                        </div>
                    </RolePickerWidget>
                </ContentWrapper>
            </RoleContainer>
            </OuterContainer>
        </>
    )
}

const RoleContainer =styled.div`
   
   animation-name: fadeInUpEnterance;
   animation-duration: 0.2s;
   animation-fill-mode: forwards;
   position: absolute;
    top: 10em;
    left: 0;
    width: 100%;
`

const ContentWrapper=styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display:block;
`

const RolePickerWidget=styled.div`
        width: 424px;
        padding: 40px 24px 24px;
        box-sizing: border-box;
        margin: 40px auto 16px;
        border-radius: 8px;
        background-color: #fff;
        border-bottom: 4px solid #dadada;
        padding: 16px 40px;
        position: relative;
        display: inline

        >button{
            width: 152px;
            display: inline;
            vertical-align: top;
            box-sizing: border-box;
            text-align: center;
            margin: 16px;
            background-color: #f2f2f2;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            appearance: auto;
            -webkit-writing-mode: horizontal-tb !important;
            text-rendering: auto;
            color: -internal-light-dark(black, white);
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            box-shadow: 0 4px 0 rgb(0 0 0 / 15%);
        }
`

const Title=styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #000;
    margin-bottom: 16px;
    font-family: "Open Sans", sans-serif, Helvetica, Arial;
    text-align: center;
`
const OuterContainer=styled.div`
 background-color:#f50057;
 width: 100%;
 height: 150em;
 top:0;
`