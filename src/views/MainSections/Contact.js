import { useEffect } from 'react';
import email from './../../images/email.png';
import linkedin from './../../images/linkedin.png';
import phone from './../../images/phone-call.png';
import emailjs from '@emailjs/browser';

function Contact() {
  let responseBlock
  useEffect(() => {
    responseBlock = document.getElementById('response_msg')
  });
  
  let mailerSend = async function (e) {
    e.preventDefault();
    let form = e.target
    if (form && form.name.value && form.email.value && form.message.value) {
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          e.target.reset()
          responseBlock.innerHTML = 'Email sent!'
        }, (error) => {
          console.log(error.text);
          responseBlock.innerHTML = 'An error has occured!'
        });
    } else {
      responseBlock.innerHTML = 'Please fully fill in the form!'
    }
  }


  return (
    <div id='contact' className="sub_section contact">
      <div className='title'>
        Contact
      </div>
      {/* bars */}
      <div className='contact_container'>
        <div className="contact_bars">
          <a href="mailto:Calvinhong123@gmail.com" className="contact_bar" >
            <img src={email} alt="Email" className="contact_bar_icon"></img>
            <div className="contact_bar_title">Calvinhong123@gmail.com</div>
          </a>
          <a href="https://www.linkedin.com/in/calvin-hong-82575020a" className="contact_bar">
            <img src={linkedin} alt="LinkedIn" className="contact_bar_icon"></img>
            <div className="contact_bar_title">LinkedIn Profile</div>
          </a>
          <a href="tel:+0683970572" className="contact_bar">
            <img src={phone} alt="Phone" className="contact_bar_icon"></img>
            <div className="contact_bar_title">+0683970572</div>
          </a>
        </div>
        {/* mailer */}
        <form id="mailer" className="mailer_form" onSubmit={mailerSend}>
          <div className='mailer_title'>Send me a message!</div>
          <div>
            <input id="name" name="name" className="text_box" placeholder="Your Name" type="text" required />
          </div>
          <div>
            <input id="email" name="email" className="text_box" placeholder="Your Email" type="email" required />
          </div>
          <div>
            <textarea id="message" name="message" className="text_area" type="text" cols="40" placeholder="Message" required />
          </div>

          <div className="mailer_bottom">
            <input id="send" className="send" type="submit" value="Send" />
            <div id="response_msg"></div>
          </div>
        </form>
      </div>
    </div >
  );
}

export default Contact;
