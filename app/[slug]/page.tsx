import { AricleDetailContainer } from "@/containers/article/detail";
import { getArticleById, getListArticle, preLoadGetArticleById } from "@/services";
import { HOST_URL } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const article = await getArticleById(slug)

  if (!article.post) {
    notFound()
  }

  const { title, description, openGraph } = await parent;

  return {
    title:
      `${article?.post?.post_name} - Discover the Best Travel Stories and Guides | LaLaLa Blog` ||
      title,
    description: `${article?.post?.post_content}` || description,
    openGraph: {
      images: [...(openGraph?.images || [])],
      title:
        article?.post?.post_name || "Discover the Best Travel Stories and Guides | LaLaLa Blog",
      description: article?.post?.post_content || "Read our latest travel guide or stories!",
      url: `${HOST_URL}/slug-example`,
      locale: "en-US",
      siteName: "LaLaLa Blog - Travel Stories and Guides",
      type: "article",
    },
    alternates: {
      canonical: `${HOST_URL}/${article?.post?.id}`,
    },
    twitter: {
      title: `${article?.post?.post_name} - LaLaLa Blog`,
      description: "Read our latest travel guide or stories!",
      images: [...(openGraph?.images || [])],
      card: "summary_large_image",
    },
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export const revalidate = 60;
export async function generateStaticParams() {
  try {
    const articles = await getListArticle();

    if (!articles || articles.length === 0) {
      return [];
    }

    return articles?.map((article) => ({
      slug: article?.id?.toString() || '',
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

const AricleDetailpage = ({ params }: { params: { slug: string } }) => {
  preLoadGetArticleById(params.slug)

  return <AricleDetailContainer slug={params.slug} />;
};

export default AricleDetailpage;
