import React, { useState } from "react";

// Define an interface for the community object
interface Community {
  id: number;
  name: string;
  members: number;
  profilePic: string;
}

const Explore = ({ setGroupChats }: { setGroupChats: any }) => {
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
      profilePic: "src/assets/bottle.jpg",
    },
    {
      id: 2,
      name: "Food Lovers Group",
      members: 6200,
      profilePic: "src/assets/bottle.jpg",
    },
    {
      id: 3,
      name: "Adventure Seekers",
      members: 4500,
      profilePic: "src/assets/bottle.jpg",
    },
    {
      id: 4,
      name: "Foodies Club",
      members: 1092,
      profilePic: "src/assets/bottle.jpg",
    },
    // Add more user recommendations
  ];

  const popularCommunities: Community[] = [
    {
      id: 1,
      name: "Solo Travelers",
      members: 13000,
      profilePic: "src/assets/bottle.jpg",
    },
    {
      id: 2,
      name: "Photography Enthusiasts",
      members: 11025,
      profilePic: "src/assets/bottle.jpg",
    },
    {
      id: 3,
      name: "Soloists Gang",
      members: 12922,
      profilePic: "src/assets/bottle.jpg",
    },
    // Add more popular communities
  ];

  // Sample data for travel inspiration
  const travelInspiration = [
    {
      id: 1,
      imageUrl: "src/assets/sheep.jpg",
      videoUrl: "",
      user: "Skye Olsen",
      community: "Adventure Seekers",
      description: "Gulmohar, Kashmir, IN",
    },
    {
      id: 2,
      imageUrl: "src/assets/lake.jpg",
      videoUrl: "",
      user: "Siya",
      community: "Solo Travelers",
      description: "Boating at Dal Lake",
    },
    {
      id: 3,
      imageUrl: "src/assets/lamp.jpg",
      videoUrl: "",
      user: "Liya Sharma",
      community: "Adventure Seekers",
      description: "Walking alongside Central Park",
    },
    {
      wqid: 4,
      imageUrl: "",
      videoUrl: "src/assets/vid.mp4",
      user: "Alaya Smith",
      community: "Solo Travelers",
      description: "View from Cappadocia, Turkey",
    },
    // Add more travel inspiration items
  ];

  // Function to fetch group chat for a community
  const fetchGroupChat = (communityId: number, communityName: string) => {
    // Simulated asynchronous API call to fetch group chat data
    // Replace this with your actual API call
    setTimeout(() => {
      const newGroupChat = {
        communityName: communityName, // Use community name instead of ID
        messages: [
          "Welcome to the group chat!",
          "Let's plan our next adventure!",
        ],
      };
      setGroupChats((prevChats: any[]) => [...prevChats, newGroupChat]);
    }, 1000); // Simulate delay of 1 second
  };

  return (
    <div>
      <h2>Explore</h2>

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
                    onClick={() => {
                      handleJoinCommunity(community, "userRecommendations"),
                        fetchGroupChat(community.id, community.name);
                    }}
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
                    onClick={() => {
                      handleJoinCommunity(community, "popularCommunities"),
                        fetchGroupChat(community.id, community.name);
                    }}
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

      {/* Render joined communities */}
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
                    onClick={() => console.log("View community")}
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
                    onClick={() => console.log("View community")}
                  >
                    View
                  </button>
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
