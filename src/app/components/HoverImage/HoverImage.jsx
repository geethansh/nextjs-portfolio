// HoverImage.jsx
import React, { useState } from "react";
import Image from "next/image";
import styles from "./HoverImage.module.css";

const HoverImage = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image src={src} width={100} height={100} alt={alt} />
      {isHovered && <div className={styles.overlay}>{alt}</div>}
    </div>
  );
};

export default HoverImage;
