import {
  MantineCaroucel,
  MantineCaroucelSlide,
} from "@/components/caroucel/mantine-caroucel";
import React from "react";
import { Container } from "@mantine/core";
import { cn } from "@/lib";
import { ArticleCard, ArticleCardType } from "@/components/card";

type ArticleLayoutGrid = {
  listArticle: any;
  withCaroucel?: boolean;
  backgroundColor?: string;
  title: string;
  cardType?: ArticleCardType;
  className?: string;
};

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
            <MantineCaroucelSlide width={"100%"}>
              <ArticleCard
                article={{
                  image: "/assets/images/article/detail/content-1.jpg",
                }}
                displayType={cardType}
              />
            </MantineCaroucelSlide>
            <MantineCaroucelSlide width={"100%"}>
              <ArticleCard
                article={{
                  image: "/assets/images/article/detail/content-4.jpg",
                }}
                displayType={cardType}
              />
            </MantineCaroucelSlide>
            <MantineCaroucelSlide width={"100%"}>
              <ArticleCard
                article={{
                  image: "/assets/images/article/detail/content-3.jpg",
                }}
                displayType={cardType}
              />
            </MantineCaroucelSlide>
            <MantineCaroucelSlide width={"100%"}>
              <ArticleCard
                article={{
                  image: "/assets/images/article/detail/content-5.jpg",
                }}
                displayType={cardType}
              />
            </MantineCaroucelSlide>
          </MantineCaroucel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3">
            <ArticleCard
              article={{ image: "/assets/images/article/detail/content-4.jpg" }}
              displayType={cardType}
            />
            <ArticleCard
              article={{ image: "/assets/images/article/detail/content-3.jpg" }}
              displayType={cardType}
            />
            <ArticleCard
              article={{ image: "/assets/images/article/detail/content-1.jpg" }}
              displayType={cardType}
            />
          </div>
        )}
      </Container>
    </div>
  );
};
