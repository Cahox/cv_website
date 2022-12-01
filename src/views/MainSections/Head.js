import { useEffect } from 'react';
import la from "../../js/letterAnimator"
import PB from "../../js/particlesBackground";

function scrollTo(id){
  document.getElementById(id).scrollIntoView();
}

function Head() {
  useEffect(() => {
    la(['cv', 'portfolio']);
    document.getElementById('to_about').addEventListener('click', scrollTo('about'))
    document.getElementById('to_projects').addEventListener('click', scrollTo('projects'))
    document.getElementById('to_contact').addEventListener('click', scrollTo('contact'))
  });
  return (
      <div id="head" className="head">
        <PB></PB>
        <div className="center_container">
          <div className="animation_center">
            <span id="cv" className="animation_item">
              Curriculum Vitae
            </span>
            <span id="portfolio" className="animation_item">
              Portfolio
            </span>
          </div>
          <div className="head_name">
            Calvin Hong
          </div>
          <div className="head_navigation">
            <button id='to_about' className="button">
              About
            </button>
            <button id='to_projects' className="button">
              My Work
            </button>
            <button id='to_contact' className="button">
              Contact
            </button>
          </div>
        </div>
      </div>
  );
}

export default Head;
