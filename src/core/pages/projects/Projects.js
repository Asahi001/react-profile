import React from "react";
import "./Projects.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Coffee from "../../assets/images/coffee.png";
import Stateguess from "../../assets/images/stateguess.png";
import Quizgame from "../../assets/images/quiz.png";

export default function Projects() {
  const projects = [
    {
      img: Coffee,
      name: "Coffee Making machine",
      technologies: "Python (OOP, Turtle)",
      desc: "Program which prints resources and profits and display menu of avilable options after selection check for resourse availability and then process money and deduct the resouces consumed at the end",
    },
    {
      img: Stateguess,
      name: "Guess States",
      technologies: "Python (OOP, Turtle)",
      desc: "A virtual simulation of game in which we have to guess the states and if its correct it will get displayed on the screen",
    },
    {
      img: Quizgame,
      name: "Quiz game",
      technologies: "Python (OOP)",
      desc: "set of questiones are loaded in the module promting user for an answer and mappng it with the correct answer and will keep track of correst answers and display at the end of questiones list",
    },
    {
      img: "",
      name: "Client Portal",
      technologies: "Angular, Botstrap CSS, HTML5, CSS3",
      desc: "Member of development team who build the client portal user interface.",
    },
    {
      img: "",
      name: "Client Portal",
      technologies: "React JS, MongoDB, Apollo GraphQL",
      desc: "Member of development team who build the client portal UI/UX.",
    },
  ];
  return (
    <>
      <Header />
      <div className="body lg: pb-16">
        <div className="italic heading2 pb-16">Projects</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-flow-row gap-4">
          {projects.map((ele, index) => (
            <div
              className="border-4 border-zinc-200 p-4 text-xl text-zinc-400 card hover:cursor-pointer hover:bg-zinc-200"
              key={index}
            >
              {
                <div className="lg:text-2xl md:text-4xl font-bold">
                  {/* {ele.year} - {ele.role} */}
                  <img src={ele?.img} alt="No Image Found" className="h-36 w-full" />
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
      </div>
      <Footer />
    </>
  );
}
