export const Button = ({ text, onClick, className, ...props }) => {
  return (
    <div>
      <button className={className} onClick={onClick} {...props}>
        {text}
      </button>
    </div>
  );
};
