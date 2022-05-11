export const Button = ({ children, onClick, className, ...props }) => {
  return (
    <div>
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};
