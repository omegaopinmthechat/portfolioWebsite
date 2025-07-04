"use client";
import { useParams } from "next/navigation";
import Header2 from "@/components/Header2";

export default function ProjectPage() {
  const params = useParams(); 
  const id = params.projectsid; 
  return (
    <>
      <Header2 />
      <div style={{ paddingTop: "40px" }}>
        {id === "financetracker" && <div>FinanceTracker</div>}
      </div>
    </>
  );
}
