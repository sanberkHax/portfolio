import FadeInContainer from './FadeInContainer';

const Button = (props) => {
  return (
    <FadeInContainer className={props.class} variants={props.variants}>
      <button href={props.href}>{props.text}</button>
    </FadeInContainer>
  );
};

export default Button;
