import { blueArrowSvg, whiteArrowSvg } from '../assets/svgPaths';
import { motion } from 'framer-motion';

const Arrows = (props) => {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.2, delay: 1.7, duration: 0.5 }}
      className={props.class}
    >
      <a href={props.href}>{whiteArrowSvg}</a>
      <a href={props.href}>{blueArrowSvg}</a>
    </motion.div>
  );
};

export default Arrows;
