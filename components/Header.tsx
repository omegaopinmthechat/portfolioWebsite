"use client";
import React, { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  scrollToAbout: React.RefObject<HTMLElement | null>;
  scrollToResume: React.RefObject<HTMLElement | null>;
  scrollToProjects: React.RefObject<HTMLElement | null>;
  scrollToHome: React.RefObject<HTMLElement | null>;
}

function Header({
  scrollToAbout,
  scrollToResume,
  scrollToProjects,
  scrollToHome,
}: HeaderProps) {
  const [active, setActive] = useState<string>("home");

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

  const handleScrollToResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToResume?.current?.scrollIntoView({ behavior: "smooth" });
    setActive("resume");
  };

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
                onClick={handleScrollToResume}
                className="nav-link"
                href="/resume"
                style={{
                  color: active === "resume" ? "#FFD700" : "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
