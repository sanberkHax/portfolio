import FadeInContainer from './FadeInContainer';

const Button = (props) => {
  return (
    <FadeInContainer className={props.class} variants={props.variants}>
      <a
        // data-aos="zoom-in"
        // data-aos-anchor-placement="top-bottom"
        // data-aos-delay={props.delay}
        href={props.href}
      >
        {props.text}
      </a>
    </FadeInContainer>
  );
};

export default Button;
