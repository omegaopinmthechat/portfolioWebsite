"use client";
import React, { useRef, useEffect, useState } from "react";
import Header from "@/components/Header";
import About from "@/app/about/page";
import Resume from "@/app/resume/page";
import Projects from "@/app/projects/page";
import Image from "next/image";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const resumeRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "I am AMAR SANKAR MAITRA";
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header
        scrollToAbout={aboutRef}
        scrollToResume={resumeRef}
        scrollToProjects={projectsRef}
      />

      {/* Hero Section */}
      <div
        style={{
          paddingTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          minHeight: "90vh",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 50%" }}>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#ffffff",
            }}
          >
            Hi There!
          </p>
          <p
            style={{
              fontSize: "3.2rem",
              fontWeight: "bold",
              color: "#ffffff",
              whiteSpace: "nowrap",
              borderRight: "2px solid #ffffff",
              overflow: "hidden",
              display: "inline-block",
              animation: "blink 1s step-end infinite",
            }}
          >
            {typedText.startsWith("I am ") ? (
              <>
                I am{" "}
                <span style={{ color: "#FFD700" }}>
                  {typedText.substring(5)}
                </span>
              </>
            ) : (
              typedText
            )}
          </p>
        </div>

        {/* Image */}
        <div style={{ flex: "1 1 50%", textAlign: "center" }}>
          <Image
            alt="coding image"
            width={700}
            height={700}
            src="/about.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Blinking Cursor Animation */}
      <style>
        {`
          @keyframes blink {
            from, to {
              border-color: transparent;
            }
            50% {
              border-color: #ffffff;
            }
          }
        `}
      </style>

      {/* Sections */}
      <section ref={projectsRef} style={{ height: "100vh" }}>
        <Projects />
      </section>

      <section ref={aboutRef} style={{ height: "100vh" }}>
        <About />
      </section>

      <section ref={resumeRef} style={{ height: "100vh" }}>
        <Resume />
      </section>
    </>
  );
}
