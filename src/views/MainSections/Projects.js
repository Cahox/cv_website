import picture from './../../images/calvin.jpeg';
import elevenTravel from './../../images/eleven-travel/eleven-travel.jpg';
import strapi from './../../images/strapi/strapi.png';

function Projects() {
  return (
    <div id='projects' className="sub_section projects">
      <div className='title'>
        Projects
      </div>
      <div className='project_cards'>
        <div className='cards_row'>
          {/* ElevenTravel */}
          <a href='/projects/eleven-travel' className='card'>
            <img src={elevenTravel} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Eleven Travel</span>
            </div>
          </a>
          
          {/* Strapi */}
          <a href='/projects/strapi' className='card'>
            <img src={strapi} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Strapi</span>
            </div>
          </a>
          
          {/*
          moonly ticket support
          jobapp
          pocketduck
          roguelike
          simac
          travelapp
          thisproject
          blockchain 
          friettent system
          kinetic analysis
          */}

        </div>
      </div>
    </div>
  );
}

export default Projects;
