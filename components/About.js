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
              {
                "Hi, I'm a Front End Developer who is motivated by the passion for learning new things and strive to outdo myself. The more problems I encounter, the more ambitious I get to solve them. That's why I like tough challenges I might fail in, as failure is the best way to learn and overcome something."
              }
            </p>
            <p>
              {
                'When I was first introduced to Front End Development, I immediately knew this was the path I wanted to dedicate my time and effort into, as this was the perfect combination of my logical and creative sides. And combination of both is my shortcut to happiness.'
              }
            </p>
            <p>
              {
                "I'm interested in working on creative and ambitious projects that are accessible to anyone."
              }
            </p>
          </div>
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
