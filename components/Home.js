import Arrows from './Arrows';
import Name from './Name';

const Home = () => {
  return (
    <section id="home" className="home">
      <Name />
      <Arrows href="#about" />
      <div className="skew-1"></div>
      <div className="skew-2"></div>
    </section>
  );
};

export default Home;
