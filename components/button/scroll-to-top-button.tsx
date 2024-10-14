"use client";

import { cn } from "@/lib";
import { Transition } from "@mantine/core";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useMemo, useCallback } from "react";

const ScrollToTopButton = () => {
  const [rightPosition, setRightPosition] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Progress bar state
  const [y, setY] = useState(0); // Storing current scroll bar position
  const [totalY, setTotalY] = useState<number>(0); // Storing total scrollable area

  // Calculate the circular path length for the SVG circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  // Handle scroll progress and calculate total scrollable area
  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const element = document.documentElement;
    setTotalY(element.scrollHeight - window.innerHeight); // Calculate total scrollable area

    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  // Calculate the scroll progress
  const scrollProgress = useMemo(() => {
    const progress = (y / totalY) * 100; // Percentage of scroll
    return Math.min(progress, 100); // Ensure it doesn't exceed 100%
  }, [y, totalY]);

  // Calculate the stroke-dashoffset to create the animated progress effect
  const dashOffset = useMemo(() => {
    return circumference - (scrollProgress / 100) * circumference;
  }, [scrollProgress, circumference]);

  // Adjust the right position of the button dynamically based on window width
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1200) {
        setRightPosition((windowWidth - 1200) / 2 + 40); // Center with some offset
      } else {
        setRightPosition(10); // Default right position for smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial position on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (scrollProgress == 100) {
      setMounted(true);
    }

    if (mounted && scrollProgress < 100) {
      setTimeout(() => {
        setMounted(false);
      }, 100);
    }
  }, [mounted, scrollProgress]);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <React.Fragment>
      {scrollProgress > 5 && (
        <div
          className={cn(
            "fixed bottom-10 w-10 h-10 bg-[#fff] cursor-pointer group rounded-full transition-all z-40 flex items-center justify-center"
          )}
          style={{ right: `${rightPosition}px` }}
          onClick={handleScrollTop}
        >
          {/* SVG Circle for Progress Indicator */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            className="absolute"
          >
            <circle
              className="text-[#fff]"
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
            <circle
              className="text-[#212121]"
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{
                transition: "stroke-dashoffset 0.3s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>

          {/* Scroll-to-Top Button Icon */}
          {scrollProgress !== 100 ? (
            <span className="transition-all text-[#212121] text-xs font-bold">
              {scrollProgress.toFixed(0)}
            </span>
          ) : (
            <Transition
              mounted={mounted}
              transition="slide-up"
              duration={600}
              timingFunction="ease"
            >
              {(styles) => (
                <div style={styles}>
                  <ArrowUp className="transition-all relative w-5 h-5 text-[#212121] cursor-pointer group-hover:animate-pulse" />
                </div>
              )}
            </Transition>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(ScrollToTopButton);
