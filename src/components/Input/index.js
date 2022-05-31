import "./style.css";
export const InputElement = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  label,
  className = "input-container",
  classNameLabel = "input-label",
  classNameInput = "input",
  ...props
}) => {
  return (
    <>
      <div className={className}>
        <label className={classNameLabel}>{label}</label>
        <input
          type={type}
          className={classNameInput}
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
