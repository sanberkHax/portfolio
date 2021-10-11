import Card from './Card';
import Button from './Button';
import FadeInContainer from './FadeInContainer';
import { motion } from 'framer-motion';

import {
  npmSvg,
  webpackSvg,
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
const aboutMeVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -50 },
};
const skillsVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 50 },
};
const resumeBtnVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div
          data-aos="fade-right"
          variants={aboutMeVariants}
          className="about-me-ctn"
        >
          <h1>About Me</h1>
          <Card>
            <p>
              {`I'm a Front End Developer with a strong passion for learning new things and challenging myself to be the best version of myself. The more problems i face the more ambitious i get to solve them, not gonna bend the knee to no bug!`}
            </p>
            <p>{`Chronic perfectionist with a high attention to every detail, quick thinker, problem solver, organised person, intuitive user experience lover.`}</p>
            <p>{`I'm looking forward to building ambitious and valuable projects that are creative and accesible to anyone.`}</p>
            <p>{`Besides coding, i love making music and drawing. Send a message to say hi!`}</p>
          </Card>
          <Button
            variants={resumeBtnVariants}
            class="resume-btn"
            text="Resume"
          ></Button>
        </div>

        <div
          data-aos="fade-left"
          variants={skillsVariants}
          className="skills-ctn"
        >
          <h1 className="skills-title">{`I have worked with`}</h1>
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
                <div className="tools-icons-ctn">
                  {gitSvg}
                  {webpackSvg}
                  {npmSvg}
                </div>
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
