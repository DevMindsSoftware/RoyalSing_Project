import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setTrailPosition((prevTrailPosition) => {
        const dx = position.x - prevTrailPosition.x;
        const dy = position.y - prevTrailPosition.y;
        const speed = 0.1; // Adjust the speed here

        return {
          x: prevTrailPosition.x + dx * speed,
          y: prevTrailPosition.y + dy * speed,
        };
      });
    };

    const interval = setInterval(followCursor, 16); // Run at ~60fps

    return () => {
      clearInterval(interval);
    };
  }, [position]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 147, 1, 1)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
        }}
      ></div>
      <div
        style={{
          position: 'fixed',
          top: trailPosition.y,
          left: trailPosition.x,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 147, 1, 0.3)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 999,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
