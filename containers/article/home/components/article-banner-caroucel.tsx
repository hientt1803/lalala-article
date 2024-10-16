"use client";

import { cn } from "@/lib";
import { IArticleType } from "@/stores/features/posts";
import classes from "@/styles/components/_caroucel.module.scss";
import { formatDateUTC } from "@/utils";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import Link from "next/link";
import React from "react";

type ArticleBannerCaroucel = {
  children?: React.ReactNode;
};

export const ArticleBannerCaroucel = React.memo(({ listArticle }: { listArticle: IArticleType[] }) => {
  return (
    <Carousel
      slideSize="100%"
      height={500}
      slidesToScroll={1}
      controlSize={32}
      loop
      withIndicators
      w={"100%"}
      className="w-full min-w-full flex-1"
      classNames={classes}
    >
      {
        listArticle?.slice(0, 5).map((post: IArticleType) => (
          <Carousel.Slide w={"100%"} h={"100%"} key={post.id}>
            <Link href={`/${post.id}`}>
              <div className="relative min-w-full w-full min-h-full h-full overflow-hidden group cursor-pointer">
                <Image
                  src={post?.attachment[0]?.url_file || "/assets/images/article/detail/image-banner.jpg"}
                  alt={"alt"}
                  w={"100%"}
                  h={"100%"}
                  miw={"100%"}
                  mih={400}
                  mah={500}
                  loading="lazy"
                  className={cn(
                    "transition-all absolute object-cover min-w-full w-full min-h-full group-hover:scale-[1.1]"
                  )}
                />
                {/* Blur background effect */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-2 left-2 flex flex-col gap-1 z-10">
                  <h1 className="text-3xl font-bold text-white mb-3">
                    {post?.post_name || "This is post name"}
                  </h1>
                  <span className="text-white text-sm">{formatDateUTC(new Date(post?.created_at) || new Date())}</span>
                </div>
              </div>
            </Link>
          </Carousel.Slide>
        ))
      }
    </Carousel>
  );
});


ArticleBannerCaroucel.displayName = "ArticleBannerCaroucel"