import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">

          {/* Main Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:bridgepartners497@gmail.com" data-cursor="disable">
                bridgepartners497@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+923423730996" data-cursor="disable">
                +92 342 3730996
              </a>
            </p>
          </div>

          {/* Centered Credits */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>TAMSAL TECHNOLOGIES</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;