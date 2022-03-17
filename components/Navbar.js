import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 600 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
      className="navbar"
    >
      <ul className="nav">
        <li>
          <a href="#home" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="link">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
