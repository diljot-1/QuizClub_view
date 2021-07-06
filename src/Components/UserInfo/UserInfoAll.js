import React from 'react'
import { Avatar} from '@material-ui/core'
import styled from 'styled-components'
import EditableUserNameComponent from './EditableUserNameComponent'
export default function UserInfoAll(props) {
    

    return (
        <>
            <OuterContainer>
            <BasicInfo>
              <Avatar style={{color:'purple',width: '80px',height: '80px',padding: '15px 5px', left:'6em'}}>OP</Avatar><h4>{localStorage.getItem('userName')}</h4>
            </BasicInfo>
            {props.renderEditableComponent && <EditableUserNameComponent style={{position: 'absolute',left: '28em'}}/>}
            </OuterContainer>
            
            
        </>
    )
}
const OuterContainer =styled.div`
      width: 100%;;
      height: 125px;
      background: #f7f7f7;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      margin: 0 auto;
      position: absolute;
    -webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    -webkit-box-align: stretch !important;
    align-items: stretch !important;
    border-width: 0px !important;
    border-style: solid !important;
    box-sizing: border-box !important;
    flex-direction: column !important;
    margin-bottom: 28px !important;
    padding: 0px !important;
    
    min-height: 0px !important;
    min-width: 0px !important;
    z-index: 1 !important;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
` 
const BasicInfo=styled.div`
    float: left;
    position: relative;
    padding: 10px 10px 10px 0px;
    margin-left: -18px;
    margin-left: 20px;
`