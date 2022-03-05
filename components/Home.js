import Arrows from './Arrows';
import Name from './Name';

const Home = () => {
  return (
    <section id="home" className="home">
      <Name />
      <Arrows class="home-arrows" href="#about" />
    </section>
  );
};

export default Home;
