 import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
export default function GlobalHeaderContainer(props) {
        
        
        return (
        <>
            <HeaderContainer>
               
                <div >
                    <span style={{padding:'0.5em' , fontSize:'2.3em',top:'0.05em', textAlign:'center'}}><b>Test Engine</b></span>
                     {props.loadSignUpButton &&  <Button onClick={props.loadSignUpComponent} style={{left:'75em', top: '0.01em'}} variant="contained" color="secondary">Sign Up</Button>}
                     
                 </div>
                
            </HeaderContainer>
        </>
    )
}

const HeaderContainer=styled.div`
  color: #f50057;
  height:4em;
  background-color:black;

  
  inherits:false;
  width:100%;
  text-transform: Uppercase;
  
  font-size:'2em';
  font-family: 'Rubik', sans-serif;
  
` 
