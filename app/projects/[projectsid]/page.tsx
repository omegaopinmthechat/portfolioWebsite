import Header2 from "@/components/Header2";

export default function ProjectPage({ params }: { params: { projectsid: string } }) {
  return (
    <>
      <div>
        <Header2 />
        <p style={{paddingTop: "40px"}}>My Post: {params.projectsid}</p>
      </div>
    </>
  );
}