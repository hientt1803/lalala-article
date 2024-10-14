import { ArticleLayout } from "@/layouts/article-layout";
import { MantineProvider } from "@mantine/core";
import React from "react";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
      <ArticleLayout>{children}</ArticleLayout>
    </MantineProvider>
  );
};
export default MainProvider;
