import { Container } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib";
import { NAVBAR_ITEM } from "@/utils";
import dynamic from "next/dynamic";

const ArticleNavbarMobile = dynamic(
  () =>
    import("./article-navbar-mobile").then((mob) => mob.ArticleNavbarMobile),
  { ssr: false }
);

export const ArticleNavbar = React.memo(() => {
  return (
    <Container size="lg" className="transition-all my-1">
      <div className="flex justify-center md:justify-between gap-2 items-center sticky top-0 z-50">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Lalala Article</h1>
        </Link>

        {/* Mobile drawer */}
        <div className="block md:hidden">
          <ArticleNavbarMobile />
        </div>

        {/* Desktop Mega Menu */}
        <div className="justify-end items-center gap-6 hidden md:flex">
          {NAVBAR_ITEM?.map((navbar, index) => (
            <div key={index} className="relative group">
              <Link
                href={navbar.link || "#"}
                className="relative transition-all font-semibold text-neutral-600 group"
              >
                {navbar.name}

                {/* Hover border effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Mega menu dropdown */}
              {navbar.subMenu && (
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg p-6 z-10 min-w-[200px]">
                  <div className="grid grid-cols-1 gap-4">
                    {navbar.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        className={cn(
                          "relative text-sm transition-all text-neutral-600 hover:text-neutral-800 hover:font-bold block",
                          `group-${subIndex}`
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
});

ArticleNavbar.displayName = "ArticleNavbar";
