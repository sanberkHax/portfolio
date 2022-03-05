import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: 600 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
    >
      <HamburgerMenu></HamburgerMenu>
      <Navbar></Navbar>
    </motion.header>
  );
};

export default Header;
