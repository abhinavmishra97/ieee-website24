import React from "react";
import "./team.style.css";

const Team = ({ members }) => {
  return (
    <div className="team-component">
      <div className="team-container">
        {members.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <div className="overlay">
              <div className="text">
                <h3>{member.name}</h3>
                <p>{member.post}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
