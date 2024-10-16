import { ArticleCategoryContainer } from "@/containers/article/category";
import { preLoadGetListArticle } from "@/services";
import { HOST_URL } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Lấy id từ params (giả sử id là của bài viết blog)
  const { slug } = params;

  // Lấy dữ liệu bài viết blog từ API
  // const res = await fetch(`${API_URL}/api/blog/posts/${id}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const { data: blogPostData } = await res.json();

  // Lấy metadata cha để mở rộng
  const { title, description, openGraph } = await parent;

  return {
    title:
      `${"Blog title here"} - Discover the Best Travel Stories and Guides | LaLaLa Blog` ||
      title,
    description: `${"Read our latest travel guide or stories!"}` || description,
    openGraph: {
      images: [...(openGraph?.images || [])],
      title:
        title || "Discover the Best Travel Stories and Guides | LaLaLa Blog",
      description: description || "Read our latest travel guide or stories!",
      url: `${HOST_URL}/slug-example`,
      locale: "en-US",
      siteName: "LaLaLa Blog - Travel Stories and Guides",
      type: "article",
    },
    alternates: {
      canonical: `${HOST_URL}/slug-example`,
    },
    twitter: {
      title: `{title} - LaLaLa Blog`,
      description: "Read our latest travel guide or stories!",
      images: [...(openGraph?.images || [])],
      card: "summary_large_image",
    },
  };
}

const AricleCategorypage = ({ params }: { params: { slug: string[] } }) => {
  preLoadGetListArticle();

  return <ArticleCategoryContainer slug={params.slug} />;
};

export default AricleCategorypage;
