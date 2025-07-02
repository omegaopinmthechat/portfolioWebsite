"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Header2 = () => {
    
      const [active, setActive] = useState<string>("projects");
      useEffect (() => {
        setActive("projects")
      }, [])
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header2