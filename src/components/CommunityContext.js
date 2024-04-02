// Create a new file named CommunityContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const CommunityContext = createContext();

// Create a provider component
export const CommunityProvider = ({ children }) => {
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  const addJoinedCommunity = (community) => {
    setJoinedCommunities([...joinedCommunities, community]);
  };

  return (
    <CommunityContext.Provider value={{ joinedCommunities, addJoinedCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};

// Custom hook to consume the context
export const useCommunity = () => {
  return useContext(CommunityContext);
};
