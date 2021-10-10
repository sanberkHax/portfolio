import { illustrationSvg, illustration2 } from '../assets/svgPaths';
import Arrows from './Arrows';
import Name from './Name';
import Image from 'next/image';
const Home = () => {
  return (
    <section id="home" className="home">
      <Name />
      <Arrows class="home-arrows-ctn" href="#about" />
      {/* <motion.div
        initial={{ x: -3500 }}
        animate={{ x: 300, y: -15, rotate: '-3deg', skewX: '-70deg' }}
        transition={{ delay: 0.2, duration: 1 }}
        className="skew-1"
      ></motion.div>
      <motion.div
        initial={{ x: -2500 }}
        animate={{ x: 300 }}
        transition={{ delay: 1, duration: 1 }}
        className="skew-2"
      ></motion.div> */}
    </section>
  );
};

export default Home;
