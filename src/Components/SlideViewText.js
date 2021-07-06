import {Carousel} from '3d-react-carousal';
import { Container, styled } from '@material-ui/core';
import img1 from '../utils/slide1.final.jpg';
import img2 from '../utils/slide2.final.jpg';
import img3 from '../utils/slide3.final.jpg'
import './SlideView.css'
 let SlideText=[
    
        <h1>Live Engagement</h1>,
    ,
    
    <h1>Asynchronous Learning</h1>,
    <h1>Insights and Reporting</h1>


];
let slides = [
    <div style={{width:'1000px', height:'526px'}}>
   
    <div style={{width:'1000px', height:'526px', position:'absolute'}}>
        
        <img style={{top:'1em',right: '0em', width:'1000px', height:'526px', position:'absolute'}} src={img1} alt="1" />
    </div></div>,
    <div style={{width:'1000px', height:'526px'}}>
   
    <div style={{width:'1000px', height:'526px', position:'absolute'}}>
        
        <img style={{top:'1em',right: '0em', width:'1000px', height:'526px', position:'absolute'}} src={img2} alt="1" />
    </div></div>,
    <div style={{width:'1000px', height:'526px'}}>
   
    <div style={{width:'1000px', height:'526px', position:'absolute'}}>
        
        <img style={{top:'1em',right: '0em', width:'1000px', height:'526px', position:'absolute'}} src={img3} alt="3" />
    </div></div>
    ];


export default function SlideViewText(props) {
    

    return (
        <>
            <Carousel slides={SlideText} autoplay={true} interval={5000}/>
            <Carousel style={{margin:'3em', position:'absolute'}} slides={slides} autoplay={true} interval={5000}/>
        </>
    )
}

