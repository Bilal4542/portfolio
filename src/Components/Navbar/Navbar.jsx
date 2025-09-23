import React, { useState } from 'react'
import logo from '../../Assets/logo.png'
import contactImg from '../../Assets/contact.png'
import './Navbar.css'
import {Link} from 'react-scroll'
import hamburger from '../../Assets/menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className="navbar">
        <img className='logo' src={logo} alt="Logo" />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            {/* <Link activeClass='active' to='team' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>My Team</Link> */}
            {/* <Link activeClass='active' to='https://github.com/Bilal4542' rel="noopener noreferrer" className='desktopMenuListItem'>GitHub</Link> */}
            <a href="https://github.com/Bilal4542" target="_blank" rel="noopener noreferrer" className='desktopMenuListItem'>GitHub</a>
            
        </div>
        <Link to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuBtn'>
        <img className='desktopMenuImg' src={contactImg} alt="" /> Contact Me
        </Link>

        <img className='hamBurgerLogo' src={hamburger} alt="hamBurgerLogo" onClick={()=>setShowMenu(!showMenu)} />
        <div className="hamBurgerMenu" style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='team' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>My Team</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
