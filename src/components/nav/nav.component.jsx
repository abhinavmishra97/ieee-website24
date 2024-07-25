// responsive part is left 


import './nav.style.css';
import React, { useState } from 'react';
import logo from '../../assets/ieeeLogo.webp';


const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setIsMobileMenuOpen(false);
    };

    const handleHomeClick = () => {
        setActiveIndex(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className='topLogoContainer'>

                <div className='navContainer'>

                    <ul className={`navigation ${activeIndex !== null ? 'contracted' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        {['Home', 'Events', 'About Us', 'Team', 'Contact Us'].map((item, index) => (
                            <li
                                key={index}
                                className={(activeIndex !== null && activeIndex !== index) ? 'hidden' : ''}
                                onClick={() => item === 'Home' ? handleHomeClick() : handleItemClick(index)}
                            >
                                <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
                            </li>
                        ))}
                        <li className='circle' onClick={handleHomeClick}></li>

                    </ul>
                    {/* <button className={`mobile-menu-button ${isMobileMenuOpen ? 'close' : ''}`} onClick={handleMobileMenuToggle}>
                {isMobileMenuOpen ? '✖' : '☰'}
                </button> */}
                </div>
                
                <img src={logo} className='ieeelogo' alt='logo' />
            </div>
        </>
    );
};

export default Navbar;
