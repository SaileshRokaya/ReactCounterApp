import React from "react";

const ProfileCard = () => {
  return (
    <div style={{ backgroundColor: "white", margin:'10px'}}>
     <div style={{ display:'flex' }}>
      <img
        src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/311454587_1799909447028677_5572289310893600927_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2uAedg3kY5IAX-2mXn6&_nc_ht=scontent.fktm17-1.fna&oh=00_AfCIgY1OuqHBZdp8xAI3GpopT7CEifVEL1lYsSuLthVxYg&oe=63767F35"
        alt="ProfileIMG"
        height="60px"
      />
      <div>
      <h2 style={{marginLeft:'10px'}}>Sailesh Rokaya</h2> 
      <h5 style={{marginLeft:'10px'}}>Founder & CEO</h5>  
      </div>
      </div>
      <div>
          <p style={{fontSize:'10px', padding:'5px'}}>Hello, I'am Sailesh Rokaya origranlly from bansgadhi Bardiya. Now i lives in Kathamndu Nepal.</p>
      </div>
    </div>
  );
};

export default ProfileCard;
