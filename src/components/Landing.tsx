import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              AZAN
              <br />
              <span>WARSI</span>
            </h1>
          </div>
          <div className="landing-info">
            {/* "A Creative" removed as requested */}
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Professional Web Designer</div>
              <div className="landing-h2-2">Shopify Expert</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Shopify Expert</div>
              <div className="landing-h2-info-1">Professional Web Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;