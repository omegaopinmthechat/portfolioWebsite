"use client";
import React from "react";
import Link from "next/link";

interface HeaderProps {
  scrollToAbout: React.RefObject<HTMLElement | null>; //So that it also accepts null
  scrollToResume: React.RefObject<HTMLElement | null>; //So that it also accepts null
  scrollToProjects: React.RefObject<HTMLElement | null>;
}

function Header({ scrollToAbout, scrollToResume, scrollToProjects }: HeaderProps) {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToAbout?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToResume?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) =>{
    e.preventDefault();
    scrollToProjects?.current?.scrollIntoView({ behavior: "smooth" });
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
          style={{ color: "#9b00ff", fontWeight: "bold" }}
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
              <Link className="nav-link active text-white" href="/">
                <i className="bi bi-house text-white pe-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleScrollToProjects} className="nav-link text-white" href="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleScrollToAbout}
                className="nav-link text-white"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleScrollToResume}
                className="nav-link text-white"
                href="/resume"
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
