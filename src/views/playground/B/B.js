import { useEffect } from 'react';
import './Playground_B.scss';
import LocomotiveScroll from 'locomotive-scroll';

function B() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  });

  return (
    <div id='B' data-scroll-container className="playground_b">
      <div data-scroll-section className='first_zone'>
        <div id='js-target' className='object' data-scroll></div>
      </div>
      <div data-scroll-section className='second_zone'>

      </div>
    </div>
  );
}

export default B;
