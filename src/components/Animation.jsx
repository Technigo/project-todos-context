import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../components/animation.css";

export const Animation = () => {
  return (
    <div className="animation-container">
    <DotLottieReact
      src="https://lottie.host/6e207fce-11d0-41f0-bab8-c89075cabd3a/3eSHcVskSv.json"
      loop
      autoplay
      className="lottie-animation"
    />
    </div>
  );
};
