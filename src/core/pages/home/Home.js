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
      role: "Portfolio Web site for profile",
    },
    {
      name: "Client Portal",
      technologies: "Angular, Botstrap CSS, HTML5, CSS3",
      year: "2023",
      desc: "Member of development team who build the client portal user interface.",
      role: "A client portal developed during my service",
    },
    {
      name: "Client Portal",
      technologies: "React JS, MongoDB, Apollo GraphQL",
      year: "2022",
      desc: "Member of development team who build the client portal UI/UX.",
      role: "A client portal developed during my service",
    },
    {
      name: "Calculator",
      technologies: "React JS, HTML5, Tailwind CSS",
      year: "2022",
      desc: "Calculator to do basic calculation primarily done for CSS",
      role: "A react project i built during my training period",
    },
    {
      name: "Snake Game",
      technologies: "Python, Turtle, Canvas, Pandas",
      year: "2022",
      desc: "Game of snake in which whem we succesfullly eat the food it grows until the game over if we touch boundary or touch its own body.",
      role: "A game built in python with bounday and tail bite conditions with Turtle library",
    },
    {
      name: "Geography quiz",
      technologies: "Python, Turtle, Canvas, Pandas",
      year: "2022",
      desc: "Game in which we will guess the state of the map and if guessed correct it will display on the map",
      role: "A quiz game with python canvas and Turtle",
    },
  ];
  const skillsList = [
    "HTML 5",
    "CSS 3",
    "Java Script",
    "Bootstrap",
    "Tailwind Css",
    "Angular 13",
    "React JS",
    "Apllo GraphQL",
    "Python 3.12",
  ];
  const personalSkills = [
    "Active Listening",
    "Assertiveness",
    "Teamwork",
    "Clear Communication",
    "Leadership Skills",
  ];
  const additionalSkills = [
    "I have pretty short learning curve related to new technologies, I am also confident in improving and applying different concepts and optimizing the code when implementing.",
    "Able to break complex problem into steps and tackeling one at a time to finish final component.",
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
          <div className="text-zinc-400 lg:text-3xl md:text-4xl">
            UI/UX Developer, Creating Web Pages for the UI/UX Designes according
            to the Customer need and specification. Love to work on the
            challenging designes learning new concepts and implementing them. I
            do have short learning curve which helps me to keep up with my
            plannings.
          </div>
          <div
            onClick={() => {
              window.scrollTo({top: 1100, left: 0, behavior: "smooth"});
            }}
            className="text-zinc-400 lg:text-2xl md:text-4xl pt-4 underline cursor-pointer hover:font-bold hover:text-violet-200"
          >
            Please have a look in "Skills" section to know about my skills.
          </div>
        </div>
        <div className="pt-8 pl-16 md:w-1/2 md:h-1/2">
          <img src={ProfilepPic} alt="No Image Found"></img>
        </div>
      </div>
      <div className="caseStudies -mt-16 relative group">
        <div className="italic heading2 mb-6 md:pt-26 lg:pt-6">Projects</div>
        <div className="grid lg:grid-cols-4 grid-flow-row gap-4 md:grid-cols-1">
          {projects.map((ele, index) => (
            <div
              className="border-4 border-zinc-200 p-4 text-xl text-zinc-400 card hover:cursor-pointer hover:bg-zinc-200 "
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
      <div className="caseStudies">
        <div className="italic heading2 mb-6 md:pt-26 lg:pt-6">Skills</div>
        <div className="text-zinc-400 lg:text-2xl md:text-4xl gap-8 pb-2">
          <div>Technial skills:</div>
          {skillsList.map((ele, idx) => {
            return (
              <span className="pr-4">
                {" "}
                {idx + 1}. {ele}{idx+1 < skillsList.length ? "," : ""}{" "}
              </span>
            );
          })}
        </div>
        <div className="text-zinc-400 lg:text-2xl md:text-4xl gap-8 pb-2 pt-8">
          <div>Interpersonal skills:</div>
          {personalSkills.map((ele, idx) => {
            return (
              <span className="pr-4">
                {" "}
                {idx + 1}. {ele}{idx+1 < personalSkills.length ? "," : ""}{" "}
              </span>
            );
          })}
        </div>
        <div className="text-zinc-400 lg:text-2xl md:text-4xl gap-8 pb-2 pt-8">
          <div>Additional skills:</div>
          {additionalSkills.map((ele, idx) => {
            return (
              <span className="pr-4 flex flex-col">
                {" "}
                {idx + 1}. {ele}{" "}
              </span>
            );
          })}
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
