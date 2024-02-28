"use client";
import React, { useEffect } from 'react';

const Starfield = ({ speedFactor = 0.05, backgroundColor = 'black', starColor = [255, 0, 0], starCount = 5000 }) => {
  useEffect(() => {
    let canvas = document.getElementById('starfield');

    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'starfield';
      document.body.appendChild(canvas);
    }

    const c = canvas.getContext('2d');

    const setCanvasExtents = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasExtents();

    window.addEventListener('resize', setCanvasExtents);

    const makeStars = count => {
      const out = [];
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        };
        out.push(s);
      }
      return out;
    };

    let stars = makeStars(starCount);

    const clear = () => {
      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x, y, brightness) => {
      const rgb = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
      c.fillStyle = rgb;
      c.fillRect(x, y, 1, 1);
    };

    const moveStars = distance => {
      stars.forEach(s => {
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
        }
      });
    };

    let prevTime = performance.now();
    const tick = time => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);

      clear();

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach(star => {
        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
          const d = star.z / 1000.0;
          const b = 1 - d * d;
          putPixel(x, y, b);
        }
      });

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', setCanvasExtents);
    };
  }, [backgroundColor, speedFactor, starColor, starCount]);

  return <canvas id="starfield" className="fixed inset-0 z-40 opacity-100 pointer-events-none mix-blend-screen" />;
};

export default Starfield;
