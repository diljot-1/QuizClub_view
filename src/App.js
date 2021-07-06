import React from 'react'
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import * as Yup from 'yup';
import BackgroundPlayer from './Components/BackgroundPlayer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DashBoard from './Components/DashBoard'
import Location from "react-app-location";
import TestAttend from './Components/TestsSection/TestAttend'
import Tests from './Components/TestsSection/Tests'
import CreateNewTest from './Components/TestsSection/CreateNewTest';
import GlobalStyle from './globalStyle'
//import Navbar  from './components/Navbar/Navbar'
import {Navbar} from './Components'
import {Footer} from './Components'
import RolePicker from './Components/RoleSelector/RolePicker';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/AdminDashboard'
import Login from './Components/Login';
import { AuthProvider } from './Components/Contexts/AuthContext'
import {loadInterceptor} from './utils/interceptor'

const HomeLocation = new Location('/');
const DashBoardLocation = new Location('/dashboard')
loadInterceptor();

export default function App(){


  
  
    return (
      
      <>
         
         <Router>
           
          <AuthProvider>
            <Switch>
               <Route path={HomeLocation.path} component={Home} exact />
               <Route path="/admin" exact strict><AdminLogin/></Route>
               <Route path='/admin/dashboard' exact strict><AdminDashboard/></Route>
               <Route path="/signup" exact strict><SignUp/></Route>
               <Route path="/login" exact strict><Login/></Route>
               <Route path="/attend" exact strict><TestAttend/></Route>
               {DashBoardLocation.toRoute({ component: DashBoard }, true)}
              
               <Route path="/dashboard/tests" exact strict><Tests/></Route>
               <Route path="/dashboard/tests/newtest"exact strict><CreateNewTest/></Route>
                
                
          </Switch>
          </AuthProvider>
          <Footer/>      
    </Router>
    

      </>
    )
  }

