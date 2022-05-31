import "./style.css";

export const ButtonCountItems = ({
  decrease,
  increase,
  amount = 0,
  classNameButton = "count-button",
  ...props
}) => {
  return (
    <div className="count-container">
      <button className={classNameButton} onClick={decrease} {...props}>
        -
      </button>
      <p className="count-amount">{amount}</p>
      <button className={classNameButton} onClick={increase} {...props}>
        +
      </button>
    </div>
  );
};
