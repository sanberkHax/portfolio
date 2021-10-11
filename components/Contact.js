import Button from './Button';
import Arrows from './Arrows';
const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="contact">
      <h1 data-aos-once="true" data-aos="fade-right">
        Contact Me
      </h1>
      <div
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-anchor-position="top-bottom"
        className="contact-content"
      >
        <form name="contact" className="form" data-netlify="true">
          <label htmlFor="name">Name</label>
          <input
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            className="name-input"
            type="text"
            name="name"
          />
          <label htmlFor="email">E-Mail</label>
          <input
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            className="email-input"
            name="email"
            type="text"
          />
          <label htmlFor="message">Message</label>
          <textarea
            data-aos-once="true"
            delay="500"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            className="msg-input"
            name="message"
          />
          <Button class="send-btn" text="Send"></Button>
        </form>
        <Arrows class="contact-arrows-ctn" href="#home"></Arrows>
        {/* <div className="contact-arrow-ctn">
          <a href="#home">{whiteArrowSvg}</a>
          <a href="#home">{blueArrowSvg}</a>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
