import { ArticleCard, ArticleCardType } from "@/components/card";
import { cn } from "@/lib";
import { Container } from "@mantine/core";

type ArticleLayoutHighLighFirstCard = {
  listArticle: any;
  backgroundColor?: string;
  title: string;
  cardType?: ArticleCardType;
  className?: string;
};

export const ArticleLayoutHighLighFirstCard = (
  props: ArticleLayoutHighLighFirstCard
) => {
  const {
    listArticle,
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
        <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-start items-start min-h-[25rem]">
          <ArticleCard
            article={{
              image: "/assets/images/article/home/image-7.jpg",
            }}
            displayType={"onlyImage"}
            imageStyle="min-h-[24rem]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-start items-start min-h-[25rem]">
            <ArticleCard
              article={{ image: "/assets/images/article/home/image-6.jpeg" }}
              displayType={cardType}
              imageStyle="min-h-[16.875rem]"
              titleStyle="text-[1.25rem]"
            />
            <ArticleCard
              article={{ image: "/assets/images/article/home/image-8.jpg" }}
              displayType={cardType}
              imageStyle="min-h-[16.875rem]"
              titleStyle="text-[1.25rem]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
