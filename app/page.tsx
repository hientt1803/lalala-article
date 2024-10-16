import { AricleContainer } from "@/containers/article/home";
import { preLoadGetListArticle } from "@/services";

const AriclePage = () => {
  preLoadGetListArticle();

  return <AricleContainer />;
};

export default AriclePage;
