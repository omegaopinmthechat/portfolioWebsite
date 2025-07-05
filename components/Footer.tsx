import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0f0f1a",
        color: "white",
        padding: "60px 0 30px",
        fontFamily: "'Courier New', monospace",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        <div style={{ flex: "1", minWidth: "260px" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Amar Sankar Maitra
          </h2>
          <p style={{ color: "#ccc", margin: "15px 0", lineHeight: "1.6" }}>
            A passionate full-stack developer focused on creating elegant,
            efficient, and user-friendly web applications.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
            <a
              href="https://github.com/omegaopinmthechat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bi bi-github"
                style={{ fontSize: "1.4rem", color: "white" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/amar-sankar-maitra-739372207/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bi bi-linkedin"
                style={{ fontSize: "1.4rem", color: "white" }}
              ></i>
            </a>
          </div>
        </div>

        <div style={{ minWidth: "200px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>Contact</h3>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <i className="bi bi-envelope-fill"></i> work.amarsankarmaitra@gmail.com
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <i className="bi bi-telephone-fill"></i> +91 9836370881
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <i className="bi bi-geo-alt-fill"></i> India
          </p>
        </div>
      </div>

      <hr style={{ margin: "40px 0", borderColor: "#333" }} />

      
    </footer>
  );
};

export default Footer;
