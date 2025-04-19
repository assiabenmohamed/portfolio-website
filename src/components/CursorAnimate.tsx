import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CursorAnimate() {
  return (
    <div className="hidden xl:block">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={["a", "button", ".link", ".cursor-hover"]}
      />
    </div>
  );
}

export default CursorAnimate;
