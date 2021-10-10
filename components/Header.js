import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import Navbar from './Navbar';
const Header = () => {
  return (
    <header>
      <HamburgerMenu></HamburgerMenu>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
