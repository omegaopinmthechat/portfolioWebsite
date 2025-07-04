"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase/supabase";

interface Project {
  id: number;
  name: string;
  description: string;
  githubLink: string | null;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  link: string | null;
  details: string | null;
  device: string | null;
}

export default function ProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, name, description, githubLink, tech1, tech2, tech3, tech4, link, details, device");

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setProjects(data || []);
      }
    };

    fetchProjects();
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

      <style jsx>{`
        .projects-grid {
          min-height: 100vh;
          display: grid;
          gap: clamp(15px, 3vw, 20px);
          padding: clamp(20px, 5vw, 40px);
          max-width: 1600px;
          margin: 0 auto;
          box-sizing: border-box;
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{
              height: "350px",
              background: "linear-gradient(to bottom right, #4B0082, #9b59b6)",
              borderRadius: "8px",
              border: "1px solid #333",
              animation: `levitate 3s ease-in-out infinite ${index * 0.5}s`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              padding: "20px",
              position: "relative",
            }}
          >
            <h2
              style={{
                color: "#FFD700",
                textAlign: "center",
                marginBottom: "clamp(10px, 2vw, 15px)",
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {project.name}
            </h2>

            <p
              style={{
                color: "#ffffff",
                fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                lineHeight: "1.6",
                textAlign: "center",
                margin: "0 0 clamp(15px, 3vw, 20px) 0",
                opacity: "0.9",
                padding: "0 5px",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(5px, 1.5vw, 10px)",
                flexWrap: "wrap",
                marginBottom: "clamp(15px, 3vw, 20px)",
                padding: "0 5px",
              }}
            >
              {[project.tech1, project.tech2, project.tech3, project.tech4]
                .filter(Boolean)
                .map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "rgba(255, 215, 0, 0.2)",
                      color: "#FFD700",
                      padding: "clamp(3px, 1vw, 4px) clamp(6px, 1.5vw, 8px)",
                      borderRadius: "12px",
                      fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)",
                      fontWeight: "500",
                    }}
                  >
                    {tech}
                  </span>
                ))}
            </div>

            <button
              onClick={() => window.open(project.githubLink!, "_blank")}
              style={{
                position: "absolute",
                bottom: "clamp(15px, 3vw, 20px)",
                left: "clamp(15px, 3vw, 20px)",
                background: "transparent",
                border: "2px solid gold",
                color: "gold",
                padding: "clamp(8px, 2vw, 10px) clamp(12px, 2.5vw, 15px)",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
              }}
            >
              <i className="bi bi-github" style={{ paddingRight: "5px" }}></i>
              github
            </button>

            {project.link && (
              <a href={project.link}>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      window.location.href = "/thank-you";
                    }, 100);
                  }}
                  style={{
                    position: "absolute",
                    bottom: "clamp(15px, 3vw, 20px)",
                    right: "clamp(100px, 15vw, 125px)",
                    background: "transparent",
                    border: "2px solid gold",
                    color: "gold",
                    padding: "clamp(8px, 2vw, 10px) clamp(12px, 2.5vw, 15px)",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
                  }}
                >
                  Download{" "}
                  {project.device && (
                    <span style={{ paddingLeft: "2px" }}>
                      for {project.device}
                    </span>
                  )}
                  <i
                    className="bi bi-download"
                    style={{ paddingLeft: "5px" }}
                  ></i>
                </button>
              </a>
            )}

            <button
              onClick={() => router.push(`/projects/${project.details}`)}
              style={{
                position: "absolute",
                bottom: "clamp(15px, 3vw, 20px)",
                right: "clamp(15px, 3vw, 20px)",
                background: "transparent",
                border: "2px solid gold",
                color: "gold",
                padding: "clamp(8px, 2vw, 10px) clamp(12px, 2.5vw, 15px)",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
              }}
            >
              details →
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
