import React from "react";
import SoftAurora from "../SoftAurora";

const Background = ({ children }) => {
  return (
    <div>
      <div className="absolute min-h-screen w-full bg-black/95 -z-10">
        <div className="fixed inset-0">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#f7f7f7"
            color2="#e100ff"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction={false}
            mouseInfluence={0.25}
          />
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Background;
