import React from "react";
import DarkVeil from "../DarkVeil";

const Background = ( { children } ) => {
  return (  
      <div>
      <div className="absolute min-h-screen w-full select-none ">
        <div className="fixed inset-0 -z-10">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
      </div>
      <div className="z-10 h-screen flex justify-center items-center">{children}</div>
    </div>
  );
};

export default Background;
