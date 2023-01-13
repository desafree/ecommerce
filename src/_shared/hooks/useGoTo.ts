import { useNavigate } from "react-router-dom";

export const useGoTo = (internalLink: string) => {
  const navigate = useNavigate();

  return () => {
    navigate(internalLink);
  };
};
