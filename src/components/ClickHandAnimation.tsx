import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ClickHandAnimationProps {
  breakpoint?: number;
  xPosition?: "left" | "center" | "right" | string;
  yPosition?: "top" | "center" | "bottom" | string;
  size?: number;
  loopDelay?: number;
}

export function ClickHandAnimation({
  breakpoint = 640,
  xPosition = "center",
  yPosition = "center",
  size = 40,
  loopDelay = 1500,
}: ClickHandAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setShowAnimation(window.innerWidth < breakpoint);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, [breakpoint]);

  if (!showAnimation) return null;

  const getPositionStyle = () => {
    const baseStyle: React.CSSProperties = {
      position: "absolute",
      pointerEvents: "none",
      zIndex: 10,
    };

    if (xPosition === "left") baseStyle.left = "1rem";
    else if (xPosition === "center") baseStyle.left = "50%";
    else if (xPosition === "right") baseStyle.right = "1rem";
    else baseStyle.left = xPosition;

    if (yPosition === "top") baseStyle.top = "1rem";
    else if (yPosition === "center") baseStyle.top = "50%";
    else if (yPosition === "bottom") baseStyle.bottom = "1rem";
    else baseStyle.top = yPosition;

    if (xPosition === "center") baseStyle.transform = "translateX(-50%)";
    if (yPosition === "center") {
      baseStyle.transform = baseStyle.transform
        ? `${baseStyle.transform} translateY(-50%)`
        : "translateY(-50%)";
    }

    return baseStyle;
  };

  const handVariants = {
    initial: {
      y: 0,
      scale: 1,
    },
    click: {
      y: [0, 12, 0],
      scale: [1, 0.9, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.5, 1],
        ease: "easeInOut",
      },
    },
  };

  const blinkVariants = {
    initial: {
      opacity: 1,
    },
    blink: {
      opacity: [0.8, 0.3, 0.2, 0.1, 0.8],
      transition: {
        duration: 3,
        times: [0, 0.2, 0.3, 0.8, 1],
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      style={getPositionStyle()}
      variants={handVariants}
      initial="initial"
      animate="click"
      transition={{
        repeat: Infinity,
        repeatDelay: loopDelay / 1000,
      }}
    >
      <motion.img
        src="/images/click.png"
        alt="Clique aqui"
        variants={blinkVariants}
        initial="initial"
        animate="blink"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: "contain",
          userSelect: "none",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: -14,
          left: -8,
          width: `${size + 8}px`,
          height: `${size + 8}px`,
          borderRadius: "50%",
          border: "2px solid #d87934",
          pointerEvents: "none",
        }}
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{
          scale: [1, 1.3],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          repeatDelay: loopDelay / 1000,
        }}
      />
    </motion.div>
  );
}

export default ClickHandAnimation;
