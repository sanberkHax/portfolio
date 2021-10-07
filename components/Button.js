const Button = (props) => {
  return (
    <a href={props.href} className={props.class}>
      {props.text}
    </a>
  );
};

export default Button;
