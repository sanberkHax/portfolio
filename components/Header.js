import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav">
          <a href="#home" className="link">
            Home
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="#projects" className="link">
            Projects
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
