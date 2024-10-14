import { Container, Divider } from "@mantine/core";
import { ArticleLayoutGrid } from "../components/layout/layout-grid";
import { ArticleLayoutMansory } from "../components/layout/layout-mansory";
import { ArticleCardHorizontal } from "@/components/card";
import { ArticleLayoutHighLighFirstCard } from "../components/layout/layout-highligh-first-card";
import dynamic from "next/dynamic";

const ArticleBannerCaroucel = dynamic(
  () =>
    import("./components/article-banner-caroucel").then(
      (mob) => mob.ArticleBannerCaroucel
    ),
  { ssr: false }
);

export const AricleContainer = () => {
  return (
    <section>
      <ArticleBannerCaroucel />

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

      <ArticleLayoutGrid title="Pride" withCaroucel listArticle={""} />

      <ArticleLayoutGrid title="Latest" withCaroucel listArticle={""} />

      <ArticleLayoutMansory title="Summer ready" listArticle={""} />

      <div className="bg-[#f5f5f5] py-10">
        <Container size="lg">
          <h1 className="text-[2rem] fw-[700] text-[#1a1a1a] font-bold text-center mb-5">
            City Trips
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-0">
            <ArticleCardHorizontal
              article={{ image: "/assets/images/article/home/image-1.jpg" }}
            />
            <ArticleCardHorizontal
              article={{ image: "/assets/images/article/home/image-2.jpg" }}
            />
            <ArticleCardHorizontal
              article={{ image: "/assets/images/article/home/image-3.jpg" }}
            />
          </div>
        </Container>
      </div>

      <ArticleLayoutHighLighFirstCard
        title="Unique stays"
        listArticle={""}
        cardType="verticle"
      />

      <ArticleLayoutGrid
        title="The outdoors"
        listArticle={""}
        className="py-6"
      />

      <ArticleLayoutHighLighFirstCard
        title="Luxury escape"
        listArticle={""}
        cardType="verticle"
      />

      <ArticleLayoutHighLighFirstCard
        title="Family holiday"
        listArticle={""}
        cardType="verticle"
      />

      <ArticleLayoutMansory title="Explore VietNam" listArticle={""} />

      <ArticleLayoutGrid
        title="Journey Through Asia"
        listArticle={""}
        withCaroucel
        className="py-6"
      />
    </section>
  );
};
