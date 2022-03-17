import Button from './Button';
import { blueArrowSvg, whiteArrowSvg } from '../assets/svgPaths';
import { motion } from 'framer-motion';

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="contact">
      <motion.h1
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 30, duration: 0.6 }}
        className="contact__title"
      >
        Contact Me
      </motion.h1>
      <div className="contact__content">
        <motion.form
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 30, duration: 0.6 }}
          viewport={{ once: true }}
          name="contact"
          className="contact-form"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className="contact-form__label">
            Name
          </label>
          <motion.input
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="contact-form__input"
            type="text"
            name="name"
          />
          <label htmlFor="email" className="contact-form__label">
            E-Mail
          </label>
          <motion.input
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="contact-form__input"
            name="email"
            type="text"
          />
          <label htmlFor="message" className="contact-form__label">
            Message
          </label>
          <motion.textarea
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              duration: 0.6,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="contact-form__textarea"
            name="message"
          />
          <Button
            onClick={submitHandler}
            type="submit"
            className="btn"
            text="Send"
          />
        </motion.form>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            bounce: 0.2,
            delay: 1,
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="contact-arrows-ctn"
        >
          <a href="#home">{whiteArrowSvg}</a>
          <a href="#home">{blueArrowSvg}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
