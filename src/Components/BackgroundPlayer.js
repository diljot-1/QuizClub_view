import React from 'react'
import video from '../utils/background.mp4'

export default function BackgroundPlayer(props) {
    

    return (
        <>
            
            <video autoPlay loop muted 
             style={{ position: 'absolute',
                      width : '100%',left: '50%', 
                      top:'50%', height: '100%',
                      objectFit:'cover', transform: 'translate(-50%, -50%)',
                      zIndex:'-1'
                       
             }}
            >
                  <source src={video} type='video/mp4'></source>
            </video>            
        </>
    )
}
