"use client";

import classes from "@/styles/components/_caroucel.module.scss";
import { Carousel } from "@mantine/carousel";
import { StyleProp } from "@mantine/core";
import React from "react";

type MantineCaroucel = {
  children: React.ReactNode;
  slideSize: StyleProp<string | number>;
  height?: string | number;
  className?: string;
};

export const MantineCaroucel = React.memo(
  ({
    children,
    height = 500,
    slideSize = "100%",
    className = "w-full min-w-full flex-1",
  }: MantineCaroucel) => {
    return (
      <Carousel
        slideSize={slideSize}
        height={height}
        slidesToScroll={1}
        controlSize={32}
        loop
        slideGap="xs"
        align={"start"}
        withIndicators
        w={"100%"}
        className={className}
        classNames={classes}
      >
        {children}
      </Carousel>
    );
  }
);

export const MantineCaroucelSlide = React.memo(
  ({
    children,
    width = "100%",
    height = "100%",
  }: {
    children: React.ReactNode;
    width?: string | number;
    height?: string | number;
  }) => {
    return (
      <Carousel.Slide w={width} h={height}>
        {children}
      </Carousel.Slide>
    );
  }
);

MantineCaroucel.displayName = "MantineCaroucel";
MantineCaroucelSlide.displayName = "MantineCaroucelSlide";
