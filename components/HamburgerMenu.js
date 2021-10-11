import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleHandler = (toggled) => {
    if (toggled) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  const clickHandler = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  return (
    <nav className="hamburger-menu">
      <Hamburger
        onToggle={toggleHandler}
        toggle={setMenuOpen}
        toggled={menuOpen}
        size={36}
        color={menuOpen ? 'black' : '#79FFFF'}
        easing="ease-out"
      />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="menu"
            exit={{ opacity: 0, x: 400 }}
          >
            <a onClick={clickHandler} href="#home">
              Home
            </a>
            <a onClick={clickHandler} href="#about">
              About
            </a>
            <a onClick={clickHandler} href="#projects">
              Projects
            </a>
            <a onClick={clickHandler} href="#contact">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default HamburgerMenu;
