import { ArticleCard, ArticleCardType } from "@/components/card";
import { cn } from "@/lib";
import { IArticleType } from "@/stores/features/posts";
import { Container } from "@mantine/core";
import dynamic from "next/dynamic";

type ArticleLayoutMansory = {
  listArticle: IArticleType[];
  backgroundColor?: string;
  title: string;
  cardType?: ArticleCardType;
  className?: string;
};

const MainGrid = dynamic(() =>
  import("@/components/grid")
    .then((mob) => mob.MainGrid), {
  ssr: false
})
const MainGridCol = dynamic(() =>
  import("@/components/grid")
    .then((mob) => mob.MainGridCol), {
  ssr: false
})


export const ArticleLayoutMansory = (props: ArticleLayoutMansory) => {
  const {
    listArticle,
    backgroundColor = "#fff",
    title,
    cardType = "verticle",
    className = "",
  } = props;
  return (
    <div>
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

          <MainGrid>
            <MainGridCol
              span={{
                xs: 12,
                md: 4,
              }}
            >
              <div className="columns-1 gap-1">
                <ArticleCard
                  article={listArticle[0]}
                  displayType={cardType}
                  className="min-h-[25rem]"
                  imageStyle="min-h-[25rem]"
                />
                <ArticleCard
                  article={listArticle[1]}
                  displayType={cardType}
                  className="min-h-[25rem]"
                  imageStyle="min-h-[25rem]"
                />
              </div>
            </MainGridCol>
            <MainGridCol
              span={{
                xs: 12,
                md: 8,
              }}
            >
              <div className="columns-1 gap-1">
                <ArticleCard
                  article={listArticle[2]}
                  displayType={cardType}
                  className="min-h-[23.5rem]"
                />
                <ArticleCard
                  article={listArticle[3]}
                  displayType={cardType}
                  imageStyle="min-h-[23.5rem]"
                />
              </div>
            </MainGridCol>
          </MainGrid>
        </Container>
      </div>
    </div>
  );
};
