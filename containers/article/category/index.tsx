import { convertToTitleCase } from "@/utils";
import { Container, Divider } from "@mantine/core";
import { ArticleLayoutGrid } from "../components/layout/layout-grid";
import { ArticleLayoutHighLighFirstCard } from "../components/layout/layout-highligh-first-card";
import { ArticleLayoutMansory } from "../components/layout/layout-mansory";
import { ArticleBannerCaroucel } from "../home/components/article-banner-caroucel";

const CategoryTags = [
  {
    id: 1,
    name: "Couple gateways",
  },
  {
    id: 2,
    name: "Family holidays",
  },
  {
    id: 3,
    name: "Group trips",
  },
  {
    id: 4,
    name: "Solo Travel",
  },
  {
    id: 5,
    name: "Active Trips",
  },
  {
    id: 6,
    name: "Low cost trips",
  },
  {
    id: 7,
    name: "City breaks",
  },
  {
    id: 9,
    name: "Couple gateways",
  },
  {
    id: 8,
    name: "Road trips",
  },
  {
    id: 10,
    name: "Family holidays",
  },
  {
    id: 12,
    name: "Solo Travel",
  },
  {
    id: 11,
    name: "Group trips",
  },
  {
    id: 13,
    name: "Active Trips",
  },
  {
    id: 15,
    name: "City breaks",
  },
  {
    id: 14,
    name: "Low cost trips",
  },
  {
    id: 16,
    name: "Road trips",
  },
];

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const components = [
  <ArticleLayoutMansory key="1" title="Couple getaways" listArticle={""} />,
  <ArticleLayoutGrid
    key="2"
    title="Active trips"
    withCaroucel
    listArticle={""}
  />,
  <ArticleLayoutMansory key="3" title="Summer ready" listArticle={""} />,
  <ArticleLayoutHighLighFirstCard
    key="4"
    title="Unique stays"
    listArticle={""}
    cardType="verticle"
  />,
  <ArticleLayoutGrid
    key="5"
    title="Solo travel"
    listArticle={""}
    className="py-6"
  />,
  <ArticleLayoutHighLighFirstCard
    key="6"
    title="Luxury escape"
    listArticle={""}
    cardType="verticle"
  />,
  <ArticleLayoutHighLighFirstCard
    key="7"
    title="Family holiday"
    listArticle={""}
    cardType="verticle"
  />,
  <ArticleLayoutGrid
    key="8"
    title="Journey Through Asia"
    listArticle={""}
    withCaroucel
    className="py-6"
  />,
];

export const ArticleCategoryContainer = ({ slug }: { slug: string[] }) => {
  const shuffledComponents = shuffleArray(components);

  return (
    <section>
      <ArticleBannerCaroucel />

      <Container size="lg">
        <h1 className="text-[4rem] fw-[800] font-extrabold text-center mx-auto max-w-[60.5rem] mt-10">
          {slug.map(
            (item, index) =>
              `${convertToTitleCase(item)} ${
                index !== slug.length - 1 ? "/" : ""
              }`
          )}
        </h1>
      </Container>

      <Divider
        w={150}
        size="xs"
        orientation="horizontal"
        bg={"#1a1a1a"}
        color="#1a1a1a"
        mx="auto"
        mb={50}
        mt={10}
        classNames={{
          label: "bg-[#1a1a1a]",
        }}
        className="hidden md:block opacity-50"
      />

      <Container size="lg">
        <div className="flex justify-center items-center gap-3 flex-wrap">
          {CategoryTags.map((tag) => (
            <div
              key={tag.id}
              className="transition-all btn-hover-slide px-6 py-2 w-fit shadow-lg border border-neutral-100 hover:text-white rounded-full text-[0.75rem] fw-[700] cursor-pointer"
            >
              {tag.name}
            </div>
          ))}
        </div>
      </Container>

      {shuffledComponents}
    </section>
  );
};
