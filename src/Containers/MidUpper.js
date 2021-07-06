import React from 'react'
import styled from 'styled-components'
import leftImage from '../utils/7-MidUpper_SECTION-Left.png'
import rightImage from '../utils/7-MidUpper_SECTION-Right.png'
export default function MidUpper(props) {
    

    return (
        <>
            <OuterContainerMidUpper>
                <MiddleUpperInner>
                      
                      <img className='LImage' src={leftImage}></img>
                    
                    <TitleContainer>
                    <h3>Ready for meaningful engagement?</h3>
                    </TitleContainer>

                     <img className='RImage' src={rightImage}></img>
                  
                </MiddleUpperInner>
                
            </OuterContainerMidUpper>
        </>
    )
}

const OuterContainerMidUpper =styled.div`
  
    display: block;
    margin-top:-120px;
    padding:0;
    justify-content: center;
    align-items: center;
    background-color: #fffaf2;
    font-family: "Quicksand";
    font-size: 16px;
    font-weight:normal;
    
`
const MiddleUpperInner=styled.div`
  margin-right: auto;
    
    
    
    .LImage{
        width:320px;
        height:320px;
        vertical-align: middle;
        border-style: none;
        background: linear-gradient(90deg, rgba(244,166,70,0.2) 0%, rgba(244,166,70,0) 100%);
    }
    .RImage{
        width:320px;
        height:320px;
        position: absolute;
        right:0;
        background: linear-gradient(-90deg, rgba(236,52,76,0.15) 0%, rgba(236,52,76,0) 100%);
        text-align:right
    }
`

const TitleContainer =styled.div`
  margin: 56px auto;
  text-align: center;
  position: absolute;
  top: 48em;
  left: 33em;
  padding: 0;
  >h3{
      font-weight:bold;
      color: #461A42;

  }
`
