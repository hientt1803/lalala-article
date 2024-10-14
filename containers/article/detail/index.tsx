import React from "react";
import { ArticleImageBanner } from "./components/article-image-banner";
import { ArticleHeader } from "./components/article-header";
import { ArticleContent } from "./components/article-content";

export const AricleDetailContainer = ({ slug }: { slug: string }) => {
  return (
    <section>
      <ArticleImageBanner />
      <ArticleHeader />
      <ArticleContent />
    </section>
  );
};
