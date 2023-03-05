import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
function Navbar() {

    const [mobile, setMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        if (window.innerWidth <= 1150) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
        <nav style={{ boxShadow: "0 3px 4px rgba(0,0,0,.2)", width: "100%" }}>
            <div className='navbar' style={{ width: "100%" }}>
                <div className="navbar-bot">
                    <img src="/src/assets/navbar-logo.png" alt="Riza" />
                </div>
                <div className={mobile && isMobile ? 'navbar-mobile-items' : ''}  style={{transitionDuration: "0.2s", transitionTimingFunction: "ease-in-out"}}>
                    <ul className={mobile && isMobile ? 'navbar-items-mobile' : 'navbar-items-list'}>
                        <li className="nav-item">
                            <a style={{ textDecoration: "none" }}>FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ textDecoration: "none" }}>BENEFÍCIOS</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ textDecoration: "none" }}>PLANOS</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ textDecoration: "none" }}>PORTFÓLIO</a>
                        </li>
                        
                        <li className="nav-item">
                            <a style={{ textDecoration: "none" }}>DEPOIMENTOS</a>
                        </li>
                        <button className="custom-button">CONTATO</button>
                    </ul>
                </div>
                <div className='nav-user'>
                    <IconContext.Provider value={{ color: "#0070FF", size: "35px" }}>
                        <button className="custom-button">CONTATO</button>
                        <button className='button-toggle' onClick={() => {
                            setMobile(!mobile);
                            }}><HiBars3BottomRight /></button>
                    </IconContext.Provider>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
