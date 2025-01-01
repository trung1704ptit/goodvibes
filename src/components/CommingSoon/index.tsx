import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[75vh] p-3">
      <div className="text-center">
        {/* Big Gradient Text */}
        <h1 style={{ lineHeight: 1.5 }}className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#17a2b7] via-[#7371b2] to-[#e847ec]">
          Coming Soon
        </h1>

        {/* Supporting Text */}
        <p className="mt-8 text-lg md:text-2xl">
          We’re working hard to bring something amazing your way. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
