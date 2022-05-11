import "./style.css";
export const InputElement = ({
  type,
  className,
  value,
  name,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      ></input>
    </>
  );
};
