import React from "react";

const page = () => {
  const sectionStyle = {
    background: "linear-gradient(to bottom, #1a1a2e, #0f0f1a)",
    padding: "clamp(40px, 6vw, 60px) clamp(20px, 4vw, 30px)",
    color: "white",
    textAlign: "center" as const,
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "clamp(2rem, 4vw, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "clamp(25px, 3vw, 30px)",
    color: "#FFD700",
    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
  };

  const paragraphStyle = {
    fontSize: "clamp(1rem, 2vw, 1.125rem)",
    lineHeight: "1.7",
    marginBottom: "clamp(20px, 2.5vw, 24px)",
    maxWidth: "90%",
    marginInline: "auto",
    padding: "0 15px",
  };

  const techBoxStyle = {
    background: "#222",
    padding: "clamp(20px, 3vw, 24px)",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    maxWidth: "90%",
    margin: "clamp(30px, 4vw, 40px) auto",
    textAlign: "left" as const,
  };

  const techTitleStyle = {
    fontSize: "clamp(1.4rem, 2.8vw, 1.75rem)",
    fontWeight: 600,
    color: "#FFD700",
    marginBottom: "clamp(15px, 2vw, 16px)",
  };

  const listStyle = {
    fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
    lineHeight: "1.7",
    paddingLeft: "clamp(18px, 2.5vw, 20px)",
    margin: 0,
  };


  
  return (
    <>
      <section id="about" style={sectionStyle}>
        <h2 style={headingStyle}>💡 About Me</h2>

        <p style={paragraphStyle}>
          Hey there! 👋 I am{" "}
          <strong style={{ color: "#c084fc" }}>Amar Sankar Maitra</strong>, a
          passionate and curious{" "}
          <strong>Computer Science undergraduate at VIT-AP</strong> (2024–2028). I specialize in{" "}
          <span style={{ color: "#FFD700" }}>
            full-stack web and mobile development
          </span>{" "}
          using technologies like <strong>MERN stack</strong>,{" "}
          <strong>React Native</strong>, and <strong>Next.js</strong>.
        </p>

        <p style={paragraphStyle}>
          💻 From building a finance tracker app with Supabase to an offline AI
          assistant for VS Code with TypeScript and LLMs — I love turning ideas
          into fast, clean, user-friendly experiences.
        </p>

        <p style={paragraphStyle}>
          ⚙️ I am equally comfortable working on backend logic with Node.js &
          Express, designing UIs in React, or rapidly prototyping with Next.js.
        </p>

        <p style={paragraphStyle}>
          🚀 I learn best by building. Real-world projects and continuous
          experimentation are my go-to learning paths.
        </p>

        <p style={paragraphStyle}>
          When I’m not building, you’ll probably find me prototyping on Figma or
          exploring new tech.
        </p>

        <div style={techBoxStyle}>
          <h3 style={techTitleStyle}>🔧 Tech Stack</h3>
          <ul style={listStyle}>
            <li>
              <strong>Languages:</strong> JavaScript, TypeScript, Java, Python
            </li>
            <li>
              <strong>Frameworks & Tools:</strong> React, React Native, Next.js,
              Node.js, Express.js
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, Supabase, Firebase
            </li>
            <li>
              <strong>Concepts:</strong> DSA, OOP
            </li>
          </ul>
        </div>

        
      </section>
    </>
  );
};

export default page;
