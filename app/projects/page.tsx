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
}

export default function ProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, name, description, githubLink, tech1, tech2, tech3, tech4, link, details");

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setProjects(data || []);
      }
    };

    fetchProjects();
  }, []);
  const handleDownload = () => {
    // Start file download
    const link = document.createElement("a");
    link.href = "/FInanceTracker/FinanceTracker_v1.0.apk"; 
    link.download = "FinanceTracker_v1.0.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      router.push("/thank-you");
    }, 1000); 
  };

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

      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "40px",
          maxWidth: "1600px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{
              maxHeight: "300px",
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
                marginBottom: "15px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {project.name}
            </h2>

            <p
              style={{
                color: "#ffffff",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                textAlign: "center",
                margin: "0 0 20px 0",
                opacity: "0.9",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "20px",
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
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "0.7rem",
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
                bottom: "20px",
                left: "20px",
                background: "transparent",
                border: "2px solid gold",
                color: "gold",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              github →
            </button>

            {project.link && (
                <button
                  onClick={handleDownload}
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "138px",
                    background: "transparent",
                    border: "2px solid gold",
                    color: "gold",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Download for android
                </button>
            )}

            <button
              onClick={() => router.push(`/projects/${project.details}`)}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "transparent",
                border: "2px solid gold",
                color: "gold",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
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
