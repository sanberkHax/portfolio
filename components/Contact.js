import Button from './Button';
import { whiteArrowSvg, blueArrowSvg } from '../assets/svgPaths';
import Arrows from './Arrows';
const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <form name="contact" className="form" data-netlify="true">
          <label htmlFor="name">Name</label>
          <input
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            className="name-input"
            type="text"
            name="name"
          />
          <label htmlFor="email">E-Mail</label>
          <input
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            className="email-input"
            name="email"
            type="text"
          />
          <label htmlFor="message">Message</label>
          <textarea
            delay="500"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            className="msg-input"
            name="message"
          />
          <Button class="send-btn" text="Send"></Button>
        </form>
      </div>
      <div className="home-arrow-ctn">
        <a href="#home">{whiteArrowSvg}</a>
        <a href="#home">{blueArrowSvg}</a>
      </div>
    </section>
  );
};

export default Contact;
