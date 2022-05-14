import "./style.css";
export const InputElement = ({
  type,
  className,
  value,
  name,
  placeholder,
  onChange,
  label,
  classNameLabel,
  ...props
}) => {
  return (
    <>
      <div>
        <label className={classNameLabel}>{label}</label>
        <input
          type={type}
          className={className}
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
