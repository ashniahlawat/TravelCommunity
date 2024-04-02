import React, { useEffect, useState } from "react";

const Leaderboard: React.FC = () => {
  const generateRandomPoints = (badge: string): number => {
    if (badge === "Gold") {
      return Math.floor(Math.random() * (2000 - 1000) + 1000); // Generate points between 1000 and 2000 for gold badges
    } else if (badge === "Silver") {
      return Math.floor(Math.random() * (1000 - 500) + 500); // Generate points between 500 and 1000 for silver badges
    } else {
      return Math.floor(Math.random() * (500 - 100) + 100); // Generate points between 100 and 500 for bronze badges
    }
  };

  const generateRandomBadge = (index: number): string => {
    if (index < 7) {
      return "Gold"; // First 7 users get gold badges
    } else if (index < 17) {
      return "Silver"; // Next 10 users get silver badges
    } else {
      return "Bronze"; // Rest get bronze badges
    }
  };

  const generateRandomUser = (
    index: number
  ): { name: string; points: number; badge: string } => {
    const badges = ["Gold", "Silver", "Bronze"];
    const nameList = [
      "Aditya",
      "Aarav",
      "Aaryan",
      "Saanvi",
      "Vivaan",
      "Anaya",
      "Advik",
      "Anvi",
      "Vihaan",
      "Prisha",
      "Kabir",
      "Anaya",
      "Anika",
      "Advait",
      "Aarav",
      "Vivaan",
      "Anvi",
      "Vihaan",
      "Advik",
      "Advait",
    ];
    const name = nameList[Math.floor(Math.random() * nameList.length)];
    const badge = generateRandomBadge(index);
    const points = generateRandomPoints(badge);
    return { name, points, badge };
  };

  const users: { rank: number; name: string; points: number; badge: string }[] =
    [];
  for (let i = 0; i < 20; i++) {
    const user = generateRandomUser(i);
    users.push({ ...user, rank: i + 1 });
  }

  // Simulate the current user's rank (position in the list)
  const [currentUserRank, setCurrentUserRank] = useState<number | null>(null);

  useEffect(() => {
    // Simulate fetching user data from the backend and determining the rank
    const simulateUserRank = () => {
      // Here you can replace this with your logic to determine the current user's rank
      const currentUser = users.find((user) => user.name === "Your Name"); // Replace "Your Name" with the user's actual name
      if (currentUser) {
        setCurrentUserRank(currentUser.rank);
      }
    };

    simulateUserRank();
  }, []);

  return (
    <div style={{ maxWidth: "90%", margin: "20px auto", padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "24px",
          marginBottom: "20px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Leaderboard
        <br />
        <h6 style={{ textAlign: "center" }}>
          Your Current Rank:{" "}
          {currentUserRank !== null ? currentUserRank : "139"}
        </h6>
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#f0f0f0",
            fontWeight: "bold",
          }}
        >
          <div>User Rank</div>
          <div>User Name</div>
          <div>Points</div>
          <div>Badge</div>
        </div>
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "10px 20px",
              borderBottom: "1px solid #ddd",
              backgroundColor:
                user.badge === "Gold"
                  ? "#ffd700"
                  : user.badge === "Silver"
                  ? "#c0c0c0"
                  : "#cd7f32",
            }}
          >
            <div>{user.rank}</div>
            <div>{user.name}</div>
            <div>{user.points}</div>
            <div>{user.badge}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
