import React from 'react'
import './Intro.css'
import profileImg from '../../Assets/profile-image.png'
import btnImg from '../../Assets/hireme.png'
import { Link } from 'react-scroll'


const Intro = () => {
  return (
    <section className='intro'>
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText"> <span className="im">I'm</span> <span className="introName">Muhammad Bilal</span> <br /> MERN Stack Developer </span>
            <p className="introPara">with a passion for seamless digital experiences, Expert in MongoDB, Express, Node JS, JavaScript, and ReactJS. <br /> Let's build something amazing!</p>
            <Link to="contactPage" spy={true} smooth={true} offset={-50} duration={500}><button className='btn'> <img className='btnImg' src={btnImg} alt="Hire Me" /> Hire Me</button></Link>
        </div>
        <img className='profileImg' src={profileImg} alt="" />
    </section>
  )
}


export default Intro
