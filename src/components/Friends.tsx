import React, { useState } from "react";
import "./FriendsComponent.css"; // Import CSS file for styling

// Define fake friends data
const fakeFriends = [
  {
    id: 1,
    name: "Fatima Akhtar",
    location: "New Delhi, IN",
    compatibilityScore: 85,
    avatar: "https://i.postimg.cc/NjK49v5B/panda.png",
  },
  {
    id: 2,
    name: "Arsheya J.",
    location: "New Delhi, IN",
    compatibilityScore: 78,
    avatar: "https://i.postimg.cc/c4X9tchM/camel.png",
  },
  {
    id: 3,
    name: "Armaan Bansal",
    location: "New Delhi, IN",
    compatibilityScore: 92,
    avatar: "https://i.postimg.cc/NjK49v5B/panda.png",
  },
  {
    id: 3,
    name: "Daksh Sethi",
    location: "New Delhi, IN",
    compatibilityScore: 92,
    avatar: "https://i.postimg.cc/NjK49v5B/panda.png",
  },
  {
    id: 4,
    name: "Usha Thakur",
    location: "Dehradun, Uttarakhand, IN",
    compatibilityScore: 65,
    avatar: "https://i.postimg.cc/XJfxjKX5/elephant.png",
  },
  {
    id: 5,
    name: "Riya Wilson",
    location: "Bhopal, Madhya Pradesh, IN",
    compatibilityScore: 70,
    avatar: "https://i.postimg.cc/WbW811p5/meerkat.png",
  },
  // Add more fake friends here if needed
];

function Friends() {
  const [friends, setFriends] = useState(fakeFriends);
  const [addedFriends, setAddedFriends] = useState<number[]>([]);

  // Function to handle adding a friend
  const addFriend = (friendId: number) => {
    setAddedFriends([...addedFriends, friendId]);
  };

  // Function to handle removing a friend
  const removeFriend = (friendId: number) => {
    setAddedFriends(addedFriends.filter((id) => id !== friendId));
  };

  return (
    <div className="friends-container">
      <video autoPlay muted loop className="video-background">
        <source
          src="https://videos.pexels.com/video-files/2257010/2257010-sd_640_360_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="friends-content">
        <h2 className="title" style={{ color: "white" }}>
          Matching Friends
        </h2>
        <div className="friends-list">
          {friends.map((friend) => (
            <div key={friend.id} className="friend-card">
              <div className="friend-info" style={{ color: "white" }}>
                <div className="avatar-wrapper">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="avatar"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h3>{friend.name}</h3>
                <p>
                  <strong>Location:</strong> {friend.location}
                </p>
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "1.2em",
                    color: "#FFA500",
                  }}
                >
                  <strong>Compatibility Score:</strong>{" "}
                  {friend.compatibilityScore}%
                </p>
              </div>
              {addedFriends.includes(friend.id) ? (
                <button
                  className="button"
                  onClick={() => removeFriend(friend.id)}
                >
                  Remove Friend
                </button>
              ) : (
                <button className="button" onClick={() => addFriend(friend.id)}>
                  Add Friend
                </button>
              )}
              {addedFriends.includes(friend.id) && (
                <span className="tag">Added</span>
              )}
              <button className="button">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;
