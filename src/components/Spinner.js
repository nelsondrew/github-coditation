import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";
export const Spinner = () => {
  return (
    <div>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </div>
  );
};

export default Spinner;
