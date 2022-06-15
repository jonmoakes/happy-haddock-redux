import { useState } from "react";
import { useLocation } from "react-router-dom";

import IosInstructions from "./ios-instructions";
import AndroidInstructions from "./android-instructions";

import {
  PwaDiv,
  CopywriteText,
  WebLink,
  IosButton,
  AndroidButton,
  PrivacyDiv,
  PrivacyLink,
  Hr,
} from "./footer.styles";

const Footer = () => {
  const [showIos, setShowIos] = useState(false);
  const [showAndroid, setShowAndroid] = useState(false);

  const location = useLocation();

  return (
    <>
      {(location.pathname === "/" || location.pathname === "/contact") && (
        <PwaDiv>
          <p>
            Add This Website To Your Device's Home Screen for the best full
            screen experience!
          </p>
          <p>no app store needed!</p>

          <IosButton onClick={() => setShowIos(!showIos)}>
            {!showIos ? (
              <>show apple instructions</>
            ) : (
              <>hide apple Instructions</>
            )}
          </IosButton>
          {showIos && <IosInstructions />}

          <AndroidButton onClick={() => setShowAndroid(!showAndroid)}>
            {!showAndroid ? (
              <>show Android instructions</>
            ) : (
              <>hide Android Instructions</>
            )}
          </AndroidButton>
          {showAndroid && <AndroidInstructions />}

          <Hr />

          <PrivacyDiv>
            <span>
              <PrivacyLink to="/privacy-policy">Privacy Policy</PrivacyLink>
            </span>
          </PrivacyDiv>
          <PrivacyDiv>
            <span>
              <PrivacyLink to="/cookie-policy">Cookie Policy</PrivacyLink>
            </span>
          </PrivacyDiv>

          <CopywriteText>Copyright © Solaris Apps, 2022</CopywriteText>
          <CopywriteText>
            app design by{" "}
            <WebLink href="https://www.solaris-apps.co.uk">
              Solaris Apps
            </WebLink>
          </CopywriteText>
          <Hr />
        </PwaDiv>
      )}
    </>
  );
};

export default Footer;
