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

  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => {
        setIsLoading(false); 
      }, 1000); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);
  

  useEffect(() => {
    if (isLoading) return;

    const text = "AMAR SANKAR MAITRA.";
    let interval: NodeJS.Timeout | null = null;
    const currentHomeRef = homeRef.current;

    if (!currentHomeRef) return;

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
      { threshold: 0.6 }
    );

    observer.observe(currentHomeRef);

    return () => {
      if (interval) clearInterval(interval);
      observer.unobserve(currentHomeRef);
    };
  }, [isLoading]);
  
  
  

  return (
    <>
      {isLoading ? (
        <div className={`loader-screen ${fadeOut ? "fade-out" : ""}`}>
          <h1 className="loader-icon">
            <i className="bi bi-arrow-repeat"></i>
          </h1>

          <style jsx>{`
            .loader-screen {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 9999;
              width: 100%;
              height: 100vh;
              background: #0f0f1a;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: opacity 1s ease;
            }

            .fade-out {
              opacity: 0;
              pointer-events: none;
            }

            .loader-icon {
              font-size: 3rem;
              background: linear-gradient(45deg, #9b00ff, #ffd700);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: spin 1.5s linear infinite;
            }

            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      ) : (
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
            @media (max-width: 768px) {
              .home-container {
                flex-direction: column !important;
                text-align: center !important;
              }
              .home-text {
                text-align: center !important;
              }
              .typed-text {
                white-space: normal !important;
              }
            }
          `}</style>

          <style>{`
            @keyframes blink {
              from, to {
                border-color: transparent;
              }
              50% {
                border-color: #ffffff;
              }
            }
          `}</style>

          <Header
            scrollToAbout={aboutRef}
            scrollToProjects={projectsRef}
            scrollToHome={homeRef}
            scrollToContact={contactRef}
          />

          <div
            ref={homeRef}
            className="home-container"
            style={{
              paddingTop: "clamp(80px, 10vw, 120px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "clamp(20px, 5vw, 40px)",
              minHeight: "90vh",
              paddingLeft: "clamp(20px, 8vw, 60px)",
              paddingRight: "clamp(20px, 8vw, 60px)",
              flexDirection: "row",
            }}
          >
            <div
              className="home-text"
              style={{ flex: "1 1 50%", textAlign: "left" }}
            >
              <p
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "#ffffff",
                }}
              >
                Hi There!
              </p>
              <p
                className="typed-text"
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  borderRight: "2px solid #ffffff",
                  overflow: "hidden",
                  display: "inline-block",
                  animation: "blink 1s step-end infinite",
                  color: "#ffffff",
                }}
              >
                I am{" "}
                <span
                  style={{
                    color: "#FFD700",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {typedText}
                </span>
              </p>
            </div>

            <div style={{ flex: "1 1 50%", textAlign: "center" }}>
              <Image
                alt="coding avatar"
                width={700}
                height={700}
                src="/about.png"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  animation: "levitate 3s ease-in-out infinite",
                  filter: "drop-shadow(0 0 20px #8000ff)",
                }}
              />
            </div>
          </div>

          <section
            ref={projectsRef}
            style={{ minHeight: "100vh", paddingTop: "40px" }}
          >
            <Projects />
          </section>

          <section ref={aboutRef} style={{ minHeight: "100vh" }}>
            <About />
          </section>

          <section ref={contactRef} style={{ minHeight: "100vh" }}>
            <Contact />
          </section>
        </>
      )}
    </>
  );
}
