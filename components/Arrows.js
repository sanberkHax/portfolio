import { blueArrowSvg, whiteArrowSvg } from '../assets/svgPaths';
import { motion } from 'framer-motion';

const Arrows = (props) => {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      className={props.class}
    >
      <a href={props.href}>{whiteArrowSvg}</a>
      <a href={props.href}>{blueArrowSvg}</a>
    </motion.div>
  );
};

export default Arrows;
