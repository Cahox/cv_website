import vuejs from './../../images/technologies/vuejs.png';
import firebase from './../../images/technologies/firebase.png';

function PocketDuck() {
  return (
    <div id='Strapi' className="project_page">
      <div className='top'>
        <a href='/' className='back'>
          Back
        </a>
        <div className='title'>
          PocketDuck
        </div>
      </div>
      <div className='info'>
        <div className='left'>
          <div className='info_text'>
            <div>
              PocketDuck is a Progressive Web Apps (PWA). PWA's are websites that can look and act like mobile apps. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store
            </div>
            <div>
              This project has been made together with another student as a school project (Specialization - Smart mobile). The main goal was to dip into creating and gaining knowledge on PWA's.
            </div>
            <div>
              This PWA was created using the javscript framework Vue.js and Firebase for the data storage. 
            </div>
          </div>
          <div className='technology_images'>
            <img src={vuejs} className="technology_image" alt="Vuejs" />
            <img src={firebase} className="technology_image" alt="Firebase" />
          </div>
        </div>

        <div className='right'>
          <div className='double_image_container'>
            <img src="https://i.gyazo.com/44ff54dffbd8e33bdfa010b8433b69bc.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/b172cc37018e82d577c5ddb8e045da48.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/24a44216b78bf53a2e30a738295d0fb9.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/84b394c92dd0c902c8ba11ac38c51132.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/8dac5c0a7099c86f2053aab64abac855.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/79dcb2d46d39df3de45fb36503c706af.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/0039492f5c8ab26682a40c868afa6165.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/06b6421d19c5e1e1d964faa1f255ade5.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/f2859e39d1c02bc3f06ff56549b89f84.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/622c1f7b9850874edbe8e5ba3ef711dd.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/1db7a8f30359024301882e8194b86df6.gif" alt="Login" className="info_image" />
            <img src="https://i.gyazo.com/f76711b15f8b1aeb496225a57b647897.gif" alt="Login" className="info_image" />
            <img src="https://i.imgur.com/bdePXLA.gif" alt="Login" className="info_image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PocketDuck;
