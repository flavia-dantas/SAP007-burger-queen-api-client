import "./style.css";

export const LayoutForm = ({children}) => {
  return (
    <div className="container">
      <section className="container-form container-flexbox">
        <div className="container-content container-flexbox">
          {children}
        </div>
      </section>
    </div>
   );
};
