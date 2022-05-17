import "./style.css";

export const Button = ({ text, onClick, ...props }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick} {...props}>
        {text}
      </button>
    </div>
  );
};
