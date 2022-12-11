import picture from './../../images/calvin.jpeg';

function ElevenTravel() {
  return (
    <div id='ElevenTravel' className="project_page">
      <div className='top'>
        <div className='back'>
          Back
        </div>
        <div className='title'>
          Eleven Travel
        </div>
      </div>
      <div className='info'>

        <div className='left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue in justo consequat pretium. Proin lobortis vestibulum nulla eget vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris id ipsum sollicitudin, ullamcorper ipsum vel, aliquam massa. Cras facilisis tellus lectus, ac fringilla enim bibendum at. Pellentesque tellus justo, rhoncus quis risus a, imperdiet luctus arcu. Pellentesque eu est suscipit, dignissim ipsum et, malesuada metus. Aliquam ut mi vel erat volutpat dictum. Aliquam luctus purus sit amet mollis bibendum.
        </div>

        <div className='right'>
          <div className='image_container'>
            <img src={picture} className="info_image" alt="project" />
            <img src={picture} className="info_image" alt="project" />
            <img src={picture} className="info_image" alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElevenTravel;
