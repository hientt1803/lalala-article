import { Container, Divider, Image } from "@mantine/core";
import { Facebook, Linkedin, PointerIcon, Twitter } from "lucide-react";
import React from "react";

export const ArticleContent = ({ content }: { content: string }) => {
  return (
    <React.Fragment>
      <Container size="md" my={50}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>

      {/* <Container size="lg" my={30}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Yakushima, Japan
        </h2>
        <Image
          src="/assets/images/article/detail/content-5.jpg"
          w={"100%"}
          h={"100%"}
          mah={600}
          loading="lazy"
          alt="banner"
          className="mb-3"
        />
        <span className="text-[0.875rem] text-[#595959] mt-10">
          Yakushima, Japan
        </span>
      </Container>
      <Container size="md" my={50}>
        <p className="text-[1rem] text-[#1a1a1a] my-10">
          {`Yakushima may be one of the wettest places on Earth – but what it lacks in clement weather,
           it makes up for in an abundance of natural beauty. This subtropical, mountainous island is 
           part of the Ōsumi Islands archipelago on the southern tip of Japan. It is remote but can be 
           reached via flight and is forever blanketed in evergreen moss and an ancient forest that cloaks
            you from the sky above. Hidden hot springs and exotic fauna will enthral you, as you explore 
            the island via wooden paths and canopy bridges..`}
        </p>
        <p className="text-[1rem] text-[#1a1a1a] my-10">
          {`Spring arrives on the island with an eruption of colour, and the scent of moss and flowers 
          pervades the lush woods. Yamazakura, or hill cherry blossom, covers the island's popular 
          Shiratani Unsuikyo valley in a pink haze. After a day of exploring, spend an enchanting night 
          at Wa no Cottage Sen-no-ie, a cottage with tatami mats and traditional Japanese decor set 
          amid resplendent nature.`}
        </p>
      </Container> */}

      {/* Divider */}
      <Container size="lg" my={30}>
        <Divider
          w={"100%"}
          size="xs"
          orientation="horizontal"
          bg={"#1a1a1a"}
          color="#1a1a1a"
          mx="auto"
          mt={50}
          mb={100}
          classNames={{
            label: "bg-[#1a1a1a]",
          }}
          className="hidden md:block opacity-50"
        />
      </Container>

      <div className="flex justify-center items-center gap-5 py-3">
        <div className="transition-all rounded-full border border-neutral-100 shadow-md w-fit h-fit p-3 cursor-pointer bg-white hover:opacity-100 hover:scale-[1.1] text-black peer-hover:opacity-50 peer-hover:scale-[0.9]">
          <Facebook className="w-5 h-5" />
        </div>
        <div className="transition-all rounded-full border border-neutral-100 shadow-md w-fit h-fit p-3 cursor-pointer bg-white hover:opacity-100 hover:scale-[1.1] text-black peer-hover:opacity-50 peer-hover:scale-[0.9]">
          <Linkedin className="w-5 h-5" />
        </div>
        <div className="transition-all rounded-full border border-neutral-100 shadow-md w-fit h-fit p-3 cursor-pointer bg-white hover:opacity-100 hover:scale-[1.1] text-black peer-hover:opacity-50 peer-hover:scale-[0.9]">
          <PointerIcon className="w-5 h-5" />
        </div>
        <div className="transition-all rounded-full border border-neutral-100 shadow-md w-fit h-fit p-3 cursor-pointer bg-white hover:opacity-100 hover:scale-[1.1] text-black peer-hover:opacity-50 peer-hover:scale-[0.9]">
          <Twitter className="w-5 h-5" />
        </div>
      </div>
    </React.Fragment>
  );
};
