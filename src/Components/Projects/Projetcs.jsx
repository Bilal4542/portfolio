import React from 'react'
import './Projetcs.css'
import project1 from '../../Assets/project1.jpg'
import project2 from '../../Assets/project2.jpg'
import project3 from '../../Assets/project3.jpg'
import project4 from '../../Assets/project4.jpg'
import project5 from '../../Assets/project5.jpg'
import project6 from '../../Assets/project6.jpg'


const Projetcs = () => {
  return (
    <section className='projects'>
      <h2 className='projectTitle'>My Projects</h2>
      <span className="description">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
      <div className="projectsimgs">
        <div className='projectHeadText'>
        <a href='https://www.rains.com/' target='_blank' rel="noreferrer"><img className='projectImg' src={project1} alt="" /></a>
        <h3>E-Commerce Platform</h3>
        <p>E-commerce platform with an advanced product catalog, payment integration, and a user management system.</p>
        </div>
        <div className='projectHeadText'>
        <a href="https://form-sal.surge.sh/" target='_blank' rel='noreferrer'><img className='projectImg' src={project2} alt="" /></a>
        <h3>Admission form(HTML/Bootstrap)</h3>
        <p>Designed a user-friendly and responsive form interface.</p>
        </div>
        <div className='projectHeadText'>
        <a href="https://tic-tactoe-game.surge.sh/" rel='noreferrer' target='_blank'><img className='projectImg' src={project3} alt="" /></a>
        <h3>Tic-Tac-Toe game (JS)</h3>
        <p>Developed an interactive game for entertainment.</p>
        </div>
        <div className='projectHeadText'>
         <a href="https://news-big-.surge.sh/" target='_blank' rel='noreferrer'><img className='projectImg' src={project4} alt="" /></a>
        <h3>News app (ReactJS)</h3>
        <p>Created a dynamic platform for staying informed on current events.</p>
        </div>
        <div className='projectHeadText'>
        <a href="https://wearh-app-patch.surge.sh/" target='_blank' rel='noreferrer'><img className='projectImg' src={project5} alt="" /></a>
        <h3>Weather app (ReactJS)</h3>
        <p>Engineered a real-time weather application for quick updates.</p>
        </div>
        <div className='projectHeadText'>
        <a href="https://web-ecom.surge.sh/" target='_blank' rel='noreferrer'><img className='projectImg' src={project6} alt="" /></a>
        <h3>E-commerce app (ReactJS)</h3>
        <p>Designed a modern and functional online shopping platform.</p>
        </div>
      </div>
    </section>
  )
}

export default Projetcs
