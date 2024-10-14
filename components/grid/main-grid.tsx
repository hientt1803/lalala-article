"use client";
import { Grid, MantineSize, StyleProp } from "@mantine/core";
import React from "react";
interface IMainGrid {
  gutter?: MantineSize | string | number | any;
  onClick?: () => void | any;
  grow?: boolean;
  bg?: string;
  mt?: string | number;
  className?: string;
  children: React.ReactNode;
}
const MainGridComponent = (props: IMainGrid) => {
  const { gutter, onClick, grow = false, bg, mt, className, children } = props;
  return (
    <Grid
      grow={grow}
      gutter={gutter}
      bg={bg}
      mt={mt}
      className={className}
      onClick={onClick}
    >
      {children}
    </Grid>
  );
};

const MainGridComponentCol = function MainGridCol({
  children,
  className,
  span,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  span: StyleProp<number | "auto" | "content">;
  rest?: any;
}) {
  return (
    <Grid.Col span={span} className={className} {...rest}>
      {children}
    </Grid.Col>
  );
};
export const MainGrid = React.memo(MainGridComponent);
export const MainGridCol = React.memo(MainGridComponentCol);
