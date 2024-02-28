import React, { useState, useEffect } from 'react';
import './Rocket.css';

const RocketLaunch = () => {
  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.8; // Adjust the radius as needed

    let angle = 0;
    const updateRocketPosition = () => {
      const newX = centerX + radius * Math.cos(angle);
      const newY = centerY + radius * Math.sin(angle);
      setRocketPosition({ x: newX, y: newY });

      angle += 0.01; // Adjust speed of rotation
      if (angle >= 2 * Math.PI) {
        angle = 0;
      }
    };

    const animationId = setInterval(updateRocketPosition, 16); // 60 frames per second

    return () => clearInterval(animationId);
  }, []);

  return (
    <div className="rocket-container">
      <img src="/images/Rocket.svg" alt="rocket" className="rocket" style={{ left: rocketPosition.x, top: rocketPosition.y }} />
    </div>
  );
};

export default RocketLaunch;
