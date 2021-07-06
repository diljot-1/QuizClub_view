import React ,{useState , useEffect} from 'react';
import { FaBars , FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import { Button } from '../../globalStyle';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavItemBtn} from './Navbar.Elements'

const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        } else{
            setButton(true);
        }
        
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value = {{ color: 'white' }}>
           <Nav> 
               <NavbarContainer>
                   <NavLogo to='/' onClick={handleClick} >
                     QuizClub
                       <NavIcon /> 
                       </NavLogo>
                       <MobileIcon onClick={handleClick}>
                           {click ? <FaTimes /> : <FaBars />}
                           </MobileIcon>
                           <NavMenu onClick = {handleClick} click={click}>
                               <NavItem>
                                   <NavLinks to='/'> Home  </NavLinks>
                                   </NavItem>
                               
                               
                             
                              
                               <NavItem>
                                   <NavLinks to='/faq'> FAQ  </NavLinks>
                                   </NavItem>
                              
                               <NavItem>
                                   <NavLinks to='/contact'> Conatact Us </NavLinks>
                             </NavItem>

                             {props.registerStatus!='false' && <NavItemBtn>
                                { button ? (<NavBtnLink to='/register' > <Button primary> REGISTER  </Button> 
                                </NavBtnLink>
                                 ) : ( 
                                 <NavBtnLink to='/register'> <Button fontBig primary> REGISTER </Button> 
                                 </NavBtnLink>
                                 )} 
                                 </NavItemBtn>}
                               </NavMenu>
                </NavbarContainer> 
           </Nav> 
           </IconContext.Provider>
        </>
    );
};

export default Navbar;