import useToggleHomePageInfo from "../../hooks/use-show-home-page-info";

import Info from "./info.component";
import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import { ShowInfoButton } from "./home.styles";

import { Div } from "../../styles/div/div.styles";

import FishAndChips from "../../assets/fish-and-chips-large.jpeg";
import FishAndChipsPlaceholder from "../../assets/fish-and-chips-placeholder.jpeg";

const Intro = () => {
  const { toggleHomePageInfo, showInfo } = useToggleHomePageInfo();

  return (
    <Div>
      <h1>welcome to the happy haddock!</h1>
      <hr />
      <h2 className="demo">please note that this is a demonstration app! :)</h2>

      {!showInfo && (
        <>
          <hr />
          <ShowInfoButton onClick={toggleHomePageInfo}>
            find out more
          </ShowInfoButton>
          <hr />
        </>
      )}

      <Info {...{ showInfo, toggleHomePageInfo }} />

      <ProgressiveImg
        src={FishAndChips}
        placeholderSrc={FishAndChipsPlaceholder}
        alt="fish and chips"
      />
    </Div>
  );
};

export default Intro;
