import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import {ListGroup, Card} from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import {MDBIcon} from 'mdbreact'
import {ajaxOperations} from '../../utils/ajax'
import {config} from '../../utils/config'
import Button from 'react-bootstrap/Button'
import EditableUsernameComponent from './EditableUserNameComponent';
export default function MyStuffContainer(props) {
    const s="Edit Profile";    
    const [menus,setMenus]=useState([]);
    const [loadEditable,setLoadEditable]=useState(false);
    useEffect(()=>{
           
      const promise=  ajaxOperations.fetch(`http://localhost:1234/menus/${localStorage.getItem('mail')}`)
      promise.then(response=>{
          console.log((response)+"**************")
          
            console.log( response.data[0].url);
           // setLoader(true);
             
            
           setMenus(response.data)
             

      }).catch(err=>{
          console.log(err)
      })

    },[])
    function handleEditable(){
        setLoadEditable(true);
    }
  
    return (
        <>
            <OuterContainer style={{top:'13em'}}>
                <InnerContainer>
                                 
                   <ListGroup >
                   
                       <ListGroup.Item><h2>My Stuff</h2></ListGroup.Item>
                       {menus.map((menu, index)=>{
                           return(
                           <Link to={`/dashboard${menu.url}`}>
                           <ListGroup.Item  ><MDBIcon far icon="file-alt" /><span style={{ color:'#f50057'}}> {menu.name}</span> </ListGroup.Item>
                           </Link>)
                       })}
                        <ListGroup.Item  ><MDBIcon style={{color:'#24a0ed'}}icon="cog" /><Button onClick={handleEditable} variant="link" style={{color:'f50057',position:'absolute', left:'0em',top:'-0.2em'}}><span style={{ color:'#f50057'}}>{s.toLowerCase()}</span> </Button> </ListGroup.Item>
                        {loadEditable && <EditableUsernameComponent/>}
                      
                         
                         
                          
                       
                       
                        
                        
                       
                                
                            
                   </ListGroup>
                    
                </InnerContainer>
            </OuterContainer> 
        </>
    )
}

const OuterContainer =styled.div`
    width: 30%;
    float: left;
    top:2em;
    line-height: 1;
    margin-right: 0;
    position: absolute;
    word-wrap: break-word;
    border: 0;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    display: block;
    cursor: auto;
`

const InnerContainer=styled.div`
 font-size:18px;
 
`