import Button from '../components/Button';

const contactBtnVariants = {
  visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
const Name = () => {
  return (
    <div
      className="name-ctn"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 data-aos="fade-right" data-aos-delay="200" className="name-text-1">
        {`Hi, I'm`}
      </h2>
      <h1 data-aos="fade-right" data-aos-delay="200" className="name-text-2">
        Sanberk Türker
      </h1>
      <h2 data-aos="fade-right" data-aos-delay="600" className="name-text-3">
        Front End Developer
      </h2>
      <Button
        href="#contact"
        variants={contactBtnVariants}
        delay="1000"
        type="button"
        class="contact-btn"
        text="Contact Me"
      ></Button>
    </div>
  );
};

export default Name;
