import Introduction from './Introduction';
import Name from './Name';

const Home = () => {
  return (
    <section id="home" className="home">
      <Name></Name>
      {/* <Introduction></Introduction> */}
      <div className="arrow-ctn">
        <a href="#about">
          <i className="arrow"></i>
        </a>
      </div>
      <div className="skew-1"></div>
      <div className="skew-2"></div>
    </section>
  );
};

export default Home;
