import laravel from './../../images/technologies/laravel.png';
import meilisearch from './../../images/technologies/meilisearch.png';
import whatsapp from './../../images/technologies/whatsapp.png';
import mollie from './../../images/technologies/mollie.png';

import website_main from './../../images/eleven-travel/eleven-travel.jpg';
import tickets from './../../images/eleven-travel/et_tickets.png';
import login from './../../images/eleven-travel/et_login.png';

function Strapi() {
  return (
    <div id='Strapi' className="project_page">
      <div className='top'>
        <a href='/' className='back'>
          Back
        </a>
        <div className='title'>
          Strapi
        </div>
      </div>
      <div className='info'>
        <div className='left'>
          <div className='info_text'>
          <div>
            Strapi is a headless content manager system (CMS). This system is used for letting people who are a bit on the rougher side on coding still be able to create new pages/content for websites (Like marketing managers, etc.).
          </div>
          <div>
            I was the main and only developer working on this project. I created the content frames and some custom plugins in this system.
          </div>
          <div>
            
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

export default Strapi;
