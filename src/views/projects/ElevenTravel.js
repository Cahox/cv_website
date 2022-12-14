import laravel from './../../images/technologies/laravel.png';
import meilisearch from './../../images/technologies/meilisearch.png';
import whatsapp from './../../images/technologies/whatsapp.png';
import mollie from './../../images/technologies/mollie.png';

import website_main from './../../images/eleven-travel/eleven-travel.jpg';
import tickets from './../../images/eleven-travel/et_tickets.png';
import login from './../../images/eleven-travel/et_login.png';

function ElevenTravel() {
  return (
    <div id='ElevenTravel' className="project_page">
      <div className='top'>
        <a href='/' className='back'>
          Back
        </a>
        <div className='title'>
          Eleven Travel
        </div>
      </div>
      <div className='info'>
        <div className='left'>
          <div className='info_text'>
          <div>
            Eleven Travel helps people all over the Netherlands get to their festival. Users can create and be the leader of their own trips.
          </div>
          <div>
            During my time as a junior software developer, this is the project I worked on the most. The part I helped develop is the backoffice. All the settings/configutations of the of the festival events, trips, orders and everything else gets created and updated in this system.
          </div>
          <div>
            The application uses different technologies. The main framework used is Laravel (PHP), with many other technologies like meilisearch, whatsapp messaging integration, and mollie for payments. 
          </div>
          </div>

          <div className='technology_images'>
          <img src={laravel} className="technology_image" alt="Laravel" />
          <img src={meilisearch} className="technology_image" alt="Meilisearch" />
          <img src={whatsapp} className="technology_image" alt="Whatsapp" />
          <img src={mollie} className="technology_image" alt="Mollie" />
          </div>
        </div>

        <div className='right'>
          <div className='image_container'>
          <img src={website_main} className="info_image" alt="project" />
          <img src={tickets} className="info_image" alt="project" />
          <img src={login} className="info_image" alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElevenTravel;
