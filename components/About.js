import Card from './Card';
import Button from './Button';
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

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          onViewportEnter={() => console.log('girdi')}
          transition={{ type: 'spring', stiffness: 30, duration: 1 }}
          viewport={{ once: true }}
          className="about-me"
        >
          <motion.h1
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="about-me__title"
          >
            About Me
          </motion.h1>
          <div className="card about-me__card">
            <p>
              {`I'm a Front End Developer with a strong passion for learning and challenging myself to be the best version of myself. The more problems i face the more ambitious i get to solve them.`}
            </p>
            <p>{`Chronic , quick thinker, problem solver, organized person, intuitive user experience lover.`}</p>
            <p>{`I'm looking forward to building ambitious and valuable projects that are creative and accesible to anyone.`}</p>
            <p>{``}</p>
          </div>
          <Button className="btn" text="Resume"></Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 30, duration: 1 }}
          viewport={{ once: true }}
          className="skills"
        >
          <motion.h1
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="skills__title"
          >{`I have worked with`}</motion.h1>
          <div className="skills__details">
            <div className="development">
              <h2 className="development__title">Development</h2>
              <div className="development__icons">
                {htmlSvg}
                {cssSvg}
                {jsSvg}
                {reactSvg}
                {reduxSvg}
                {sassSvg}
                {jestSvg}
              </div>
            </div>
            <div className="design-and-tools">
              <div className="design">
                <h2 className="design__title">Design</h2>
                <div className="design__icons">
                  {figmaSvg}
                  {psSvg}
                </div>
              </div>
              <div className="tools">
                <h2 className="tools__title">Tools</h2>
                <div className="tools__icons">
                  {gitSvg}
                  {webpackSvg}
                  {npmSvg}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
