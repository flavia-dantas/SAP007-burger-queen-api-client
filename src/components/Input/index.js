import "./style.css";
export const InputElement = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  label,
  ...props
}) => {
  return (
    <>
      <div className="input-container">
        <label className="input-label">{label}</label>
        <input
          type={type}
          className="input"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
};
