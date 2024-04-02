import React, { useState } from "react";

// Define an interface for the community object
interface Community {
  id: number;
  name: string;
  members: number;
  profilePic: string;
}

export const GroupChatWindow: React.FC<{
  community: Community;
  onClose: () => void;
  joinedCommunities: Community[]; // Add a prop for joined communities
}> = ({ community, onClose, joinedCommunities }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage.trim()]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <h3>Group Chat: {community.name}</h3>
      <button onClick={onClose}>Go Back</button>
      <div
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const Explore = () => {
  // State variables for joined communities in each section
  const [joinedUserRecommendations, setJoinedUserRecommendations] = useState<
    Community[]
  >([]);
  const [joinedPopularCommunities, setJoinedPopularCommunities] = useState<
    Community[]
  >([]);
  const [currentGroupChat, setCurrentGroupChat] = useState<Community | null>(
    null
  );

  // Function to handle joining or exiting a community
  const handleJoinCommunity = (community: Community, section: string) => {
    if (section === "userRecommendations") {
      // Check if the community is already joined in User Recommendations
      const isJoined = joinedUserRecommendations.some(
        (c) => c.id === community.id
      );
      if (isJoined) {
        setJoinedUserRecommendations(
          joinedUserRecommendations.filter((c) => c.id !== community.id)
        );
      } else {
        setJoinedUserRecommendations([...joinedUserRecommendations, community]);
      }
    } else if (section === "popularCommunities") {
      // Check if the community is already joined in Popular Communities
      const isJoined = joinedPopularCommunities.some(
        (c) => c.id === community.id
      );
      if (isJoined) {
        setJoinedPopularCommunities(
          joinedPopularCommunities.filter((c) => c.id !== community.id)
        );
      } else {
        setJoinedPopularCommunities([...joinedPopularCommunities, community]);
      }
    }
  };

  // Sample data for user recommendations and popular communities
  const userRecommendations: Community[] = [
    {
      id: 1,
      name: "Adventure Enthusiasts",
      members: 4330,
      profilePic:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Food Lovers Group",
      members: 6200,
      profilePic:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Adventure Seekers",
      members: 4500,
      profilePic:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Foodies Club",
      members: 1092,
      profilePic:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    // Add more user recommendations
  ];

  const popularCommunities: Community[] = [
    {
      id: 1,
      name: "Solo Travelers",
      members: 13000,
      profilePic:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Photography Enthusiasts",
      members: 11025,
      profilePic:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Soloists Gang",
      members: 12922,
      profilePic:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    // Add more popular communities
  ];

  // Sample data for travel inspiration
  const cardStyle = {
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
    backgroundColor: "#fff",
    overflow: "hidden",
  };

  const bodyStyle = {
    padding: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "15px 15px 0 0",
  };

  const footerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "10px",
    borderTop: "1px solid #dee2e6",
  };

  const travelInspiration = [
    {
      id: 1,
      imageUrl: "https://i.postimg.cc/RhC1vjkr/sheep.avif",
      videoUrl: "",
      user: "Skye Olsen",
      community: "Adventure Seekers",
      description: "Gulmohar, Kashmir, IN",
    },
    {
      id: 2,
      imageUrl: "https://i.postimg.cc/hjWpRZ4g/lake.avif",
      videoUrl: "",
      user: "Siya",
      community: "Solo Travelers",
      description: "Boating at Dal Lake",
    },
    {
      id: 3,
      imageUrl: "https://i.postimg.cc/66hzFhkJ/lamp.avif",
      videoUrl: "",
      user: "Liya Sharma",
      community: "Adventure Seekers",
      description: "Walking alongside Central Park",
    },
    {
      wqid: 4,
      imageUrl: "",
      videoUrl:
        "https://videos.pexels.com/video-files/3015510/3015510-sd_640_360_24fps.mp4",
      user: "Alaya Smith",
      community: "Solo Travelers",
      description: "View from Cappadocia, Turkey",
    },
    // {
    //   id: 5,
    //   imageUrl: "src/assets/lamp.jpg",
    //   videoUrl: "",
    //   user: "Liya Sharma",
    //   community: "Adventure Seekers",
    //   description: "Walking alongside Central Park",
    // },
    // {
    //   id: 6,
    //   imageUrl: "src/assets/lake.jpg",
    //   videoUrl: "",
    //   user: "Siya",
    //   community: "Solo Travelers",
    //   description: "Boating at Dal Lake",
    // },

    // Add more travel inspiration items
  ];

  return (
    <div>
      <h2>Explore</h2>
      <label
        style={{
          backgroundColor: "#ff9800", // Blue background color
          padding: "7px", // Padding around the text
          borderRadius: "15px", // Rounded corners
          color: "white", // Text color
          display: "inline-block", // Display as inline-block to wrap around the text
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for 3D effect
          margin: "10px",
        }}
      >
        <b>
          TIP: &nbsp;
          <i>
            Try searching for flights in the airline’s original language. You
            may save $700 booking tickets in Peru by using Spanish rather than
            English
          </i>
        </b>
      </label>

      <h3>Recommended:</h3>
      <div className="row">
        {userRecommendations.map((community) => (
          <div key={community.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ height: "10rem", width: "20rem" }}>
              <div className="card-body d-flex align-items-center">
                <img
                  src={community.profilePic}
                  className="card-img-top"
                  alt="..."
                  style={{
                    borderRadius: "50%",
                    width: "95px",
                    height: "95px",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <h5 className="card-title">{community.name}</h5>
                  <p className="card-text">{community.members} members</p>
                  <button
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    onClick={() =>
                      handleJoinCommunity(community, "userRecommendations")
                    }
                  >
                    {joinedUserRecommendations.some(
                      (c) => c.id === community.id
                    )
                      ? "Exit"
                      : "Join"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Popular Communities:</h3>
      <div className="row">
        {popularCommunities.map((community) => (
          <div key={community.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ height: "10rem", width: "20rem" }}>
              <div className="card-body d-flex align-items-center">
                <img
                  src={community.profilePic}
                  className="card-img-top"
                  alt="..."
                  style={{
                    borderRadius: "50%",
                    width: "95px",
                    height: "95px",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <h5 className="card-title">{community.name}</h5>
                  <p className="card-text">{community.members} members</p>
                  <button
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    onClick={() =>
                      handleJoinCommunity(community, "popularCommunities")
                    }
                  >
                    {joinedPopularCommunities.some((c) => c.id === community.id)
                      ? "Exit"
                      : "Join"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>My Communities</h3>
      <br></br>
      <div className="row">
        {/* Render joined communities from both sections */}
        {joinedUserRecommendations.map((community) => (
          <div key={community.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ height: "10rem", width: "20rem" }}>
              <div className="card-body d-flex align-items-center">
                <img
                  src={community.profilePic}
                  className="card-img-top"
                  alt="..."
                  style={{
                    borderRadius: "50%",
                    width: "95px",
                    height: "95px",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <h5 className="card-title">{community.name}</h5>
                  <p className="card-text">{community.members} members</p>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    onClick={() =>
                      handleJoinCommunity(community, "userRecommendations")
                    }
                  >
                    <b>Exit</b>
                  </button>
                  <button
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    onClick={() => console.log("tbd")}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {joinedPopularCommunities.map((community) => (
          <div key={community.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ height: "10rem", width: "20rem" }}>
              <div className="card-body d-flex align-items-center">
                <img
                  src={community.profilePic}
                  className="card-img-top"
                  alt="..."
                  style={{
                    borderRadius: "50%",
                    width: "95px",
                    height: "95px",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <h5 className="card-title">{community.name}</h5>
                  <p className="card-text">{community.members} members</p>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    onClick={() =>
                      handleJoinCommunity(community, "popularCommunities")
                    }
                  >
                    <b>Exit</b>
                  </button>
                  <button
                    style={{
                      backgroundColor: "darkorange",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inspiration section */}
      <h3>Inspiration</h3>
      <div className="row">
        {travelInspiration.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card" style={cardStyle}>
              <div className="card-body" style={bodyStyle}>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt={item.description}
                    style={imageStyle}
                  />
                )}
                {item.videoUrl && (
                  <video controls className="card-img-top" style={imageStyle}>
                    <source src={item.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="card-footer" style={footerStyle}>
                  <p className="card-text">
                    <i>{item.description}</i>
                    <br />
                    Posted by {item.user} on {item.community}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
