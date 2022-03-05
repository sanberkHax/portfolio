import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.1, duration: 1 }}
      viewport={{ once: true }}
      id="projects"
      className="projects"
    >
      <h1 className="projects__title">Projects</h1>
      <div className="stack-organizer">
        <div className="stack-organizer-ctn">
          <div className="stack-organizer__img-ctn" href="/stack-organizer">
            <Image
              className="stack-organizer__img"
              src="/Stack-Organizer.png"
              alt="stack organizer screenshot"
              layout="fill"
            />
          </div>
          <div className="stack-organizer__details">
            <div className="card stack-organizer__card">
              <h2 className="stack-organizer__title">Stack Organizer</h2>
            </div>
            <div className="card stack-organizer__card">
              <p className="stack-organizer__description">
                A helpful web application that lets developers search through
                Stack Overflow and save their desired questions or answers
                inside dedicated projects and folders.
              </p>
            </div>
          </div>
        </div>
        <Link href="/stack-organizer">
          <a className="btn">Project Details</a>
        </Link>
      </div>
    </motion.section>
  );
};

export default Projects;
