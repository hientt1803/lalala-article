import { Button, MantineSize } from "@mantine/core";

import React from "react";

interface IButton {
  color?:
    | "dark"
    | "gray"
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "green"
    | "lime"
    | "yellow"
    | "orange"
    | "teal"
    | string;
  variant?:
    | "outline"
    | "default"
    | "filled"
    | "gradient"
    | "light"
    | "outline"
    | "subtile"
    | "transparent"
    | "white";
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disable?: boolean;
  size?: MantineSize;
  leftSection?: any;
  radius?: MantineSize | string | number;
  rightSection?: any;
  loading?: boolean;
  onClick?: () => void;
}

const PrimaryButtonComponent = ({
  color = "#006ce3",
  variant = "filled",
  fullWidth = false,
  className = "",
  children,
  type = "button",
  size,
  disable = false,
  radius,
  leftSection = null,
  rightSection = null,
  loading = false,
  onClick,
}: IButton) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      className={className}
      onClick={onClick}
      type={type}
      disabled={disable}
      radius={radius}
      size={size}
      leftSection={leftSection}
      rightSection={rightSection}
      loading={loading}
      loaderProps={{ type: "oval" }}
    >
      {children}
    </Button>
  );
};
export const PrimaryButton = React.memo(PrimaryButtonComponent);
