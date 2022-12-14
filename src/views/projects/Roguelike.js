import vuejs from './../../images/technologies/vuejs.png';
import ebean from './../../images/technologies/ebean.png';

import login from './../../images/roguelike/roguelike-login.png';
import collection from './../../images/roguelike/roguelike-game.png';
import game from './../../images/roguelike/roguelike-collection.png';


function Roguelike() {
  return (
    <div id='Strapi' className="project_page">
      <div className='top'>
        <a href='/' className='back'>
          Back
        </a>
        <div className='title'>
          Roguelike
        </div>
      </div>
      <div className='info'>
        <div className='left'>
          <div className='info_text'>
            <div>
              This project consists out of a roguelike 2D game. In the game itself, the main goal is to clear rooms by killing all the enemies. Furthermore, improving the character by equipping unique weapons will aid the player in their quest.
            </div>
            <div>
              The aim of this solo project was to make a web browser game with html,css,js and java.
              The project followed the Scrum strategy. This means the time given to the project has been divided into sprints. In this case, there were 6 sprints.
            </div>
            <div>
              This web browser game was created using the javscript framework Vue.js for the frontend and a Java Rest API for the backend. This project used the object–relational mapping product: Ebean
            </div>
          </div>
          <div className='technology_images'>
            <img src={vuejs} className="technology_image" alt="Vuejs" />
            <img src={ebean} className="technology_image" alt="Ebean" />
          </div>
        </div>

        <div className='right'>
          <div className='image_container'>
            <img src={login} className="info_image" alt="project" />
            <img src={collection} className="info_image" alt="project" />
            <img src={game} className="info_image" alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roguelike;
