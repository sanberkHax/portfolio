import Card from './Card';
import Button from './Button';
import Arrows from './Arrows';
import { motion } from 'framer-motion';

import {
  htmlSvg,
  cssSvg,
  jsSvg,
  reactSvg,
  reduxSvg,
  sassSvg,
  jestSvg,
  figmaSvg,
  psSvg,
  gitSvg,
} from '../assets/svgPaths';
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          className="about-me-ctn"
        >
          <h1>About Me</h1>
          <Card>
            <p>
              Im a self taught Front End Developer who is passionate about
              creating good user experience and designs. After focusing on
              animation and graphic design for some time and feeling something
              was missing, i have merged my creative and logical side together
              and dedicated myself to Front End Development.
            </p>
            <p>
              When im not coding im either playing video games or making music.
            </p>
          </Card>
          <Button class="resume-btn" text="Resume"></Button>
        </div>

        <div data-aos="fade-left" className="skills-ctn">
          <h1 className="skills-title">Skills</h1>
          <div className="skills-details-ctn">
            <div className="development-ctn">
              <h2 className="development-title">Development</h2>
              <div className="development-icons-ctn">
                {htmlSvg}
                {cssSvg}
                {jsSvg}
                {reactSvg}
                {reduxSvg}
                {sassSvg}
                {jestSvg}
              </div>
            </div>
            <div className="design-tools-ctn">
              <div className="design-ctn">
                <h2 className="design-title">Design</h2>
                <div className="design-icons-ctn">
                  {figmaSvg}
                  {psSvg}
                </div>
              </div>
              <div className="tools-ctn">
                <h2 className="tools-title">Tools</h2>
                <div className="tools-icons-ctn">{gitSvg}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        data-aos="slide-right"
        data-aos-offset="1000"
        // initial={{ x: -2500 }}
        // animate={{ x: 230 }}
        // transition={{ delay: 1, duration: 1 }}
        className="skew-3"
      ></motion.div>
      {/* <Arrows href="#projects"></Arrows> */}
    </section>
  );
};

export default About;
