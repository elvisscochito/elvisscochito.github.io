import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import navbar from '../styles/Navbar.module.css';
import { useState, useLayoutEffect } from 'react';

const Navbar = () => {
    const [isActiveLink, setIsActiveLink] = useState('about');
    const [scrolled, setScrolled] = useState(false);

    const handleActiveLink = (e) => {
        setIsActiveLink(e);
    };

    useLayoutEffect(() => {
        /** 
         * TODO: Launch this function when the user scrolls down the page until second section
         */
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

        /* window.addEventListener('scroll', () => {
            setScrolled(window.scrollY > 0);
        }); */

        /* return () => {
            window.removeEventListener('scroll', () => {
                setScrolled(window.scrollY > 0);
            });
        } */
    }, [scrolled]);

    return (
        <BrowserRouter>
            <ul className={navbar.navbar /* scrolled ? navbar.scrolled : "" */ }>
                {/* <li className={navbar.navbarItem}><HashLink to="#about">Logo</HashLink></li> */}
                <li className={navbar.navbarItem}><HashLink to="#about" className={isActiveLink === 'about' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('about')}>About</HashLink></li>
                <li className={navbar.navbarItem}><HashLink to="#contact" className={isActiveLink === 'info' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('info')}>Info</HashLink></li>
                <li className={navbar.navbarItem}><HashLink to="#soft-skills" className={isActiveLink === 'soft-skills' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('soft-skills')}>Soft Skills</HashLink></li>
                <li className={navbar.navbarItem}><HashLink to="#Skills" className={isActiveLink === 'skills' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('skills')}>Skills</HashLink></li>
                <li className={navbar.navbarItem}><HashLink to="#projects" className={isActiveLink === 'projects' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('projects')}>Projects</HashLink></li>
                {/* <li className={navbar.navbarItem}><HashLink to="#social-proof" className={isActiveLink === 'education' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('education')}>Education</HashLink></li> */}
                <li className={navbar.navbarItem}><HashLink to="#social-proof" className={isActiveLink === 'social-proof' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('social-proof')}>Social proof</HashLink></li>
                <li className={navbar.navbarItem}><HashLink to="#contact" className={isActiveLink === 'contact' ? navbar.active : navbar.navbarLink} onClick={() => handleActiveLink('contact')}>Contact</HashLink></li>
            </ul>
        </BrowserRouter>
    );
}

export default Navbar;
