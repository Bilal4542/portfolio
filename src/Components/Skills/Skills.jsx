import React from 'react'
import './Skills.css'
import uiDesign from '../../Assets/ui-design.png'
import webDesign from '../../Assets/website-design.png'
import webDev from '../../Assets/app-design.png'

const Skills = () => {
  return (
    <section className="skills">
        <span className="skillTitle">What I do</span>
        <span className="desccription">I am a Skilled and Passionate Frontend Web Developer with experience in creating visually appealing and user-friendly Websites. I have a strong understanding of designing, development and keen eye for detail. I am proficient in HTML, CSS,  Bootstrap, JavaScript and ReactJS.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={uiDesign} alt="" className="skillBarImg" />
                <div className="skillBarContent">
                    <h2>Website Designing</h2>
                    <p>HTML, CSS, Bootstrap expert. Crafting sleek, responsive websites with clean, stylish design. <br /> Let's bring your ideas into Reality</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDesign} alt="" className="skillBarImg" />
                <div className="skillBarContent">
                    <h2>Web Development Using Vanilla JS</h2>
                    <p>Skilled in Vanilla JavaScript. I bring interactivity to websites, ensuring a seamless user experience. <br /> Let's create something dynamic together!</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDev} alt="" className="skillBarImg" />
                <div className="skillBarContent">
                    <h2>Web Development Using React JS</h2>
                    <p>Skilled in React.js. I craft dynamic and user-friendly interfaces, turning ideas into seamless web experiences. <br /> Let's build something extraordinary!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
