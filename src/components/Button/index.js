import "./style.css";

export const Button = ({
  text,
  onClick,
  classNameContainer = "button-container",
  className = "button",
  ...props
}) => {
  return (
    <div className={classNameContainer}>
      <button className={className} onClick={onClick} {...props}>
        {text}
      </button>
    </div>
  );
};
