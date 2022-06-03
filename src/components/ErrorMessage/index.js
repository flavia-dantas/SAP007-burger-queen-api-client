import "./style.css";

export const ErrorMessage = ({ message}) => {
  return (
    <>
      <div className="error-message-container">
        <p className="message">{message}</p>
      </div>
    </>
  );
};
