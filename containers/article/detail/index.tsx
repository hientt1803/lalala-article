import { getArticleById } from "@/services";
import { ArticleContent } from "./components/article-content";
import { ArticleHeader } from "./components/article-header";
import { ArticleImageBanner } from "./components/article-image-banner";
import Link from "next/link";
import { Container } from "@mantine/core";
import dynamic from "next/dynamic";

const ArticleListComment = dynamic(
  () =>
    import("./components/article-list-comment").then((mob) => mob.ArticleListComment)
);
const ArticleRelative = dynamic(
  () =>
    import("./components/article-relative").then((mob) => mob.ArticleRelative)
);

export const AricleDetailContainer = async ({ slug }: { slug: string }) => {
  const articleDetail = await getArticleById(slug);

  if (articleDetail.post == null || articleDetail.post == undefined) {
    return (
      <Container size="lg" className='min-h-[80vh] w-full flex flex-col justify-center items-center gap-2'>
        <h1 className='text-5xl max-w-[37.5rem] font-bold text-center'>{`Oops! The article you're looking for doesn't exist.`}</h1>
        <h3 className='text-2xl max-w-[45rem] text-center mt-10'>Explore other insightful articles or return to our homepage to discover more content.</h3>
        <Link href="/">
          <div
            className="transition-all mt-5 btn-hover-blur px-6 py-2 w-fit shadow-lg border text-[0.75rem] font-semibold cursor-pointer"
          >
            Return to Homepage
          </div>
        </Link>
      </Container>
    )
  }

  return (
    <section>
      <ArticleImageBanner image={articleDetail?.post?.attachment[0]?.url_file} />
      <ArticleHeader title={articleDetail?.post?.post_name} createdAt={articleDetail?.post?.created_at} taxonomy={articleDetail?.post?.taxonomy} />
      <ArticleContent content={articleDetail?.post?.post_content} />
      <Container size={"lg"} className="relative">
        <ArticleListComment />
      </Container>

      <ArticleRelative relatiedArticle={articleDetail?.relatedPosts} />
    </section>
  );
};
