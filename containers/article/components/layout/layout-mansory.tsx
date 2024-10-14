import { ArticleCard, ArticleCardType } from "@/components/card";
import { MainGrid, MainGridCol } from "@/components/grid";
import { cn } from "@/lib";
import { Container } from "@mantine/core";

type ArticleLayoutMansory = {
  listArticle: any;
  backgroundColor?: string;
  title: string;
  cardType?: ArticleCardType;
  className?: string;
};

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
                  article={{
                    image: "/assets/images/article/home/image-3.jpg",
                  }}
                  displayType={cardType}
                  className="min-h-[25rem]"
                  imageStyle="min-h-[25rem]"
                />
                <ArticleCard
                  article={{
                    image: "/assets/images/article/home/image-2.jpg",
                  }}
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
                  article={{
                    image: "/assets/images/article/home/image-5.jpg",
                  }}
                  displayType={cardType}
                  className="min-h-[23.5rem]"
                />
                <ArticleCard
                  article={{
                    image: "/assets/images/article/home/image-4.jpg",
                  }}
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
