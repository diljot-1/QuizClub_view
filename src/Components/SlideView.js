import {Carousel} from '3d-react-carousal';
import { Container, styled } from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
 import'mdbreact/dist/css/mdb.css';
 import {MDBIcon} from 'mdbreact'

 let SlideText=[
    
    <div>
      <i class="fas fa-chalkboard-teacher"></i>
      <h1><b>Live Engagement</b></h1>
    </div> ,
    <div>
      <i class="fas fa-user-clock"></i>
      <h1>Asynchronous Learning</h1>
    </div> ,
    <div>
      <i class="fas fa-chart-line"></i>
      <h1>Insights and Reporting</h1>
    </div> ,

  
];


export default function SlideView(props) {
  

  return (
    <>
        <Carousel slides={SlideText} autoplay={true} interval={5000}/>
    </>
  )
}
