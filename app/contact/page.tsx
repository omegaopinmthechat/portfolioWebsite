"use client"
import React, { useState } from "react";
import { supabase } from "../utils/supabase/supabase";
import Footer from "@/components/Footer";


const Page = () => {
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const { data, error } = await supabase
      .from("contact")
      .insert([{ email: email, description: desc }]);

    if (error) {
      console.error("Insert error:", error);
      setLoading(false);
    } else {
      console.log("Insert success:", data);
      setLoading(false);
      setEmail("");
      setDesc("");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  if(loading){
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "1.5rem"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "15px"
        }}>
          <div 
            className="spinner"
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #9b00ff",
              borderTop: "4px solid transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }}
          ></div>
          Loading...
        </div>

      </div>
    );    
  }else{
  return (
    <>
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)",
      padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        textAlign: "center",
        marginBottom: "clamp(40px, 6vw, 60px)"
      }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #9b00ff, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px",
          filter: "drop-shadow(0 0 30px rgba(155, 0, 255, 0.3))"
        }}>
          Get In Touch
        </h1>
        <p style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
          color: "#b8b8b8",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Have a project in mind or want to collaborate? I d love to hear from you!
        </p>
      </div>
      
      <div style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        padding: "clamp(20px, 3vw, 35px)",
        width: "100%",
        maxWidth: "600px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
      }}>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px"
        }}>
          <div>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontSize: "1.1rem",
              color: "#FFD700",
              fontWeight: "500"
            }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                fontSize: "1rem",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.05)",
                color: "white",
                outline: "none",
                transition: "all 0.3s ease"
              }}
            />
          </div>
          
          <div>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontSize: "1.1rem",
              color: "#FFD700",
              fontWeight: "500"
            }}>Message</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tell me about your project or why you'd like to connect..."
              required
              rows={5}
              style={{
                width: "100%",
                padding: "15px 20px",
                fontSize: "1rem",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.05)",
                color: "white",
                outline: "none",
                transition: "all 0.3s ease",
                resize: "vertical" as const,
                minHeight: "120px",
                fontFamily: "inherit"
              }}
            />
          </div>
          
          <button 
            type="submit"
            style={{
              padding: "15px 30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "12px",
              background: "linear-gradient(45deg, #9b00ff, #7c3aed)",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px rgba(155, 0, 255, 0.3)",
              textTransform: "uppercase" as const,
              letterSpacing: "1px"
            }}
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div style={{
        marginTop: "clamp(40px, 6vw, 60px)",
        textAlign: "center",
        color: "#b8b8b8",
        fontSize: "0.95rem"
      }}>
      </div>
      
      {showPopup && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(10px)",
          border: "2px solid #9b00ff",
          borderRadius: "20px",
          padding: "30px 40px",
          color: "white",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(155, 0, 255, 0.4)",
          zIndex: 1000,
          animation: "fadeIn 0.3s ease-in-out"
        }}>
          <h3 style={{
            color: "#FFD700",
            marginBottom: "15px",
            fontSize: "1.5rem"
          }}>Thank You!</h3>
          <p style={{
            fontSize: "1.1rem",
            margin: 0
          }}>Thanks for connecting! I will get back to you soon.</p>
        </div>
      )}
      
      <style>{`
        body {
          overflow-x: hidden;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>

    </div>
          <Footer />
</>
  );
}
};

export default Page;
