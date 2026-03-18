import React from 'react';

const ParticlesBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <span className="absolute w-[3px] h-[3px] bg-primary rounded-full opacity-0 animate-[fpFloat_12s_linear_infinite_0s] left-[5%]" />
      <span className="absolute w-[3px] h-[3px] bg-primary rounded-full opacity-0 animate-[fpFloat_15s_linear_infinite_2s] left-[25%]" />
      <span className="absolute w-[3px] h-[3px] bg-primary rounded-full opacity-0 animate-[fpFloat_10s_linear_infinite_4s] left-[50%]" />
      <span className="absolute w-[3px] h-[3px] bg-primary rounded-full opacity-0 animate-[fpFloat_14s_linear_infinite_1s] left-[75%]" />
      <span className="absolute w-[3px] h-[3px] bg-primary rounded-full opacity-0 animate-[fpFloat_11s_linear_infinite_3s] left-[95%]" />
      <span className="absolute w-[3px] h-[3px] bg-primary rounded-full opacity-0 animate-[fpFloat_13s_linear_infinite_5s] left-[15%]" />
    </div>
  );
};

export default ParticlesBackground;
