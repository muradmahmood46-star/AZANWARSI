import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          {/* Vertical Timeline */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 1. Junior Web Designer */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Web Designer</h4>
                <h5>Tamsal Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started as a UI/UX designer, focusing on creating responsive
              layouts and professional designs for local business websites.
            </p>
          </div>

          {/* 2. Web Specialist */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Specialist</h4>
                <h5>Freelance Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Expanded into e-commerce, delivering custom solutions and
              specializing in Shopify and WordPress store development.
            </p>
          </div>

          {/* 3. Expert Developer */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Expert Developer</h4>
                <h5>Full-Stack Freelancing</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Providing high-end web solutions for international clients, with
              over 20+ successful projects delivered globally.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;