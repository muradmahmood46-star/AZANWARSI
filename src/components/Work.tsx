import { useRef } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  // Types defined for references to prevent TypeScript 'never' errors
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null!);

  // Azan's 10 Portfolio Projects
  const projects = [
    { name: "Premium Shopify Store", category: "E-commerce", tools: "Liquid, CSS, Shopify API" },
    { name: "Corporate Business Site", category: "WordPress", tools: "PHP, Elementor Pro, MySQL" },
    { name: "Creative UI Portfolio", category: "Web Design", tools: "React, Figma, GSAP" },
    { name: "Fashion Brand Outlet", category: "Shopify", tools: "Custom Theme, JavaScript" },
    { name: "Real Estate Portal", category: "WordPress", tools: "ACF, Custom Post Types, PHP" },
    { name: "Modern SaaS Landing", category: "Web Design", tools: "Tailwind CSS, React, Framer" },
    { name: "Gadget Accessories Shop", category: "Shopify", tools: "OS 2.0, Liquid, Marketing Apps" },
    { name: "Educational Platform", category: "WordPress", tools: "LMS, LearnDash, Stripe" },
    { name: "Health & Fitness App UI", category: "Design", tools: "Adobe XD, Prototype, UI/UX" },
    { name: "Logistics Dashboard", category: "Development", tools: "Angular, .NET Core, SQL" }
  ];

  useGSAP(() => {
    // TypeScript ko bol rahe hain "ignore karo"
    const flex = flexRef.current as any;
    const section = sectionRef.current as any;

    if (!flex || !section) return;

    const totalWidth = flex.scrollWidth;
    const amountToScroll = totalWidth - window.innerWidth;

    gsap.to(flex, {
      x: -amountToScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="work-section" style={{ background: "#000", overflow: "hidden" }}>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ color: "#fff", paddingLeft: "50px", fontSize: "60px", marginBottom: "40px", fontWeight: "700" }}>
          OUR <span>SERVICES</span>
        </h2>

        <div ref={flexRef} style={{ display: 'flex', gap: '80px', paddingLeft: '50px', paddingRight: '100px' }}>
          {projects.map((p, i) => (
            <div
              className="work-box"
              key={i}
              style={{
                minWidth: '400px',
                borderLeft: '3px solid #9580ff',
                paddingLeft: '25px',
                transition: '0.3s'
              }}
            >
              <h3 style={{ color: '#9580ff', fontSize: '18px', marginBottom: '10px' }}>0{i + 1}</h3>
              <h4 style={{ color: '#fff', fontSize: '28px', textTransform: 'uppercase' }}>{p.name}</h4>
              <p style={{ color: '#ccc', fontSize: '16px', marginTop: '5px' }}>{p.category}</p>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '15px', letterSpacing: '1px' }}>{p.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;