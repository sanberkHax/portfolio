const Button = (props) => {
  return (
    <a
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={props.delay}
      href={props.href}
      className={props.class}
    >
      {props.text}
    </a>
  );
};

export default Button;
