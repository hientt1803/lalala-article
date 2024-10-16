import { Container, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const FOOTER_LINK = [
  { title: "Countries", link: "/" },
  { title: "Regions", link: "/" },
  { title: "Cities", link: "/" },
  { title: "Districts", link: "/" },
  { title: "Airports", link: "/" },
  { title: "Hotels", link: "/" },
  { title: "Places of interest", link: "/" },
  { title: "Homes", link: "/" },
  { title: "Apartments", link: "/" },
  { title: "Resorts", link: "/" },
  { title: "Villas", link: "/" },
  { title: "Hostels", link: "/" },
  { title: "B&Bs", link: "/" },
  { title: "Guest Houses", link: "/" },
  { title: "Unique places to stay", link: "/" },
  { title: "All destinations", link: "/" },
  { title: "All flight destinations", link: "/" },
  { title: "All car rental locations", link: "/" },
  { title: "All vacation destinations", link: "/" },
  { title: "Reviews", link: "/" },
  { title: "Discover monthly stays", link: "/" },
  { title: "Travel articles", link: "/" },
  { title: "Seasonal and holiday deals", link: "/" },
  { title: "Traveller Review Awards", link: "/" },
  { title: "Car rental", link: "/" },
  { title: "Flight finder", link: "/" },
  { title: "Restaurant reservations", link: "/" },
  { title: "Lalala.com for Travel Agents", link: "/" },
  { title: "Coronavirus (COVID-19) FAQs", link: "/" },
  { title: "About Lalala.com", link: "/" },
  { title: "Customer Service Help", link: "/" },
  { title: "Partner help", link: "/" },
  { title: "Careers", link: "/" },
  { title: "Sustainability", link: "/" },
  { title: "Press Center", link: "/" },
  { title: "Safety Resource Center", link: "/" },
  { title: "Investor relations", link: "/" },
  { title: "Terms & Conditions", link: "/" },
  { title: "Partner dispute", link: "/" },
  { title: "How We Work", link: "/" },
  { title: "Privacy & cookie statement", link: "/" },
  { title: "Modern Slavery Statement", link: "/" },
  { title: "Human Rights Statement", link: "/" },
  { title: "Corporate contact", link: "/" },
  { title: "Content guidelines and reporting", link: "/" },
];

const FooterNavLink = () => {
  return (
    <Container size={"lg"} mt={30}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-5 pt-5 md:mb-0">
        <div>
          <Text size="sm" fw={700} mb={15}>
            Support
          </Text>
          {FOOTER_LINK.slice(0, 5).map((item, index) => (
            <Stack key={index}>
              <Link
                href={item.link}
                className="text-sm mb-2 font-sans hover:underline"
              >
                {item.title}
              </Link>
            </Stack>
          ))}
        </div>

        <div>
          <Text size="sm" fw={700} mb={15}>
            Discover
          </Text>
          {FOOTER_LINK.slice(5, 14).map((item, index) => (
            <Stack key={index}>
              <Link
                href={item.link}
                className="text-sm mb-2 font-sans hover:underline"
              >
                {item.title}
              </Link>
            </Stack>
          ))}
        </div>

        <div>
          <Text size="sm" fw={700} mb={15}>
            Terms and settings
          </Text>
          {FOOTER_LINK.slice(15, 19).map((item, index) => (
            <Stack key={index}>
              <Link
                href={item.link}
                className="text-sm mb-2 font-sans hover:underline"
              >
                {item.title}
              </Link>
            </Stack>
          ))}
        </div>

        <div>
          <Text size="sm" fw={700} mb={15}>
            Partners
          </Text>
          {FOOTER_LINK.slice(20, 27).map((item, index) => (
            <Stack key={index}>
              <Link
                href={item.link}
                className="text-sm mb-2 font-sans hover:underline"
              >
                {item.title}
              </Link>
            </Stack>
          ))}
        </div>

        <div>
          <Text size="sm" fw={700} mb={15}>
            About
          </Text>
          {FOOTER_LINK.slice(27, 30).map((item, index) => (
            <Stack key={index}>
              <Link
                href={item.link}
                className="text-sm mb-2 font-sans hover:underline"
              >
                {item.title}
              </Link>
            </Stack>
          ))}
        </div>

        {/* <Grid.Col span={4} mb={50}>
          {FOOTER_LINK.slice(25, 30).map((item, index) => (
            <Stack key={index}>
              <Link href={item.link} className="text-sm mb-2 font-sans">
                {item.title}
              </Link>
            </Stack>
          ))}
        </Grid.Col> */}
      </div>
    </Container>
  );
};

export default React.memo(FooterNavLink);
