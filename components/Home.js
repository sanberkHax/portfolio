import Arrows from './Arrows';
import Name from './Name';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <section id="home" className="home">
      <Name />
      <Arrows href="#about" />
      <motion.div
        initial={{ x: -3500 }}
        animate={{ x: 50, y: -15, rotate: '-3deg', skewX: '-70deg' }}
        transition={{ delay: 0.2, duration: 1 }}
        className="skew-1"
      ></motion.div>
      <motion.div
        initial={{ x: -2500 }}
        animate={{ x: 300 }}
        transition={{ delay: 1, duration: 1 }}
        className="skew-2"
      ></motion.div>
    </section>
  );
};

export default Home;
