"use client";

import { ScrollArea } from "@mantine/core";

import React from "react";

type IMainScrollAre = {
  children: React.ReactNode;
  className?: string;
  type?: "hover" | "auto" | "always" | "scroll" | "never";
  scrollbarSize?: string | number;
  mb?: number | string;
  py?: number | string;
  scrollbars?: false | "x" | "y" | "xy";
};

const MainScrollAreaComponent = (props: IMainScrollAre) => {
  const { children, scrollbarSize, type = "hover", className, mb, py } = props;
  return (
    <ScrollArea
      className={className}
      type={type}
      scrollbarSize={scrollbarSize}
      mb={mb}
      py={py}
    >
      {children}
    </ScrollArea>
  );
};
export const MainScrollArea = React.memo(MainScrollAreaComponent);
