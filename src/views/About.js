import { useEffect } from 'react';
import picture from './../images/calvin_hex_centered.png';
import anime from 'animejs/lib/anime.es.js';

function About() {
  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
  });

  function checkPosition() {
    var position = document.querySelector('#about').getBoundingClientRect();
    if (position.top < window.innerHeight - (window.innerHeight * 0.5) && position.bottom >= 0) {
      window.removeEventListener('scroll', checkPosition)
      let picture = document.getElementById('about_picture')
      picture.style.filter = 'drop-shadow(0 0 1em #000022)'

      let skills = document.getElementsByClassName('skill_progress')
      for (let skill of skills) {
        anime({
          targets: skill,
          easing: 'linear',
          duration: 1000,
          width: (skill.getAttribute('data-progress') ?? 100) + "%",
        })
      }

      let slides = document.getElementsByClassName('slide')

      for (let slide of slides) {
        anime({
          targets: slide,
          easing: 'linear',
          duration: 1000,
          width: 140 + "%",
          // translateX: '-35deg',
        })
      }
    }
  }

  return (
    <div id="about" className="sub_section about">
      <div className='slide_bar left'></div>
      <div className='slide_bar right'></div>
      <div className='slide left'></div>
      <div className='slide right'></div>
      <div className='title'>
        About me
      </div>
      <div className='information'>
        <div className='info_left'>
          <img id='about_picture' src={picture} className="hexagon picture" alt="calvin" />
          <div className='description'>
            Responsible and enthusiastic student of ICT & Software engineering seeking an internship in Software and Smart mobile. In my studies, I have built up experience in creating different kinds of applications with front- and backend. I am always looking to improve myself as a programmer and am looking to expand my skills in an internship.
          </div>
        </div>
        <div className='info_right'>
          <div className='skill_bar'>
            <div className='skill_title'>HTML</div>
            <div className='skill_progress' data-progress="95"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>CSS</div>
            <div className='skill_progress' data-progress="85"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>JavaScript</div>
            <div className='skill_progress' data-progress="90"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>Jquery</div>
            <div className='skill_progress' data-progress="95"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>React</div>
            <div className='skill_progress' data-progress="80"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>PHP</div>
            <div className='skill_progress' data-progress="90"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>Laravel</div>
            <div className='skill_progress' data-progress="95"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>SQL</div>
            <div className='skill_progress' data-progress="70"></div>
          </div>
          <div className='skill_bar'>
            <div className='skill_title'>Python</div>
            <div className='skill_progress' data-progress="70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
