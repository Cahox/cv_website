import { useEffect } from 'react';
import '../Playground.scss';
import bg from "./bg.png"
import object1 from "./Blademaster.png"
import object2 from "./Soulslinger.png"
import object3 from "./Scythedancer.png"

function A() {
  useEffect(() => {
    var objects = document.getElementsByClassName('objects');
    for (let i = 0; i < objects.length; i++) {
      objects[i].addEventListener('mouseover', function (e) {
        document.getElementById(e.target.dataset.title).classList.add('title_hover')
      })

      objects[i].addEventListener('mouseout', function (e) {
        document.getElementById(e.target.dataset.title).classList.remove('title_hover')
      })
    }
  });

  return (
    <div id='A' className="playground_a">
      <div className='object_container'>
        <img src={object1} className="objects object_one" data-title="title_one" alt="object1" draggable="false" />
        <img src={object2} className="objects object_two" data-title="title_two" alt="object2" draggable="false" />
        <img src={object3} className="objects object_three" data-title="title_three" alt="object3" draggable="false" />

        <div className='bar_container'>
          <div className='top_bar'>
            <div className='title_container'>
              <div id="title_one" className='title'>LEAD</div>
              <div id="title_two" className='title'>EVOLVE</div>
              <div id="title_three" className='title'>SACRIFICE</div>
            </div>
          </div>
          <img src={bg} className="middle_bar" alt="bg" draggable="false" />
          <div className='bottom_bar' />
        </div>
      </div>
    </div>
  );
}

export default A;
