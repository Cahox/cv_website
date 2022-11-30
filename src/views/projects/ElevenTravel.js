import picture from './../../images/calvin.jpeg';

function ElevenTravel() {
  return (
    <div id='ElevenTravel' className="sub_section projects">
      <div className='title'>
        Projects
      </div>
      <div className='project_cards'>
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

export default ElevenTravel;
