"use client";
import React, { useRef } from "react";
import Header from "@/components/Header";
import About from "@/app/about/page";
import Resume from "@/app/resume/page";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const resumeRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <Header scrollToAbout={aboutRef} scrollToResume={resumeRef} />
      {/*For testing the bellow div is created */}
      <div style={{ height: "100vh" }}></div>
      <section
        ref={aboutRef}
        style={{ height: "100vh", backgroundImage: "@/public/home-bg.jpg" }}
      >
        <About />
      </section>
      {/*For testing the bellow div is created */}
      <div style={{ height: "100vh" }}></div>
      <section
        ref={resumeRef}
        style={{ height: "100vh", backgroundImage: "@/public/home-bg.jpg" }}
      >
        <Resume />
      </section>
    </>
  );
}
