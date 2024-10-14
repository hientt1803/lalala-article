import { Card, MantineSize } from "@mantine/core";
import React from "react";

interface IMainCard {
  shadow?: MantineSize | string;
  radius?: MantineSize | string;
  maw?: number | string;
  w?: string | number;
  h?: string | number;
  withBorder?: boolean;
  my?: string | number;
  p?: string | number;
  styles?: any;
  style?: any;
  className?: string;
  children: React.ReactNode;
  propName?: any;
}

const MainCardComponent = (props: IMainCard) => {
  const {
    shadow,
    radius,
    maw,
    w,
    h,
    withBorder = false,
    my,
    p,
    style,
    styles,
    className,
    children,
    ...propName
  } = props;
  return (
    <Card
      shadow={shadow}
      radius={radius}
      maw={maw}
      w={w}
      h={h}
      withBorder={withBorder}
      my={my}
      p={p}
      className={className}
      style={style}
      styles={styles}
      {...propName}
    >
      {children}
    </Card>
  );
};
export const MainCard = React.memo(MainCardComponent);