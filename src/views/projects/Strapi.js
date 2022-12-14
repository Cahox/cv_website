import digitalocean from './../../images/technologies/digitalocean.png';
import strapitransparant from './../../images/technologies/strapitransparant.png';

import plugin from './../../images/strapi/strapi-plugin.png'
import manager from './../../images/strapi/strapi-manager.png'
import media from './../../images/strapi/strapi-media.png'

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
              I was the main and only developer working on this project. My main task was to setup the cms and make other employees be able to use it efficiently. I created the content frames and some custom plugins in this system.
            </div>
            <div>
            This project mainly the opensource Strapi headless CMS. Digital Ocean was used for data storage and hosting.
            </div>
          </div>

          <div className='technology_images'>
            <img src={digitalocean} className="technology_image" alt="Digital Ocean" />
            <img src={strapitransparant} className="technology_image" alt="Strapi" />
          </div>
        </div>

        <div className='right'>
          <div className='image_container'>
            <img src={plugin} className="info_image" alt="Plugin" />
            <img src={manager} className="info_image" alt="Manager" />
            <img src={media} className="info_image" alt="Media" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strapi;
