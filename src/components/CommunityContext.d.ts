// Create a file named CommunityContext.d.ts in the same directory as CommunityContext.js

// Declare module augmentation for the custom context module
declare module './components/CommunityContext' {
    import { Context } from 'react';
    
    // Define the types for the context value
    interface CommunityContextValue {
      joinedCommunities: Community[];
      addJoinedCommunity: (community: Community) => void;
    }
  
    // Export the context type
    export const CommunityContext: Context<CommunityContextValue>;
  }
  