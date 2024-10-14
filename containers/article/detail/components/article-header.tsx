import { Container, Divider } from "@mantine/core";
import { DotIcon } from "lucide-react";
import React from "react";

export const ArticleHeader = () => {
  return (
    <Container size="lg" py={60}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[2rem] md:text-[4rem] fw-[800] font-extrabold text-center max-w-[60.5rem]">
          The most beautiful destinations for spring
        </h1>
        <Divider
          w={150}
          size="xs"
          orientation="horizontal"
          bg={"#1a1a1a"}
          color="#1a1a1a"
          mx="auto"
          my={10}
          classNames={{
            label: "bg-[#1a1a1a]",
          }}
          className="opacity-30"
        />
        <span className="font-[700] text-[0.9rem] flex gap-0 items-center mb-2">
          4 min read{" "}
          <span>
            <DotIcon className="w-4 h-4 text-neutral-600" />
          </span>{" "}
          10 March
        </span>
        <span className="text-[#595959] text-[0.875rem] flex gap-0 items-center">
          Type of trip{" "}
          <span>
            <DotIcon className="w-4 h-4 text-[#595959]" />
          </span>{" "}
          City breaks
        </span>
      </div>
    </Container>
  );
};
