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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    handleScroll(); 

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
    <>
      <style jsx>{`
        .desktop-menu {
          display: flex;
          gap: 30px;
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
      
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "transparent",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Link
          href="/"
          style={{
            color: "#9b00ff",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            textDecoration: "none"
          }}
        >
          ASM.
        </Link>
        
        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link
            onClick={handleScrollToHome}
            href="/"
            style={{
              color: active === "home" ? "#FFD700" : "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              fontSize: "1rem"
            }}
          >
            <i className="bi bi-house pe-1"></i>Home
          </Link>
          <Link
            onClick={handleScrollToProjects}
            href="/projects"
            style={{
              color: active === "projects" ? "#FFD700" : "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              fontSize: "1rem"
            }}
          >
            Projects
          </Link>
          <Link
            onClick={handleScrollToAbout}
            href="/about"
            style={{
              color: active === "about" ? "#FFD700" : "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              fontSize: "1rem"
            }}
          >
            About
          </Link>
          <Link
            onClick={handleScrollToContact}
            href="/contact"
            style={{
              color: active === "contact" ? "#FFD700" : "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              fontSize: "1rem"
            }}
          >
            Contact me!
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "250px",
            height: "100vh",
            background: "linear-gradient(135deg, #1a1a2e, #16213e)",
            zIndex: 1001,
            padding: "80px 30px 30px",
            boxShadow: "-5px 0 15px rgba(0,0,0,0.3)",
            transform: "translateX(0)",
            transition: "transform 0.3s ease"
          }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}
          >
            ✕
          </button>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <Link
              onClick={(e) => { handleScrollToHome(e); setIsMenuOpen(false); }}
              href="/"
              style={{
                color: active === "home" ? "#FFD700" : "#ffffff",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <i className="bi bi-house pe-2"></i>Home
            </Link>
            <Link
              onClick={(e) => { handleScrollToProjects(e); setIsMenuOpen(false); }}
              href="/projects"
              style={{
                color: active === "projects" ? "#FFD700" : "#ffffff",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              Projects
            </Link>
            <Link
              onClick={(e) => { handleScrollToAbout(e); setIsMenuOpen(false); }}
              href="/about"
              style={{
                color: active === "about" ? "#FFD700" : "#ffffff",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              About
            </Link>
            <Link
              onClick={(e) => { handleScrollToContact(e); setIsMenuOpen(false); }}
              href="/contact"
              style={{
                color: active === "contact" ? "#FFD700" : "#ffffff",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              Contact me!
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Background Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000
          }}
        />
      )}
    </>
  );
}

export default Header;
