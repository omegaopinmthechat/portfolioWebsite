"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  scrollToAbout: React.RefObject<HTMLElement | null>;
  scrollToProjects: React.RefObject<HTMLElement | null>;
  scrollToHome: React.RefObject<HTMLElement | null>;
  scrollToContact: React.RefObject<HTMLElement | null>;
}

function Header({
  scrollToAbout,
  scrollToProjects,
  scrollToHome,
  scrollToContact,
}: HeaderProps) {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: scrollToHome, name: "home" },
        { ref: scrollToAbout, name: "about" },
        { ref: scrollToProjects, name: "projects" },
        { ref: scrollToContact, name: "contact" },
      ];

      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.ref?.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionHeight = section.ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.name;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollToHome, scrollToAbout, scrollToProjects, scrollToContact]);

  const handleScrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToHome?.current?.scrollIntoView({ behavior: "smooth" });
    setActive("home");
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToProjects?.current?.scrollIntoView({ behavior: "smooth" });
    setActive("projects");
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToAbout?.current?.scrollIntoView({ behavior: "smooth" });
    setActive("about");
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    scrollToContact?.current?.scrollIntoView({ behavior: "smooth" });
    setActive("contact");
  }

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ background: "transparent" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          href="/"
          style={{
            color: "#9b00ff",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          ASM.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                onClick={handleScrollToHome}
                className="nav-link"
                href="/"
                style={{
                  color: active === "home" ? "#FFD700" : "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <i className="bi bi-house pe-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleScrollToProjects}
                className="nav-link"
                href="/projects"
                style={{
                  color: active === "projects" ? "#FFD700" : "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleScrollToAbout}
                className="nav-link"
                href="/about"
                style={{
                  color: active === "about" ? "#FFD700" : "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleScrollToContact}
                className="nav-link"
                href="/contact"
                style={{
                  color: active === "contact" ? "#FFD700" : "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Contact me!
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
