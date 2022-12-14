import elevenTravel from './../../images/eleven-travel/eleven-travel.jpg';
import strapi from './../../images/strapi/strapi.png';
import pocketduck from './../../images/pocketduck/duck-normal.gif';
import roguelike from './../../images/roguelike/roguelike-collection.png';
import travelapp from './../../images/strapi/strapi.png';
import blockchain from './../../images/strapi/strapi.png';
import catering_ai from './../../images/strapi/strapi.png';
import stresspatchy from './../../images/strapi/strapi.png';
import nft from './../../images/strapi/strapi.png';
import cv from './../../images/strapi/strapi.png';
import Roller from './../../js/roller.js'

function Projects() {

  return (
    <div id='projects' className="sub_section projects">
      <Roller></Roller>
      <div className='title'>
        Projects
      </div>
      <div id='gridMovement' className='project_cards'>
        {/* ElevenTravel */}
        <a href='/projects/eleven-travel' className='card obama'>
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
        {/* Pocketduck */}
        <a href='/projects/pocket-duck' className='card'>
          <img src={pocketduck} className="card_picture pd" alt="project" />
          <div className='project_title'>
            <span>PocketDuck</span>
          </div>
        </a>
        {/* Roguelike game */}
        <a href='/projects/roguelike' className='card'>
          <img src={roguelike} className="card_picture" alt="project" />
          <div className='project_title'>
            <span>Roguelike</span>
          </div>
        </a>

        {/* travelapp */}
        {/* Blockchain with microservice */}
        {/* Snackbar systeem */}
        {/* Stress Patchy */}
        {/* NFT */}
        {/* Dit project */}
      </div>
    </div>
  );
}

export default Projects;
