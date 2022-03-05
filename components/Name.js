import Button from '../components/Button';
import { motion } from 'framer-motion';

const Name = () => {
  return (
    <motion.div className="name">
      <motion.h2
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        className="name__primary-text"
      >
        {`Hi, I'm`}
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, x: -900 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6, delay: 0.5 }}
        className="name__secondary-text"
      >
        Sanberk Türker
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: -1200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6, delay: 1 }}
        className="name__tertiary-text"
      >
        Front End Developer
      </motion.h2>
      <Button href="#contact" className=" btn name__btn" text="Contact Me" />
    </motion.div>
  );
};

export default Name;
