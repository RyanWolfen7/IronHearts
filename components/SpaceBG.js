import React from 'react';

const SpaceBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
      overflow: 'hidden'
    }}>
      {[...Array(1000)].map((_, index) => {
        const delay = Math.random() * 2;
        return (
          <div key={index} style={{
            position: 'absolute',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            width: '1px',
            height: '1px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            animation: 'pulse 1s ease-in-out infinite',
            animationDelay: `${delay}s`
          }} />
        );
      })}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;
