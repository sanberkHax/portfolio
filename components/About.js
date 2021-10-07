import Card from './Card';
import {
  htmlSvg,
  cssSvg,
  jsSvg,
  reactSvg,
  reduxSvg,
  sassSvg,
  jestSvg,
  figmaSvg,
  psSvg,
  gitSvg,
} from '../assets/svgPaths';
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-me-ctn">
          <h1>About</h1>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              incidunt voluptatibus praesentium, sed in nesciunt assumenda
              reprehenderit nihil eligendi animi accusantium enim expedita ipsum
              soluta laboriosam quaerat repellendus dignissimos distinctio ex
              id! Adipisci vero voluptatum temporibus aliquam, accusantium ad
              rerum dolorum placeat. Autem suscipit rerum optio odio repellat
              maxime! Eaque, excepturi similique. Voluptate dolorum possimus
              quod numquam repellat deleniti aliquam. Delectus obcaecati tempora
              provident voluptatum, modi facilis, eligendi mollitia in id et
              tempore alias ut odio veritatis numquam minus repudiandae veniam
              unde esse, distinctio fugit explicabo architecto est. Facere
              veritatis iure ratione. Blanditiis delectus iure ad repellat
              fugiat ipsum maxime!
            </p>
          </Card>
        </div>

        <div className="skills-ctn">
          <h1 className="skills-title">Skills</h1>
          <div className="skills-details-ctn">
            <div className="development-ctn">
              <h2 className="development-title">Development</h2>
              <div className="development-icons-ctn">
                {htmlSvg}
                {cssSvg}
                {jsSvg}
                {reactSvg}
                {reduxSvg}
                {sassSvg}
                {jestSvg}
              </div>
            </div>
            <div className="design-tools-ctn">
              <div className="design-ctn">
                <h2 className="design-title">Design</h2>
                <div className="design-icons-ctn">
                  {figmaSvg}
                  {psSvg}
                </div>
              </div>
              <div className="tools-ctn">
                <h2 className="tools-title">Tools</h2>
                <div className="tools-icons-ctn">{gitSvg}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-ctn">
        <a href="#projects">
          <i className="arrow"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
