import { Image } from "@mantine/core";

export const ArticleImageBanner = ({ image }: { image: string }) => {
  return (
    <Image
      src={image || "/assets/images/article/detail/image-banner.jpg"}
      w={"100%"}
      h={"100%"}
      mah={520}
      loading="lazy"
      alt="banner"
      className=""
    />
  );
};
