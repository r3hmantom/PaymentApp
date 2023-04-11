import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={80}
        color="52, 188, 207"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default AnimCursor;
