import Button from './Button';
import { twitterSvg, githubSvg } from '../assets/svgPaths';
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <form className="form">
          <label htmlFor="name">Name</label>
          <input className="name-input" type="text" />
          <label htmlFor="e-mail">E-Mail</label>
          <input className="email-input" type="text" />
          <label htmlFor="message">Message</label>
          <textarea className="msg-input" />
          <Button className="send-btn" text="Send"></Button>
        </form>
      </div>
      <div className="arrow-ctn">
        <a href="#about">
          <i className="arrow"></i>
        </a>
      </div>
      <div className="skew-1"></div>
      <div className="skew-2"></div>
    </section>
  );
};

export default Contact;
