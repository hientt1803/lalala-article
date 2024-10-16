import { MainCard } from "@/components/card";
import { cn } from "@/lib";
import { IArticleType } from "@/stores/features/posts";
import { capitalizeFirstLetter, formatDateUTC } from "@/utils";
import { Image } from "@mantine/core";
import Link from "next/link";
import React from "react";

export type ArticleCardType = "horizontal" | "verticle" | "onlyImage";

type ArticleCardProps = {
  article: IArticleType;
  displayType?: ArticleCardType;
  className?: string;
  imageStyle?: string;
  titleStyle?: string;
};

export const ArticleCard = React.memo(
  ({
    article,
    displayType = "verticle",
    className = "",
    imageStyle = "",
    titleStyle = "",
  }: ArticleCardProps) => {
    const renderContent = ({
      textColor = "#595959",
    }: {
      textColor?: string;
    }) => (
      <div className="flex flex-col gap-1">
        <div
          className={`text-[0.875rem] h-5 opacity-70 line-clamp-1`}
          style={{
            color: textColor,
          }}
        >
          {!article?.taxonomy ? "General • Blog • Daily" : article?.taxonomy?.map((txm, index) => (
            <React.Fragment key={txm.taxonomy_id}>
              {capitalizeFirstLetter(txm.taxonomy_name || "")} {index !== article?.taxonomy.length - 1 && "   •   "}
            </React.Fragment>
          ))}
        </div>

        <span
          className={cn(
            `text-[1.5rem] fw-[700] font-bold line-clamp-2`,
            titleStyle
          )}
          style={{
            color: textColor == "white" ? "white" : "black",
          }}
        >
          {article?.post_name || "This is post content"}
        </span>

        <span
          className={`text-[0.75rem] line-clamp-1 opacity-70`}
          style={{
            color: textColor,
          }}
        >
          {formatDateUTC(new Date(article?.created_at) || new Date())}
        </span>
      </div>
    );

    return (
      <React.Fragment>
        {displayType === "onlyImage" ? (
          <Link href={`/${article?.id || "1010599559711981569"}`}>
            <MainCard className="min-w-full w-full min-h-[25rem] h-full group">
              <div className="relative min-w-full w-full min-h-[25rem] h-full rounded-md overflow-hidden">
                <Image
                  src={article?.attachment[0]?.url_file || "/assets/images/article/detail/content-4.jpg"}
                  alt={"alt"}
                  w={"100%"}
                  h={"100%"}
                  miw={"100%"}
                  mih={400}
                  mah={500}
                  loading="lazy"
                  className={cn(
                    "transition-all absolute object-cover rounded-md min-w-full w-full min-h-full group-hover:scale-[1.1]",
                    imageStyle
                  )}
                />
                {/* Blur background effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-2 left-2 flex flex-col gap-2 z-10">
                  {renderContent({ textColor: "white" })}
                </div>
              </div>
            </MainCard>
          </Link>
        ) : (
          <Link href={`/${article?.id || "1010599559711981569"}`}>
            <MainCard
              className={cn(
                "flex gap-2 bg-transparent group",
                displayType === "verticle" ? "flex-col" : "flex-row",
                className
              )}
            >
              <div
                className={`relative min-w-full w-full ${imageStyle ? imageStyle : "min-h-[18.125rem]"
                  } h-full rounded-md overflow-hidden`}
              >
                <Image
                  src={article?.attachment[0]?.url_file || "/assets/images/article/detail/content-4.jpg"}
                  alt={"alt"}
                  w={displayType === "verticle" ? "100%" : "50%"}
                  h={"100%"}
                  mih={200}
                  mah={500}
                  loading="lazy"
                  className={cn(
                    "transition-all absolute object-cover rounded-md min-w-full w-full min-h-full group-hover:scale-[1.1]",
                    imageStyle
                  )}
                />
              </div>
              {renderContent({ textColor: "#595959" })}
            </MainCard>
          </Link>
        )}
      </React.Fragment>
    );
  }
);

ArticleCard.displayName = "ArticleCard";
