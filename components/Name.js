import Button from '../components/Button';

const Name = () => {
  return (
    <div className="name-ctn">
      <h2 className="name-text-1">Hi, im</h2>
      <h1 className="name-text-2">Sanberk Türker</h1>
      <h2 className="name-text-3">Front End Developer</h2>
      <Button
        href="#contact"
        type="button"
        class="contact-btn"
        text="Contact Me"
      ></Button>
    </div>
  );
};

export default Name;
