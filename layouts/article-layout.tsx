import { IChildrenProps } from "@/types/common";
import { Skeleton } from "@mantine/core";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const ScrollToTopButton = dynamic(
  () =>
    import("@/components/button/scroll-to-top-button").then(
      (mob) => mob.default
    ),
  { ssr: false }
);
const ArticleNavbar = dynamic(() =>
  import("@/components/navbar").then((mob) => mob.ArticleNavbar)
);
const MainFooter = dynamic(() =>
  import("@/components/layout").then((mob) => mob.MainFooter)
);

export const ArticleLayout = ({ children }: IChildrenProps) => {
  return (
    <React.Fragment>
      <div className="sticky top-0 left-0 right-0 bg-white py-2 border-b-neutral-100 shadow-lg z-50">
        <ArticleNavbar />
      </div>
      <main className="overflow-hidden">{children}</main>

      <Suspense fallback={<Skeleton w={30} h={30} className="rounded-full" />}>
        <ScrollToTopButton />
      </Suspense>
      <MainFooter />
    </React.Fragment>
  );
};
