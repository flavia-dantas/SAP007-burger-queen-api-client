import "./style.css";

export const ButtonCountItems = ({key2, decrease, increase, amount=0, ...props}) => {
  return (
    <div className="count-container" key={key2}>
      <button className="count-button" onClick={decrease} {...props}>-</button>
      <p className="count-amount">{amount}</p>
      <button className="count-button" onClick={increase} {...props}>+</button>
    </div>
  );
};
