import React, { useState } from "react";

interface LoginProps {
  onClose: () => void; // Define the type of onClose prop
  onLoginSuccess: (userData: any) => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onLoginSuccess }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [travelStyles, setTravelStyles] = useState<string[]>([]);
  const [favoriteFood, setFavoriteFood] = useState("");
  const [dreamDestination, setDreamDestination] = useState("");
  const [preferredActivity, setPreferredActivity] = useState("");
  const [avatar, setAvatar] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    const userData = {
      name,
      username,
      emailPhone,
      age,
      location,
      interests,
      languages,
      travelStyles,
      favoriteFood,
      dreamDestination,
      preferredActivity,
      avatar,
    };

    // Pass user data to the parent component
    onLoginSuccess(userData);

    onClose();
  };

  const handleInterestChange = (selectedInterests: string[]) => {
    setInterests(selectedInterests);
  };

  const handleLanguageChange = (selectedLanguages: string[]) => {
    setLanguages(selectedLanguages);
  };

  const handleTravelStyleChange = (selectedTravelStyles: string[]) => {
    setTravelStyles(selectedTravelStyles);
  };

  return (
    <div
      className="row login-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        color: "#fff",
        padding: "0px ",
        margin: "0px",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          padding: "0px",
          zIndex: -1, // Place the video behind other content
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/2867873/2867873-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h2>Create User Profile</h2>
      <div className="col-md-4">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label>Email/Phone</label>
            <input
              type="text"
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              className="form-control"
              placeholder="Enter email or phone"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              placeholder="Enter age (e.g. 30)"
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              placeholder="Enter location (e.g. New Delhi, India)"
            />
          </div>
        </form>
      </div>

      <div className="col-md-4">
        <form>
          <div className="form-group">
            <label>Interests (use ctrl key to select multiple options) </label>
            <select
              multiple
              className="form-control"
              value={interests}
              onChange={(e) =>
                handleInterestChange(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              <option value="adventure">Adventure</option>
              <option value="photography">Photography</option>
              <option value="food">Food</option>
              <option value="nature">Nature</option>
              <option value="history">History</option>
              <option value="art_and_culture">Art and Culture</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="wildlife">Wildlife</option>
              <option value="wellness_and_health">Wellness and Health</option>
            </select>
          </div>
          <div className="form-group">
            <label>Languages</label>
            <select
              multiple
              className="form-control"
              value={languages}
              onChange={(e) =>
                handleLanguageChange(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Mandarin Chinese">Mandarin Chinese</option>
              <option value="Hindi">Hindi</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
              <option value="Bengali">Bengali</option>
              <option value="Russian">Russian</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Urdu">Urdu</option>
              <option value="German">German</option>
              <option value="Japanese">Japanese</option>
              <option value="Swahili">Swahili</option>
              <option value="Korean">Korean</option>
              <option value="Tamil">Tamil</option>
              <option value="Italian">Italian</option>
              <option value="Turkish">Turkish</option>
              <option value="Persian">Persian</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>
          <div className="form-group">
            <label>Travel Styles</label>
            <select
              multiple
              className="form-control"
              value={travelStyles}
              onChange={(e) =>
                handleTravelStyleChange(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              <option value="Solo">Solo</option>
              <option value="Group">Group</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="Couple">Couple</option>
              <option value="Adventure">Adventure</option>
              <option value="Luxury">Luxury</option>
              <option value="Budget">Budget</option>
              <option value="Cultural">Cultural</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Historical">Historical</option>
              <option value="Nature">Nature</option>
              <option value="Food">Food</option>
              <option value="Beach">Beach</option>
              <option value="City Breaks">City Breaks</option>
              <option value="Road Trips">Road Trips</option>
              <option value="Camping">Camping</option>
              <option value="Backpacking">Backpacking</option>
              <option value="Cruise">Cruise</option>
            </select>
          </div>
          <div className="form-group">
            <label>Favorite Food</label>
            <select
              value={favoriteFood}
              onChange={(e) => setFavoriteFood(e.target.value)}
              className="form-control"
            >
              <option value="">Select your favorite food</option>
              <option value="Italian">Italian</option>
              <option value="Thai">Thai</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="French">French</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Greek">Greek</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Spanish">Spanish</option>
              <option value="American">American</option>
              <option value="British">British</option>
              <option value="German">German</option>
              <option value="Brazilian">Brazilian</option>
              <option value="Korean">Korean</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="African">African</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </form>
      </div>
      <div className="col-md-4">
        <form>
          <div className="form-group">
            <label>Dream Destination</label>
            <input
              type="text"
              value={dreamDestination}
              onChange={(e) => setDreamDestination(e.target.value)}
              className="form-control"
              placeholder="Enter your dream destination (e.g. Paris, France)"
            />
          </div>
          <div className="form-group">
            <label>Preferred Activity</label>
            <input
              type="text"
              value={preferredActivity}
              onChange={(e) => setPreferredActivity(e.target.value)}
              className="form-control"
              placeholder="Enter your preferred activity (e.g. Hiking)"
            />
          </div>
          <div className="form-group">
            <label>Choose your Travel Personality Avatar</label>
            <a href="http://thereturnjourney.com/travelPersonalities">
              know more
            </a>
            <input
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value.toLowerCase())}
              className="form-control"
              placeholder="Enter your avatar (e.g. Camel)"
            />
          </div>
          <div className="form-group">
            <img
              src="https://i.postimg.cc/9ffXd2vg/image.png"
              alt="Avatars"
              width="100%"
            />
          </div>
        </form>
      </div>
      <button
        id="login"
        type="button"
        onClick={handleLogin}
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
