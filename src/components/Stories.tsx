import React, { useState } from "react";

interface Story {
  id: number;
  title: string;
  yourStory: string;
  description: string;
  storyAbout: string;
  place: string;
  time: string;
  category: string;
  user: string; // Add user property for the user's name
}

interface Comment {
  id: number;
  storyId: number;
  text: string;
  dateTime: string;
  user: string; // Add user property for the user's name
  likes: number; // Add likes property to store the number of likes
}

const Stories: React.FC<{ userData: any }> = ({ userData }) => {
  const divStyle = {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    color: "brown",
  };

  const cardTextStyle = {
    color: "black",
  };

  const buttonStyle = {
    backgroundColor: "#AA6C39 ",
    borderColor: "#AA6C39 ",
    marginRight: "10px",
  };

  const shareButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#808080", // Vibrant orange background
    borderColor: "#808080", // Matching border color
    color: "white", // White text color
  };

  const [stories, setStories] = useState<Story[]>([]);
  const [storyFormData, setStoryFormData] = useState<Story>({
    id: 0,
    title: "",
    yourStory: "",
    description: "",
    storyAbout: "",
    place: "",
    time: "",
    category: "",
    user: userData ? userData.name : "", // Get user name from userData if available
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [likedStories, setLikedStories] = useState<number[]>([]);
  const [shares, setShares] = useState<{ [key: number]: number }>({});
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<Comment[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStoryFormData({ ...storyFormData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newStory: Story = { ...storyFormData, id: stories.length + 1 };
    setStories([...stories, newStory]);
    setStoryFormData({
      id: 0,
      title: "",
      yourStory: "",
      description: "",
      storyAbout: "",
      place: "",
      time: "",
      category: "",
      user: userData ? userData.name : "", // Get user name from userData if available
    });
  };

  const handleLike = (storyId: number) => {
    if (likedStories.includes(storyId)) {
      // If already liked, remove the like
      setLikes((prevLikes) => ({
        ...prevLikes,
        [storyId]: (prevLikes[storyId] || 0) - 1,
      }));
      setLikedStories(likedStories.filter((id) => id !== storyId));
    } else {
      // If not liked, add the like
      setLikes((prevLikes) => ({
        ...prevLikes,
        [storyId]: (prevLikes[storyId] || 0) + 1,
      }));
      setLikedStories([...likedStories, storyId]);
    }
  };

  const handleShare = async (storyId: number) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out this travel story!",
          text: stories.find((story) => story.id === storyId)?.title || "",
          url: window.location.href,
        });
      } else {
        // Fallback behavior if Web Share API is not supported
        console.log("Web Share API not supported");
        // You can implement custom sharing options here, like copying the link to clipboard
      }
      setShares((prevShares) => ({
        ...prevShares,
        [storyId]: (prevShares[storyId] || 0) + 1,
      }));
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleCommentSubmit = (storyId: number) => {
    if (commentText.trim() !== "") {
      const newComment: Comment = {
        id: comments.length + 1,
        storyId: storyId,
        text: commentText,
        dateTime: new Date().toLocaleString(),
        user: userData ? userData.name : "", // Get user name from userData if available
        likes: 0, // Initialize likes for the new comment
      };
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  const handleLikeComment = (commentId: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: (comment.likes || 0) + 1 }
          : comment
      )
    );
  };

  const handleReply = (commentId: number) => {
    setReplyTo(commentId);
  };

  const handlePostReply = (commentId: number) => {
    if (replyText.trim() !== "") {
      const newReply: Comment = {
        id: replies.length + 1,
        storyId: comments.find((comment) => comment.id === commentId)
          ?.storyId as number,
        text: replyText,
        dateTime: new Date().toLocaleString(),
        user: userData ? userData.name : "", // Get user name from userData if available
        likes: 0, // Initialize likes for the new reply
      };
      setReplies([...replies, newReply]);
      setReplyTo(null);
      setReplyText("");
    }
  };
  return (
    <div
      className="container mt-4"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="container mt-4" style={divStyle}>
            <h2 className="text-center" style={{ color: "brown" }}>
              READ TRAVEL STORIES
            </h2>
            {/* Display other people's stories */}

            <div className="card mb-4" style={divStyle}>
              <div className="card-body">
                <h3 className="card-title" style={cardTitleStyle}>
                  The Hilarious Elephant Encounter
                </h3>
                <div style={cardTextStyle}>
                  <p>
                    <strong>User:</strong> Kabir Carson
                  </p>
                  <p>
                    <strong>Your Story:</strong>As I strolled through the
                    bustling streets of Jaipur, soaking in the vibrant colors
                    and rich culture, little did I know that I was about to
                    experience something truly unforgettable. Suddenly, amidst
                    the chaos of the market, I spotted an elephant approaching.
                    But this was no ordinary elephant – it was adorned with
                    bright, colorful decorations and seemed to be on a mission.
                    Before I could react, it playfully sprayed water in my
                    direction, leaving me drenched and the entire crowd roaring
                    with laughter. It was a moment of pure joy and hilarity that
                    I'll never forget!
                  </p>
                  <p>
                    <strong>Description:</strong> A wild adventure in Jaipur,
                    where I had the most unexpected encounter with an elephant!
                  </p>
                  <p>
                    <strong>Story About:</strong> Myself
                  </p>
                  <p>
                    <strong>Place:</strong> Jaipur, IN
                  </p>
                  <p>
                    <strong>Time:</strong> Summer 2023
                  </p>
                  <p>
                    <strong>Category:</strong> Humor
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary" style={buttonStyle}>
                    Like (0)
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={shareButtonStyle}
                  >
                    Share (0)
                  </button>
                </div>
                <hr />
                <div>
                  <h4 style={{ marginBottom: "10px", color: "#333" }}>
                    Comments:
                  </h4>
                  <textarea
                    placeholder="Add your comment..."
                    className="form-control mb-2"
                    style={{
                      marginBottom: "10px",
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <button
                    className="btn btn-secondary"
                    style={{
                      backgroundColor: "#AA6C39  ",
                      color: "#fff",
                      borderRadius: "5px",
                      padding: "5px 15px",
                      border: "none",
                    }}
                  >
                    Post comment
                  </button>
                  <div
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <p style={{ marginBottom: "5px" }}>
                      <strong>User:</strong> Raquel Patterson
                    </p>
                    <p style={{ color: "#333" }}>Hahaha!</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <div>
                        <button
                          style={{
                            marginRight: "10px",
                            backgroundColor: "#808080",
                            color: "#fff",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            border: "none",
                          }}
                        >
                          Like (0)
                        </button>
                        <button
                          style={{
                            backgroundColor: "#808080",
                            color: "#fff",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            border: "none",
                          }}
                        >
                          Reply
                        </button>
                      </div>
                      <p style={{ color: "#888", fontSize: "0.8em" }}>
                        March 25, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4" style={divStyle}>
              <div className="card-body">
                <h3 className="card-title" style={cardTitleStyle}>
                  Exploring the Wonders of Pashupatinath Mandir
                </h3>
                <div style={cardTextStyle}>
                  <p>
                    <strong>User:</strong> Laura Lawrence
                  </p>
                  <p>
                    <strong>Your Story:</strong> My journey to Kathmandu, Nepal
                    is an unforgettable experience filled with vibrant culture,
                    stunning architechture and warm hospitality ...
                  </p>
                  <p>
                    <strong>Description:</strong>Exploring the rich cultural
                    heritage and hidden gems of Kathmandu, Nepal.
                  </p>
                  <p>
                    <strong>Story About:</strong> Myself
                  </p>
                  <p>
                    <strong>Place:</strong> Kathmandu, NP
                  </p>
                  <p>
                    <strong>Time:</strong> Winter 2024
                  </p>
                  <p>
                    <strong>Category:</strong>Fun, Inspirational
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary" style={buttonStyle}>
                    Like (0)
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={shareButtonStyle}
                  >
                    Share (0)
                  </button>
                </div>
                <hr />
                <div>
                  <h4 style={{ marginBottom: "10px", color: "#333" }}>
                    Comments:
                  </h4>
                  <textarea
                    placeholder="Add your comment..."
                    className="form-control mb-2"
                    style={{
                      marginBottom: "10px",
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <button
                    className="btn btn-secondary"
                    style={{
                      backgroundColor: "#AA6C39  ",
                      color: "#fff",
                      borderRadius: "5px",
                      padding: "5px 15px",
                      border: "none",
                    }}
                  >
                    Post comment
                  </button>
                  <div
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <p style={{ marginBottom: "5px" }}>
                      <strong>User:</strong> Ruhi.Sharma
                    </p>
                    <p style={{ color: "#333" }}>This is so inspiring!</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <div>
                        <button
                          style={{
                            marginRight: "10px",
                            backgroundColor: "#808080",
                            color: "#fff",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            border: "none",
                          }}
                        >
                          Like (0)
                        </button>
                        <button
                          style={{
                            backgroundColor: "#808080",
                            color: "#fff",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            border: "none",
                          }}
                        >
                          Reply
                        </button>
                      </div>
                      <p style={{ color: "#888", fontSize: "0.8em" }}>
                        March 25, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View More Link */}
            <p className="text-center">
              <a href="#" id="viewmore">
                View More
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="container mt-4"
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "20px",
              height: "97.5%",
            }}
          >
            <h2 className="text-center" style={{ color: "orange" }}>
              Share Your Travel Story
            </h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label className="form-label">Story Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={storyFormData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Story:</label>
                <textarea
                  className="form-control"
                  name="yourStory"
                  value={storyFormData.yourStory}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Description:</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={storyFormData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">This Story Is About:</label>
                <select
                  className="form-select"
                  name="storyAbout"
                  value={storyFormData.storyAbout}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="myself">Myself</option>
                  <option value="family member">Family Member</option>
                  <option value="friend">Friend</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Place:</label>
                <input
                  type="text"
                  className="form-control"
                  name="place"
                  value={storyFormData.place}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Time:</label>
                <input
                  type="text"
                  className="form-control"
                  name="time"
                  value={storyFormData.time}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Category:</label>
                <select
                  className="form-select"
                  name="category"
                  value={storyFormData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="travelogue">Travelogue</option>
                  <option value="real life">Real Life</option>
                  <option value="haunting">Haunting</option>
                  <option value="fun">Fun</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "orange", borderColor: "orange" }}
              >
                Submit Story
              </button>
            </form>
            <hr></hr>
            <h2
              className="text-center"
              style={{ marginTop: "20px", color: "darkorange" }}
            >
              All Your Stories:
            </h2>
            {/* Display submitted stories */}
            {stories.map((story) => (
              <div key={story.id} className="card mb-4" style={divStyle}>
                <div className="card-body">
                  <h3 className="card-title" style={cardTitleStyle}>
                    {story.title}
                  </h3>
                  <div style={cardTextStyle}>
                    <p>
                      <strong>User:</strong> {story.user}
                    </p>
                    <p>
                      <strong>Your Story:</strong> {story.yourStory}
                    </p>
                    <p>
                      <strong>Description:</strong> {story.description}
                    </p>
                    <p>
                      <strong>Story About:</strong> {story.storyAbout}
                    </p>
                    <p>
                      <strong>Place:</strong> {story.place}
                    </p>
                    <p>
                      <strong>Time:</strong> {story.time}
                    </p>
                    <p>
                      <strong>Category:</strong> {story.category}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleLike(story.id)}
                      style={buttonStyle}
                    >
                      {likedStories.includes(story.id) ? "Unlike" : "Like"} (
                      {likes[story.id] || 0})
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleShare(story.id)}
                      style={shareButtonStyle}
                    >
                      Share ({shares[story.id] || 0})
                    </button>
                  </div>
                  <hr />
                  <div>
                    <h4 style={{ marginBottom: "10px", color: "#333" }}>
                      Comments:
                    </h4>
                    {/* Filter comments based on storyId */}
                    {comments
                      .filter((comment) => comment.storyId === story.id)
                      .map((comment) => (
                        <div
                          key={comment.id}
                          style={{
                            marginBottom: "10px",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            padding: "10px",
                          }}
                        >
                          <p
                            style={{ fontWeight: "bold", marginBottom: "5px" }}
                          >
                            <strong>User:</strong> {comment.user}
                          </p>
                          <p style={{ color: "#333" }}>{comment.text}</p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginTop: "10px",
                            }}
                          >
                            <div>
                              <button
                                onClick={() => handleLikeComment(comment.id)}
                                style={{
                                  marginRight: "10px",
                                  backgroundColor: "#007bff",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  padding: "5px 10px",
                                  border: "none",
                                }}
                              >
                                Like ({comment.likes || 0})
                              </button>
                              <button
                                onClick={() => handleReply(comment.id)}
                                style={{
                                  backgroundColor: "#808080",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  padding: "5px 15px",
                                  border: "none",
                                }}
                              >
                                Reply
                              </button>
                            </div>
                            <p style={{ color: "#888", fontSize: "0.8em" }}>
                              {comment.dateTime}
                            </p>
                          </div>
                          {/* Reply textarea */}
                          {replyTo === comment.id && (
                            <div style={{ marginTop: "10px" }}>
                              <textarea
                                placeholder="Reply to this comment..."
                                className="form-control mb-2"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                style={{
                                  width: "100%",
                                  padding: "5px",
                                  borderRadius: "5px",
                                  border: "1px solid #ddd",
                                }}
                              />
                              <button
                                className="btn btn-secondary"
                                onClick={() => handlePostReply(comment.id)}
                                style={{
                                  backgroundColor: "#808080",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  padding: "5px 15px",
                                  border: "none",
                                }}
                              >
                                Post Reply
                              </button>
                            </div>
                          )}
                          {/* Display replies */}
                          {replies
                            .filter((reply) => reply.id === comment.id)
                            .map((reply) => (
                              <div
                                key={reply.id}
                                style={{
                                  marginLeft: "20px",
                                  marginTop: "10px",
                                  borderLeft: "2px solid #007bff",
                                  paddingLeft: "10px",
                                }}
                              >
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <strong>User:</strong> {reply.user}
                                </p>
                                <p style={{ color: "#333" }}>{reply.text}</p>
                                <p style={{ color: "#888", fontSize: "0.8em" }}>
                                  {reply.dateTime}
                                </p>
                              </div>
                            ))}
                        </div>
                      ))}
                    <textarea
                      placeholder="Add your comment..."
                      className="form-control mb-2"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      style={{
                        marginBottom: "10px",
                        width: "100%",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                      }}
                    />
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleCommentSubmit(story.id)}
                      style={{
                        backgroundColor: "#AA6C39 ",
                        color: "#fff",
                        borderRadius: "5px",
                        padding: "5px 15px",
                        border: "none",
                      }}
                    >
                      Post comment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stories;
