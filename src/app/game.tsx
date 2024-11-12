"use client";
import Image from "next/image";
import { useState } from "react";
import { experiment } from "./amplitudeWrapper";

export default function Game() {
  const [imageSrc, setImageSrc] = useState("/question.png");
  const [clicked, setClicked] = useState(false);

  // Please replace "your-experiment-feature-flag" with the actual feature flag name

  const handleButtonClick = () => {
    setImageSrc(
      `/${
        experiment.variant("your-experiment-feature-flag")?.value === "control"
          ? "bear.png"
          : "rabbit.png"
      }`
    );
    setClicked(true);
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageSrc}
        alt="Display image"
        width={200}
        height={200}
        className="pb-2"
      />
      {clicked && (
        <h3 className="text-2xl">
          I AM THE EXPERIMENT MASTER
          <br />
          {experiment
            .variant("your-experiment-feature-flag")
            ?.value?.toString()
            .toUpperCase()}
        </h3>
      )}
      <button
        onClick={handleButtonClick}
        className="mt-4 p-2 border-none bg-blue-500 rounded-md text-white"
      >
        Show me the result!!!!
      </button>
    </div>
  );
}
