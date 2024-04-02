import React from "react";

interface ProfileProps {
  userData: any; // Define the type of user data
}
let source = "";

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  if (userData.avatar == "camel") {
    source = "https://i.postimg.cc/c4X9tchM/camel.png";
  }
  if (userData.avatar == "cheetah") {
    source = "https://i.postimg.cc/s2Zw8Crw/cheetah.png";
  }
  if (userData.avatar == "panda") {
    source = "https://i.postimg.cc/NjK49v5B/panda.png";
  }
  if (userData.avatar == "chimp") {
    source = "https://i.postimg.cc/tJ9kY1VM/chimp.png";
  }
  if (userData.avatar == "lion") {
    source = "https://i.postimg.cc/Hss3mymJ/lion.png";
  }
  if (userData.avatar == "meerkat") {
    source = "https://i.postimg.cc/WbW811p5/meerkat.png";
  }
  if (userData.avatar == "sloth") {
    source = "https://i.postimg.cc/qvWG2D3n/sloth.png";
  }
  if (userData.avatar == "elephant") {
    source = "https://i.postimg.cc/XJfxjKX5/elephant.png";
  }
  return (
    <div
      className="profile-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // Set the height to full viewport height
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        color: "#fff",
        padding: "0px",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensure the video covers the entire container
          zIndex: -1, // Place the video behind other content
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/2547258/2547258-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <br></br>
      <br></br>
      <br></br>
      <div id="avatar-wrapper">
        <img
          className="profile-avatar"
          src={source}
          alt="Avatars"
          width="120px"
        />
      </div>

      <h2>{userData.name}</h2>
      <div className="profile-info" style={{ color: "white" }}>
        <p>
          <b>Username: </b>
          {userData.username}
        </p>
        <p>
          <b>Email/Phone: </b>
          {userData.emailPhone}
        </p>
        <p>
          <b>Age: </b>
          {userData.age}
        </p>
        <p>
          <b>Location: </b>
          {userData.location}
        </p>
        <p>
          <b>Interests: </b>
          {userData.interests.join(", ")}
        </p>
        <p>
          <b>Languages: </b>
          {userData.languages.join(", ")}
        </p>
        <p>
          <b>Travel Styles: </b>
          {userData.travelStyles.join(", ")}
        </p>
        <p>
          <b>Favorite Food: </b>
          {userData.favoriteFood}
        </p>
        <p>
          <b>Dream Destination: </b>
          {userData.dreamDestination}
        </p>
        <p>
          <b>Preferred Activity: </b>
          {userData.preferredActivity}
        </p>
        <p>
          <b>Avatar: </b>
          {userData.avatar}
        </p>
        <p>
          <b>Badges: </b>
          <label className="label">newbie</label>
        </p>
      </div>
    </div>
  );
};

export default Profile;
