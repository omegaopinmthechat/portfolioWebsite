import Header2 from "@/components/Header2";
import React from "react";

const Page = () => {
  return (
    <>
      <Header2 />
      <div
        style={{
          height: "calc(100vh - 60px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "#FFD700",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          }}
        >
          🎉 Thank You!
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#fff",
            maxWidth: "600px",
            lineHeight: "1.8",
            textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)",
          }}
        >
          Your download has started. We appreciate your interest in the project!
        </p>
      </div>
    </>
  );
};

export default Page;
