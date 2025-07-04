"use client";

import { useParams } from "next/navigation";
import Header2 from "@/components/Header2";

export default function ProjectPage() {
  const params = useParams(); 

  return (
    <div>
      <Header2 />
      <p style={{ paddingTop: "40px" }}>My Post: {params.projectsid}</p>
    </div>
  );
}
