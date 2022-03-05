const Navbar = () => {
  return (
    <nav className="navbar">
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
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
