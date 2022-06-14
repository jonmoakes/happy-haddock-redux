import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useConfirmGoBackSwal from "../../hooks/swals/use-confirm-go-back-swal";

import { ReactComponent as BackArrowSVG } from "../../assets/arrow-left-1.svg";
import { BackButton, RelativePositionDiv } from "./floating-back-button.styles";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const FloatingBackButton = () => {
  const { confirmGoBackSwal } = useConfirmGoBackSwal();
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {window.matchMedia("(display-mode: standalone)").matches &&
        width <= 1024 &&
        (location.pathname.includes("menu/") ? (
          <RelativePositionDiv>
            <BackButton onClick={() => navigate(-1)}>
              <BackArrowSVG />
            </BackButton>
          </RelativePositionDiv>
        ) : (
          window.matchMedia("(display-mode: standalone)").matches &&
          location.pathname.includes("product") && (
            <RelativePositionDiv>
              <BackButton onClick={confirmGoBackSwal}>
                <BackArrowSVG />
              </BackButton>
            </RelativePositionDiv>
          )
        ))}
    </>
  );
};

export default FloatingBackButton;
