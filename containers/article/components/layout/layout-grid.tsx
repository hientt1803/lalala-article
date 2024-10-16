import React from "react";
import { Container } from "@mantine/core";
import { cn } from "@/lib";
import { ArticleCard, ArticleCardType } from "@/components/card";
import { IArticleType } from "@/stores/features/posts";
import dynamic from "next/dynamic";

type ArticleLayoutGrid = {
  listArticle: IArticleType[];
  withCaroucel?: boolean;
  backgroundColor?: string;
  title: string;
  cardType?: ArticleCardType;
  className?: string;
};

const MantineCaroucel = dynamic(() =>
  import("@/components/caroucel/mantine-caroucel")
    .then((mob) => mob.MantineCaroucel), {
  ssr: false
})
const MantineCaroucelSlide = dynamic(() =>
  import("@/components/caroucel/mantine-caroucel")
    .then((mob) => mob.MantineCaroucelSlide), {
  ssr: false
})

export const ArticleLayoutGrid = (props: ArticleLayoutGrid) => {
  const {
    listArticle,
    withCaroucel = false,
    backgroundColor = "#fff",
    title,
    cardType = "verticle",
    className = "",
  } = props;
  return (
    <div
      className={cn(
        "min-w-full mx-auto py-16",
        `bg-[${backgroundColor}]`,
        className
      )}
    >
      <Container size="lg">
        <h1 className="text-[2rem] fw-[700] text-[#1a1a1a] font-bold text-center">
          {title}
        </h1>
        {withCaroucel ? (
          <MantineCaroucel
            height={"100%"}
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          >
            {
              listArticle?.map((article) => (
                <MantineCaroucelSlide width={"100%"} key={article.id}>
                  <ArticleCard
                    article={article}
                    displayType={cardType}
                  />
                </MantineCaroucelSlide>
              ))
            }
          </MantineCaroucel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3">
            {
              listArticle?.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  displayType={cardType}
                />
              ))
            }
          </div>
        )}
      </Container>
    </div>
  );
};
