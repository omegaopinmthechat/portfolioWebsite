"use client";

import { useRouter } from "next/navigation";
import React from "react";


export default function ProjectsPage() {
  const router = useRouter();
  const handleFInanceTracker = ()=>{
    router.push("/projects/1")
  }
  
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
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "20px",
          padding: "40px",
          maxWidth: "1600px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to bottom right, #4B0082, #9b59b6)",
            borderRadius: "8px",
            border: "1px solid #333",
            animation: "levitate 3s ease-in-out infinite",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            position: "relative",
            padding: "20px",
            overflow: "hidden",
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
            Finance Tracker
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
            A beautifully minimal yet powerful personal finance visualizer.
            Track your monthly expenses and income with sleek, interactive
            charts.
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
            <span
              style={{
                background: "rgba(255, 215, 0, 0.2)",
                color: "#FFD700",
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "0.7rem",
                fontWeight: "500",
              }}
            >
              React Native
            </span>
            <span
              style={{
                background: "rgba(255, 215, 0, 0.2)",
                color: "#FFD700",
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "0.7rem",
                fontWeight: "500",
              }}
            >
              Expo
            </span>
            <span
              style={{
                background: "rgba(255, 215, 0, 0.2)",
                color: "#FFD700",
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "0.7rem",
                fontWeight: "500",
              }}
            >
              Supabase
            </span>
          </div>
          <button
            onClick={() =>
              window.open(
                "https://github.com/omegaopinmthechat/FInanceTracker",
                "_blank"
              )
            }
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
          <button
            onClick={handleFInanceTracker}
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
        <div
          style={{
            background: "linear-gradient(to bottom right, #4B0082, #9b59b6)",
            borderRadius: "8px",
            border: "1px solid #333",
            animation: "levitate 3s ease-in-out infinite 0.5s",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          {" "}
        </div>
        <div
          style={{
            background: "linear-gradient(to bottom right, #4B0082, #9b59b6)",
            borderRadius: "8px",
            border: "1px solid #333",
            animation: "levitate 3s ease-in-out infinite 1s",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to bottom right, #4B0082, #9b59b6)",
            borderRadius: "8px",
            border: "1px solid #333",
            animation: "levitate 3s ease-in-out infinite 1.5s",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to bottom right, #4B0082, #9b59b6)",
            borderRadius: "8px",
            border: "1px solid #333",
            animation: "levitate 3s ease-in-out infinite 2s",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to bottom right, #4B0082, #9b59b6)",
            borderRadius: "8px",
            border: "1px solid #333",
            animation: "levitate 3s ease-in-out infinite 2.5s",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
      </div>
    </>
  );
}
