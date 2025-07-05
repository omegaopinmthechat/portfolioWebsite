"use client"
import React, { useState } from "react";
import { supabase } from "../utils/supabase/supabase";

const Page = () => {
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

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
      alert(`I will contact you soon on your email: ${email}`)
      console.log("Insert success:", data);
      setLoading(false);
      setEmail("");
      setDesc("");
    }
  };

  if(loading){
    return <div>Loading</div>;    
  }else{
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            placeholder="eg: abcd@gmail.com"
            required
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="desc"
            placeholder="Why do you want to contact me?"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div
        style={{
          paddingTop: "clamp(20px, 5vw, 40px)",
          fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
          background: "linear-gradient(to bottom, #1a1a2e, #0f0f1a)",
          padding: "clamp(40px, 6vw, 60px) clamp(20px, 4vw, 30px)",
          color: "white",
          textAlign: "center" as const,
          minHeight: "100vh",
        }}
      >
        Contact me
      </div>
    </>
  );
}
};

export default Page;
