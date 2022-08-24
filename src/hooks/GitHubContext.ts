import { useContext } from "react";
import { GitHubContext } from "services/context/GitHubList";

export const useGitHubContext = () => {
  const context = useContext(GitHubContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }
  return context;
};

export default useGitHubContext;
