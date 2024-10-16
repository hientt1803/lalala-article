import { Container, Divider } from "@mantine/core";
import { ArticleLayoutGrid } from "../components/layout/layout-grid";
import { ArticleLayoutMansory } from "../components/layout/layout-mansory";
import { ArticleCardHorizontal } from "@/components/card";
import { ArticleLayoutHighLighFirstCard } from "../components/layout/layout-highligh-first-card";
import dynamic from "next/dynamic";
import { getListArticle } from "@/services";

const ArticleBannerCaroucel = dynamic(
  () =>
    import("./components/article-banner-caroucel").then(
      (mob) => mob.ArticleBannerCaroucel
    ),
  { ssr: false }
);

export const AricleContainer = async () => {
  const listArticle = await getListArticle();

  return (
    <section>
      <ArticleBannerCaroucel listArticle={listArticle} />

      <Divider
        w={150}
        size="xs"
        orientation="horizontal"
        bg={"#1a1a1a"}
        color="#1a1a1a"
        mx="auto"
        my={50}
        classNames={{
          label: "bg-[#1a1a1a]",
        }}
        className="opacity-50"
      />

      <ArticleLayoutGrid title="Pride" withCaroucel listArticle={listArticle} />

      <ArticleLayoutGrid title="Latest" withCaroucel listArticle={listArticle} />

      <ArticleLayoutMansory title="Summer ready" listArticle={listArticle} />

      <div className="bg-[#f5f5f5] py-10">
        <Container size="lg">
          <h1 className="text-[2rem] fw-[700] text-[#1a1a1a] font-bold text-center mb-5">
            City Trips
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-0">
            {listArticle.slice(0, 3)?.map((article) => (
              <ArticleCardHorizontal
                key={article.id}
                article={article}
              />
            ))}
          </div>
        </Container>
      </div>

      <ArticleLayoutHighLighFirstCard
        title="Unique stays"
        listArticle={listArticle}
        cardType="verticle"
      />

      <ArticleLayoutGrid
        title="The outdoors"
        listArticle={listArticle}
        className="py-6"
      />

      <ArticleLayoutHighLighFirstCard
        title="Luxury escape"
        listArticle={listArticle}
        cardType="verticle"
      />

      <ArticleLayoutHighLighFirstCard
        title="Family holiday"
        listArticle={listArticle}
        cardType="verticle"
      />

      <ArticleLayoutMansory title="Explore VietNam" listArticle={listArticle} />

      <ArticleLayoutGrid
        title="Journey Through Asia"
        listArticle={listArticle}
        withCaroucel
        className="py-6"
      />
    </section>
  );
};
