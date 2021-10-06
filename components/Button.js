const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={props.class}>
      {props.text}
    </button>
  );
};

export default Button;
