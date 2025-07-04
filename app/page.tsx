"use client";
import React, { useRef, useEffect, useState } from "react";
import Header from "@/components/Header";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Image from "next/image";
import Contact from "@/app/contact/page";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

// JSX Element	Required Ref Type
// <div>	      HTMLDivElement
// <section>	  HTMLElement


  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "AMAR SANKAR MAITRA.";
    let interval: NodeJS.Timeout | null = null;

    const currentHomeRef = homeRef.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          let index = 0;
          setTypedText("");

          if (interval) clearInterval(interval);

          interval = setInterval(() => {
            if (index < text.length) {
              setTypedText(text.substring(0, index + 1));
              index++;
            } else {
              if (interval) clearInterval(interval);
            }
          }, 100);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (currentHomeRef) {
      observer.observe(currentHomeRef);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (currentHomeRef) observer.unobserve(currentHomeRef);
    };
  }, []);
  


  return (
    <>
      <style jsx>{`
        @keyframes levitate {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
      <Header
        scrollToAbout={aboutRef}
        scrollToProjects={projectsRef}
        scrollToHome={homeRef}
        scrollToContact={contactRef}
      />

      {/* The div which has the image and the text element. */}
      <div
        ref={homeRef}
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
              whiteSpace: "nowrap",
              borderRight: "2px solid #ffffff",
              overflow: "hidden",
              display: "inline-block",
              animation: "blink 1s step-end infinite",
              color: "#ffffff",
            }}
          >
            <>
              I am{" "}
              <span
                style={{
                  color: "#FFD700",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {typedText}
              </span>
            </>
          </p>
        </div>

        {/* Image */}
        <div style={{ flex: "1 1 50%", textAlign: "center" }}>
          <Image
            alt="coding avatar"
            width={700}
            height={700}
            src="/about.png"
            style={{
              maxWidth: "100%",
              height: "auto",
              animation: "levitate 3s ease-in-out infinite",
              filter: "drop-shadow(0 0 20px #8000ff)",
            }}
          />
        </div>
      </div>

      {/* Blinking cursor animation */}
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

      <section
        ref={projectsRef}
        style={{ height: "100vh", paddingTop: "40px" }}
      >
        <Projects />
      </section>

      <section ref={aboutRef} style={{ height: "100vh" }}>
        <About />
      </section>
      <section ref={contactRef} style={{ height: "100vh" }}>
        <Contact />
      </section>
    </>
  );
}
