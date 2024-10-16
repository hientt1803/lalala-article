import { getListArticle } from "@/services";
import { HOST_URL } from "@/utils";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let res = await getListArticle()
  const result = res.length > 5000 ? res.slice(0, 5000) : res;

  if (!result || result.length === 0) return []

  return [
    {
      url: `${HOST_URL}/`, // Trang chủ
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${HOST_URL}/category`, // Trang chủ
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...result?.map((article) => ({
      url: `${HOST_URL}/${article?.id}`, 
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,  
    })),
  ];
}
