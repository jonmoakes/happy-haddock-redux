import { useLocation } from "react-router-dom";
import { Text } from "../../styles/bounce-in-down-div/bounce-in-down-div.styles";

const ChooseCategoryHelp = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/menu" && (
        <>
          <h2>choosing a category:</h2>
          <Text>simply tap on a category name to view its products.</Text>
          <hr />
        </>
      )}
    </>
  );
};

export default ChooseCategoryHelp;
