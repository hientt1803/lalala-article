import { Image } from "@mantine/core";
import React from "react";

export const ArticleImageBanner = () => {
  return (
    <Image
      src="/assets/images/article/detail/image-banner.jpg"
      w={"100%"}
      h={"100%"}
      mah={520}
      loading="lazy"
      alt="banner"
      className=""
    />
  );
};
