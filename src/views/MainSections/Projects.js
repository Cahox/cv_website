import elevenTravel from './../../images/eleven-travel/eleven-travel.jpg';
import strapi from './../../images/strapi/strapi.png';
import support from './../../images/strapi/strapi.png';
import jobapp from './../../images/strapi/strapi.png';
import pocketduck from './../../images/strapi/strapi.png';
import roguelike from './../../images/strapi/strapi.png';
import simac from './../../images/strapi/strapi.png';
import travelapp from './../../images/strapi/strapi.png';
import blockchain from './../../images/strapi/strapi.png';
import catering_ai from './../../images/strapi/strapi.png';
import stresspatchy from './../../images/strapi/strapi.png';
import nft from './../../images/strapi/strapi.png';
import cv from './../../images/strapi/strapi.png';

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
          {/* Support System */}
          <a href='/projects/support-system' className='card'>
            <img src={support} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Support System</span>
            </div>
          </a>
        </div>
        <div className="cards_row">
          {/* Jobapp */}
          <a href='/projects/jobapp' className='card'>
            <img src={jobapp} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Jobapp</span>
            </div>
          </a>
          {/* Pocketduck */}
          <a href='/projects/pocket-duck' className='card'>
            <img src={pocketduck} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>pocket-duck</span>
            </div>
          </a>
          {/* Roguelike game */}
          <a href='/projects/roguelike' className='card'>
            <img src={roguelike} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Roguelike</span>
            </div>
          </a>
          {/* simac */}
          <a href='/projects/simac' className='card'>
            <img src={simac} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Simac</span>
            </div>
          </a>
          {/* travelapp */}
          <a href='/projects/travel-app' className='card'>
            <img src={travelapp} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Travel App</span>
            </div>
          </a>
          {/* Blockchain with microservice */}
          <a href='/projects/blockchain' className='card'>
            <img src={blockchain} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Blockchain - Microservice</span>
            </div>
          </a>
          {/* Snackbar systeem */}
          <a href='/projects/catering-ai' className='card'>
            <img src={catering_ai} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Catering AI</span>
            </div>
          </a>
          {/* Stress Patchy */}
          <a href='/projects/stress-patchy' className='card'>
            <img src={stresspatchy} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>Stress Patchy</span>
            </div>
          </a>
        </div>
        <div className="cards_row">
          {/* NFT */}
          <a href='/projects/nft' className='card'>
            <img src={nft} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>NFT Project</span>
            </div>
          </a>
          {/* Dit project */}
          <a href='/projects/cv-website' className='card'>
            <img src={cv} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>CV Website</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
