import { useState } from "react";

const useToggleHomePageInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleHomePageInfo = () => {
    setShowInfo(!showInfo);
  };

  return { showInfo, toggleHomePageInfo };
};

export default useToggleHomePageInfo;
