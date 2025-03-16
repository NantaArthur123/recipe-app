
import { useEffect, useState } from "react";

/**
 * Custom hook to create a shimmer effect on text with a cooldown
 * @param text The text to animate
 * @param speed Animation speed in ms (default: 40ms)
 * @param cooldown Time before the next sweep starts (default: 2000ms)
 * @returns Brightness values for each letter
 */
export function useTextSweepEffect(
    text: string,
    speed: number = 40,
    cooldown: number = 4000
  ) {
    const letters = text.split("");
    const [brightnessValues, setBrightnessValues] = useState(
      Array(letters.length).fill(0)
    );
  
    useEffect(() => {
      let position = -5;
      let isRunning = true; // Controls animation state
  
      const animate = () => {
        if (!isRunning) return;
  
        position += 1;
        if (position > letters.length + 5) {
          isRunning = false; // Stop animation
          setTimeout(() => {
            position = -5;
            isRunning = true; // Resume animation
            animate(); // Restart after cooldown
          }, cooldown);
          return;
        }
  
        // Update brightness values smoothly
        setBrightnessValues(
          letters.map((_, index) => {
            const distance = Math.abs(index - position);
            return distance > 5 ? 0 : Math.max(0, 1 - distance / 5);
          })
        );
  
        setTimeout(animate, speed); // Recursively trigger next step
      };
  
      animate(); // Start the animation
  
      return () => {
        isRunning = false; // Cleanup to prevent flickering on unmount
      };
    }, [text, speed, cooldown]);
  
    return brightnessValues;
  }