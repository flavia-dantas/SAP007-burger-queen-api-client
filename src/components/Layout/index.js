import { Footer } from "../Footer";
import "./style.css";

export const LayoutForm = ({children}) => {
  return (
    <div className="container">
      <section className="container-layout container-flexbox">
        <div className="container-content container-flexbox">
          {children}
        </div>
        <Footer />
      </section>
    </div>
   );
};
