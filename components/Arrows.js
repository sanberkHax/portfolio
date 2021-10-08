import { blueArrowSvg, whiteArrowSvg } from '../assets/svgPaths';

const Arrows = (props) => {
  return (
    <div className="arrow-ctn">
      <a href={props.href}>{whiteArrowSvg}</a>
      <a href={props.href}>{blueArrowSvg}</a>
    </div>
  );
};

export default Arrows;
