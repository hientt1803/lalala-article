import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { DotIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FooterNavLink from "./footer-nav-link";
const SUB_FOOTER_MENU = [
  "Countries",
  "Regions",
  "Cities",
  "Districts",
  "Airports",
  "Hotels",
  "Places of interest",
  "Vacation Homes",
  "Apartments",
  "Resorts",
  "Villas",
  "Hostels",
  "B&Bs",
  "Guest Houses",
  "Unique places to stay",
  "All destinations",
  "All flight destinations",
  "All car rental locations",
  "All vacation destinations",
  "Discover",
  "Reviews",
  "Discover monthly stays",
];

const MainFooterComponent = () => {
  return (
    <footer>
      {/* List property */}
      <Box bg={"#003b95"} className="block md:hidden">
        <Stack justify="center">
          <Button variant="outline" mx={"auto"} mt={10} w={200} color="#fff">
            List your property
          </Button>
          <Divider c={"#f1f1f1"} />
        </Stack>
        <Container size={"lg"}>
          <Group gap={15} justify="center" align="center" p={20}>
            <Text fw={700} size="xs" className="text-white underline">
              Desktop version
            </Text>
            <Text fw={700} size="xs" className="text-white underline">
              Term and conditions
            </Text>
            <Text fw={700} size="xs" className="text-white underline">
              How we work
            </Text>
            <Text fw={700} size="xs" className="text-white underline">
              Privacy & Cookies
            </Text>
            <Text fw={700} size="xs" className="text-white underline">
              Morden Slavry statement
            </Text>
            <Text fw={700} size="xs" className="text-white underline">
              Human rights Statement
            </Text>
          </Group>

          <Stack align="center" mt={10}>
            <Text size="xs" className="text-white" ta={"center"}>
              Copyright © 1996–2024 Lalala.com™. All rights reserved.
            </Text>

            <Text size="xs" c="white" ta={"center"} pb={15}>
              Lalala.com is part of Lalala Holdings Inc., the world leader in
              online travel and related services.
            </Text>

            {/* <Flex justify={"center"} align={"center"} gap={10}>
              List of logo here
            </Flex> */}
          </Stack>
        </Container>
      </Box>

      {/* Desktop footer */}
      <DesktopFooter />
    </footer>
  );
};

const DesktopFooter = () => {
  return (
    <div className="hidden md:block pt-10 bg-white">
      <Container size={"lg"}>
        <Flex align="center" gap={0} wrap={"wrap"}>
          {SUB_FOOTER_MENU.map((item, index) => (
            <React.Fragment key={index}>
              <Link href="/">
                <Text size="xs" key={index} className="hover:underline">
                  {item}
                </Text>
              </Link>
              {index + 1 !== SUB_FOOTER_MENU.length && (
                <DotIcon className="w-2 h-2 mx-[2px]" />
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Container>
      <div className="bg-[#f5f5f5]">
        <FooterNavLink />
        <Container size={"lg"}>
          <Flex align={"center"} gap={10}>
            <Link href="/">
              <Image
                src="/assets/favicon/lalala.svg"
                alt="LALALA icon"
                width={25}
                height={25}
                loading="lazy"
              />
            </Link>
            <Text
              size="md"
              className="cursor-pointer rounded-md p-2 hover:bg-neutral-400 hover:bg-opacity-20 transition-all w-fit"
            >
              VND
            </Text>
          </Flex>
          <Divider mt={30} mb={15} />
          <Text
            size="xs"
            className="cursor-pointer rounded-md hover:bg-neutral-400 hover:bg-opacity-20 transition-all w-fit text-center mx-auto"
          >
            Lalala.com is part of Booking Holdings Inc, the world leader in
            online travel and related services.
          </Text>
          <Text
            size="xs"
            className="cursor-pointer rounded-md hover:bg-neutral-400 hover:bg-opacity-20 transition-all w-fit text-center mx-auto"
          >
            Copyright © 2024 Lalala.com™. All rights reserved.
          </Text>
        </Container>
      </div>
    </div>
  );
};
export const MainFooter = React.memo(MainFooterComponent);
