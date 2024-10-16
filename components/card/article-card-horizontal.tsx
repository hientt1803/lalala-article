import { ArticleCardType, MainCard } from "@/components/card";
import { cn } from "@/lib";
import { IArticleType } from "@/stores/features/posts";
import { capitalizeFirstLetter, formatDateUTC } from "@/utils";
import { Image } from "@mantine/core";
import Link from "next/link";
import React from "react";

type ArticleCardHorizontalProps = {
  article: IArticleType;
  displayType?: ArticleCardType;
  className?: string;
  imageStyle?: string;
};

export const ArticleCardHorizontal = React.memo(
  ({
    article,
    displayType = "verticle",
    className = "",
    imageStyle = "",
  }: ArticleCardHorizontalProps) => {
    const renderContent = ({
      textColor = "#595959",
    }: {
      textColor?: string;
    }) => (
      <div className="flex flex-col justify-center gap-1">
        <div className={`text-[0.875rem] text-${textColor} opacity-70 line-clamp-1`}>
          {!article?.taxonomy ? "Type of trip • City breaks • Festivals" : article?.taxonomy?.map((txm, index) => (
            <React.Fragment key={txm.taxonomy_id}>
              {capitalizeFirstLetter(txm.taxonomy_name || "")} {index !== article?.taxonomy.length - 1 && "  •  "}
            </React.Fragment>
          ))}
        </div>

        <span
          className={`text-[1.25rem] fw-[700] text-${textColor} font-bold line-clamp-2`}
        >

          {article?.post_name || "This is post content"}
        </span>

        <span
          className={`text-[0.75rem] text-${textColor} line-clamp-1 opacity-70`}
        >
          {formatDateUTC(new Date(article?.created_at) || new Date())}
        </span>
      </div>
    );

    return (
      <React.Fragment>
        <Link href={`/${article.id || "1010599559711981569"}`}>
          <MainCard
            className={cn("flex gap-2 bg-transparent flex-row", className)}
          >
            <Image
              src={article?.attachment[0]?.url_file || "/assets/images/offer-image-home.jpeg"}
              alt={"alt"}
              w={150}
              h={120}
              loading="lazy"
              className={cn("object-cover rounded-md", imageStyle)}
            />
            {renderContent({ textColor: "#595959" })}
          </MainCard>
        </Link>
      </React.Fragment>
    );
  }
);

ArticleCardHorizontal.displayName = "ArticleCardHorizontal";
