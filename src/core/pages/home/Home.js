import React from "react";
import "./Home.css";
import ProfilepPic from "../../assets/images/ProfilePhoto-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
  const navigate = useNavigate();
  const projects = [
    {
      name: "Personal Web Site",
      technologies: "React JS, CSS3, HTML5",
      year: "2023",
      desc: "This was the personal project done by my self interest for learning purpose.",
      role: "Developer",
    },
    {
      name: "Client Portal",
      technologies: "Angular, Botstrap CSS, HTML5, CSS3",
      year: "2023",
      desc: "Member of development team who build the client portal user interface.",
      role: "Developer - Team Member",
    },
    {
      name: "Client Portal",
      technologies: "React JS, MongoDB, Apollo GraphQL",
      year: "2022",
      desc: "Member of development team who build the client portal UI/UX.",
      role: "Developer - Team Member",
    },
    {
      name: "Calculator",
      technologies: "React JS, HTML5, Tailwind CSS",
      year: "2022",
      desc: "Calculator to do basic calculation primarily done for CSS",
      role: "Developer",
    },
  ];
  const whoLines = [
    "Jaffer Ali Is a Front End Developer who use React Libraray and Angular Frame Work for Developing Screens from Designing Tools or specific requirements from clients.",
    "With 2+ years of experience in developing UI/UX - jaffer has seen multiple issues related to requirements and loves to learn new things and work with team to find various possible solutions to fix the issues.",
    "Jaffer Loves learning and find different designs in Figma and google try to recreate them with own hint of creativity. While you're here, be sure to say hi, from what ever Industry segment you're from!",
  ];
  return (
    <>
      <Header />
      <div className="body flex lg:flex-row md:flex-col">
        <div className="pt-4 lg:w-3/5 md:w-full">
          <div className="flex space-x-4 align">
            <div className="italic bodyHeading ">Jaffer Ali</div>
            {/* <div className="text-2xl text-blue-400">[They / them]</div> */}
          </div>
          <div className="desc lg:text-3xl md:text-4xl">
            UI/UX Developer, Creating Web Pages for the UI/UX Designes according
            to the Customer need and specification.
          </div>
        </div>
        <div className="pt-8 pl-16 md:w-1/2 md:h-1/2">
          <img src={ProfilepPic} alt="No Image Found"></img>
        </div>
      </div>
      <div className="caseStudies -mt-16">
        <div className="italic heading2 mb-6 md:pt-26 lg:pt-6">Projects</div>
        <div className="grid lg:grid-cols-4 grid-flow-row gap-4 md:grid-cols-1">
          {projects.map((ele, index) => (
            <div
              className="border-4 border-zinc-200 p-4 text-xl text-zinc-400 card hover:cursor-pointer hover:bg-zinc-200"
              key={index}
            >
              {
                <div className="lg:text-2xl md:text-4xl font-bold">
                  {ele.year} - {ele.role}
                </div>
              }{" "}
              <br />
              <div className="lg:text-2xl md:text-4xl">Desc: {ele.desc}</div>
              <br />
              <div className="lg:text-2xl md:text-4xl">
                Technologies: {ele.technologies}{" "}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4 h-16">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              navigate("/projects");
            }}
            className=" flex md:text-xl align-middle justify-center w-full border-4 border-zinc-200 p-4 lg:text-xl text-zinc-400 card hover:cursor-pointer hover:bg-zinc-200"
          >
            {"See More >"}{" "}
          </button>
        </div>
      </div>
      <div className="intro">
        <div className="italic intoHeading">Who Is Jaffer?</div>
        <div className="space-y-6 lg:text-2xl md:text-4xl">
          {whoLines.map((ele, index) => (
            <p key={index} className="px-40 text-2xl text-zinc-400">
              {ele}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
