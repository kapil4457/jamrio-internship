import React, { useEffect, useState } from "react";
import "./About.css";
import Loader from "../Loader/Loader";
import image from "./sword4.png";
const About = () => {
  const [data, setData] = useState({
    name: "Kapil Soni",
    Degree: "B.Tech Computer Engineering",
    Status: "Pursuing",
    image: image,
    skills: [
      "C++",
      "JavaScript",
      "React.js",
      "MongoDb",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
    ],
    interests: ["3D Modelling", "Animation"],
  });

  return (
    <div className="user-main-div">
      {data == null ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="user-info">
          <img src={data?.image} alt="" />
          <div className="info-main">
            <div className="name info">
              <b>Name</b>
              {data.name}
            </div>
            <div className="degree info">
              <b>Degree</b>
              {data.Degree}
            </div>
            <div className="status info">
              <b>Status </b>
              {data.Status}
            </div>
            <div className="skills info">
              <b>Skills </b>
              <div>
                {data.skills.map((tag, key) => (
                  <span key={key}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="skills info">
              <b>Interests </b>
              <div>
                {data.interests.map((tag, key) => (
                  <span key={key}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
