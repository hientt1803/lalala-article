"use client";

import { MainDrawer } from "@/components/drawer";
import { Avatar, Collapse, Flex, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronDown, ChevronUp, MenuIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import { NAVBAR_ITEM } from "@/utils";

export const ArticleNavbarMobile = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <div onClick={open} className="cursor-pointer block md:hidden">
        <MenuIcon className="text-neutral-800" />
      </div>

      <MainDrawer
        offset={0}
        opened={opened}
        onClose={close}
        size={"xl"}
        position="right"
      >
        <Stack mb={30}>
          <Title order={3} mb={15}>
            Menu article
          </Title>

          <Stack mb={5}>
            <Flex
              gap={20}
              justify={"start"}
              align={"center"}
              className="text-black"
            >
              <Avatar
                color="cyan"
                radius="xl"
                src={"https://placehold.co/20x20"}
              />
              English (US)
            </Flex>
          </Stack>
        </Stack>

        {/* Menu items */}
        <Stack>
          {NAVBAR_ITEM.map((item, index) => (
            <MenuItem key={index} item={item} closeDrawer={close} />
          ))}
        </Stack>
      </MainDrawer>
    </div>
  );
};

const MenuItem = ({
  item,
  closeDrawer,
}: {
  item:
    | {
        id: number;
        name: string;
        link: string;
        subMenu?: undefined;
      }
    | {
        id: number;
        name: string;
        subMenu: {
          name: string;
          link: string;
        }[];
        link?: undefined;
      };
  closeDrawer: () => void;
}) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="cursor-pointer py-2"
        onClick={toggle}
      >
        <Link
          href={item.link || "#"}
          className="font-[600] transition-all text-neutral-800 hover:text-neutral-900 group"
        >
          {item.name}
        </Link>
        {item.subMenu &&
          (opened ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
      </Flex>
      {item.subMenu && (
        <Collapse in={opened}>
          <div className="pl-4 grid grid-cols-1 gap-3">
            {item.subMenu.map((subItem, index: number) => (
              <Link
                key={index}
                href={subItem.link || "#"}
                className="font-[400] transition-all text-neutral-800 hover:text-neutral-900 hover:font-bold group"
                onClick={closeDrawer}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </Collapse>
      )}
    </div>
  );
};
