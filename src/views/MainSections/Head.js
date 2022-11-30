import { useEffect } from 'react';
import la from "../../js/letterAnimator"
import PB from "../../js/particlesBackground";

function Head() {
  useEffect(() => {
    la(['cv', 'portfolio']);
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
            <button className="button">
              About
            </button>
            <button className="button">
              My Work
            </button>
            <button className="button">
              Contact
            </button>
          </div>
        </div>
      </div>
  );
}

export default Head;
