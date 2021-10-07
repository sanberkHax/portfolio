import Button from './Button';
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
          <input className="name-input" type="text" name="name" />
          <label htmlFor="email">E-Mail</label>
          <input className="email-input" name="email" type="text" />
          <label htmlFor="message">Message</label>
          <textarea className="msg-input" name="message" />
          <Button class="send-btn" text="Send"></Button>
        </form>
      </div>
      <div className="home-arrow-ctn">
        <a href="#home">
          <i className="arrow"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
