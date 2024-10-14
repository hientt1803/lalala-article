"use client";

import { Drawer } from "@mantine/core";
import React from "react";

type DrawerProps = {
  opened: boolean;
  onClose: () => void | any;
  styles?: any;
  className?: string;
  classNames?: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | string;
  position?: "bottom" | "left" | "right" | "top";
  offset?: number;
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
  title?: string;
  withCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  children: React.ReactNode;
};

const MainDrawerComponent = (props: DrawerProps) => {
  const {
    opened,
    onClose,
    styles,
    size,
    position,
    offset,
    radius,
    className,
    classNames,
    title,
    children,
    withCloseButton = true,
    closeOnClickOutside = true,
  } = props;
  // classNames = {
  //   content: "md:w-full md:max-w-[415px]",
  // },
  return (
    <Drawer
      opened={opened}
      onClose={() => {
        onClose();
      }}
      offset={offset}
      radius={radius}
      position={position}
      size={size}
      styles={styles}
      title={title}
      className={className}
      classNames={classNames}
      withCloseButton={withCloseButton}
      closeOnClickOutside={closeOnClickOutside}
    >
      {children}
    </Drawer>
  );
};
export const MainDrawer = React.memo(MainDrawerComponent);
