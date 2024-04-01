import React from "react";
import "./Projects.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


export default function Projects() {
  const projects = [
    {
      name: "Coffee Making machine",
      technologies: "Python (OOP, Turtle)",
      year: "2024",
      desc: "Program which prints resources and profits and display menu of avilable options after selection check for resourse availability and then process money and deduct the resouces consumed at the end",
      role: "Developer",
    },
    {
      name: "Hungry Snake",
      technologies: "Python (OOP, Turtle)",
      year: "2024",
      desc: "A virtual simulation of snake game in which the turtles are randomly rendered in a GUI using Turtle module and when collided with food snake grows and if it hits the boundary of the canves or itself its Game over",
      role: "Developer",
    },
    {
      name: "Quiz game",
      technologies: "Python (OOP)",
      year: "2024",
      desc: "set of questiones are loaded in the module promting user for an answer and mappng it with the correct answer and will keep track of correst answers and display at the end of questiones list",
      role: "Developer",
    },
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
  return (
    <>
    <Header />
    <div className="body">
      <div className="italic heading2 mb-6">Projects</div>
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        {projects.map((ele, index) => (
          <div
            className="border-4 border-zinc-200 p-4 text-xl text-zinc-400 card hover:cursor-pointer hover:bg-zinc-200"
            key={index}
          >
            {
              <div className="text-2xl font-bold">
                {ele.year} - {ele.role}
              </div>
            }{" "}
            <br /> Desc: {ele.desc} <br /> Technologies: {ele.technologies}{" "}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
