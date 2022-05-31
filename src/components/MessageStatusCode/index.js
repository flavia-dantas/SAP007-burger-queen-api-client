import "./style.css";

export const MessageStatusCode = ({ message }) => {
  return (
    <>
      <div className="error-message-container">
        <p className="message">{message}</p>
      </div>
    </>
  );
};
