import React from "react";

const ProfileCard = (props) => {
  return (
    <div style={{ backgroundColor: "white", margin: "10px",  borderRadius:10 }}>
      <div style={{ display: "flex", margin:10, padding:10}}>
        <img
          src={props.image}
          alt="ProfileIMG"
          height="60px"
          style={{ borderRadius: 10 }}
        />
        <div>
          <h2 style={{ marginLeft: "10px" }}>{props.name}</h2>
          <h5 style={{ marginLeft: "10px" }}>{props.title}</h5>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "10px", padding: "5px" }}>{props.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
