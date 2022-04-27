import { InstructionsDiv } from "./footer.styles";

const IosInstructions = () => (
  <InstructionsDiv>
    <p>
      if you aren't looking at the website on Safari
      <br />
      launch it and navigate to the app's page:
    </p>
    <p className="link">https://happy-haddock.herokuapp.com</p>

    <ul className="instructions">
      <li>
        Tap the Bookmark icon at the bottom of the screen ( iPhones ) or top
        right of the screen ( iPads )
        <br />
        <span>
          ( you may have to scroll the page slightly to show the options. then,
          look for the icon - it resembles a box with an upward-pointing arrow
          ).
        </span>
      </li>
      <li>Tap "Add to Home Screen".</li>
      <li>Wait a second for the app's logo to load.</li>
      <li>
        Accept the Happy Haddock name for the shortcut
        <br />
        <span>( or enter one you like better ).</span>
      </li>
      <li>tap "Add" to save the new shortcut icon to the home screen</li>
      <p>
        you can then access it as you would access an app downloaded from the
        apple app store - with the best full screen experience!
      </p>
    </ul>
  </InstructionsDiv>
);

export default IosInstructions;
