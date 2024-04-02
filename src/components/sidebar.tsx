// import { useState } from "react";
// import "../App.css"; // Import your CSS file for styling

// interface SidebarProps {
//   onUserProfileClick: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ onUserProfileClick }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleUserProfileClick = () => {
//     setIsOpen(true);
//     onUserProfileClick(); // This function should handle opening the login page
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-item" onClick={handleUserProfileClick}>
//         User Profile
//       </div>
//       <div className="sidebar-item">Explore</div>
//       <div className="sidebar-item">Communities</div>
//       <div className="sidebar-item">Merchandise</div>
//     </div>
//   );
// };

// export default Sidebar;
import { useState } from "react";
import "../App.css"; // Import your CSS file for styling

interface SidebarProps {
  onUserProfileClick: () => void;
  onMerchandiseClick: () => void;
  onStoriesClick: () => void; // Add new prop for merchandise click event
  onExploreClick: () => void;
  onGroupsClick: () => void;
  onRixiClick: () => void;
  onFriendsClick: () => void;
  onBoardClick: () => void;
  onCalendarClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onUserProfileClick,
  onMerchandiseClick,
  onStoriesClick,
  onExploreClick,
  onGroupsClick,
  onRixiClick,
  onFriendsClick,
  onBoardClick,
  onCalendarClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUserProfileClick = () => {
    setIsOpen(true);
    onUserProfileClick(); // This function should handle opening the login page
  };

  const handleMerchandiseClick = () => {
    setIsOpen(true);
    onMerchandiseClick(); // This function should handle displaying merchandise
  };

  const handleStoriesClick = () => {
    setIsOpen(true);
    onStoriesClick(); // This function should handle displaying stories
  };

  const handleExploreClick = () => {
    setIsOpen(true);
    onExploreClick(); // This function should handle displaying merchandise
  };
  const handleGroupsClick = () => {
    setIsOpen(true);
    onGroupsClick(); // This function should handle displaying merchandise
  };
  const handleRixiClick = () => {
    setIsOpen(true);
    onRixiClick(); // This function should handle displaying merchandise
  };
  const handleFriendsClick = () => {
    setIsOpen(true);
    onFriendsClick(); // This function should handle displaying merchandise
  };

  const handleBoardClick = () => {
    setIsOpen(true);
    onBoardClick(); // This function should handle displaying merchandise
  };
  const handleCalendarClick = () => {
    setIsOpen(true);
    onCalendarClick(); // This function should handle displaying merchandise
  };
  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={handleUserProfileClick}>
        User Profile
      </div>
      <div className="sidebar-item" onClick={handleStoriesClick}>
        Stories
      </div>
      <div className="sidebar-item" onClick={handleMerchandiseClick}>
        Merchandise
      </div>
      <div className="sidebar-item" onClick={handleExploreClick}>
        Explore
      </div>
      <div className="sidebar-item" onClick={() => console.log()}>
        All Communities
      </div>
      <div className="sidebar-item" onClick={handleGroupsClick}>
        Groups
      </div>
      <div className="sidebar-item" onClick={handleFriendsClick}>
        Friends
      </div>
      <div className="sidebar-item" onClick={handleCalendarClick}>
        Calendar and Finance
      </div>
      <div className="sidebar-item" onClick={handleBoardClick}>
        R J Boards 2024
      </div>
      <div className="sidebar-item" onClick={handleRixiClick}>
        Rixi
      </div>
      <div className="sidebar-item" onClick={() => console.log()}>
        Polls and Surveys
      </div>
    </div>
  );
};

export default Sidebar;
