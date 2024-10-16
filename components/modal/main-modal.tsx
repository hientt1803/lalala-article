"use client"

import { MantineSize, Modal } from "@mantine/core";
import React from "react";

type IMainModal = {
  opened: boolean;
  onClose: () => void | any;
  title?: string;
  styles?: any;
  classNames?: any;
  className?: string;
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
  centered?: boolean;
  size?: MantineSize | string;
  fullScreen?: boolean;
  children: React.ReactNode;
};
export const MainModalComponent = (props: IMainModal) => {
  const {
    opened,
    onClose,
    styles,
    title,
    className,
    classNames = {
      // content: "md:w-full md:max-w-[415px]"
    },
    centered = false,
    radius,
    size,
    fullScreen,
    children,
  } = props;
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      styles={styles}
      radius={radius}
      className={className}
      classNames={classNames}
      centered={centered}
      size={size}
      fullScreen={fullScreen}
    >
      {children}
    </Modal>
  );
};

export const MainModal = React.memo(MainModalComponent);