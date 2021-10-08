import Button from '../components/Button';
import { motion } from 'framer-motion';
const Name = () => {
  return (
    <div
      className="name-ctn"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 data-aos="fade-right" data-aos-delay="200" className="name-text-1">
        Hi, im
      </h2>
      <h1 data-aos="fade-right" data-aos-delay="200" className="name-text-2">
        Sanberk Türker
      </h1>
      <h2 data-aos="fade-right" data-aos-delay="600" className="name-text-3">
        Front End Developer
      </h2>
      <Button
        delay="1000"
        href="#contact"
        type="button"
        class="contact-btn"
        text="Contact Me"
      ></Button>
    </div>
  );
};

export default Name;
