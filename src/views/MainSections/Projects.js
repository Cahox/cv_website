import picture from './../../images/calvin.jpeg';
import elevenTravel from './../../images/eleven-travel/eleven-travel.jpg';

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
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
        </div>
        <div className='cards_row'>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
        </div>
        <div className='cards_row'>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
          <div className='card'>
            <img src={picture} className="card_picture" alt="project" />
            <div className='project_title'>
              <span>project title</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
