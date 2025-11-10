import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Image,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Panificazione() {
  // ns 'common' + keyPrefix coerente con i JSON
  const { t, i18n } = useTranslation("common", { keyPrefix: "pages.bakery" });
  const { lang } = useParams();

  const withLang = (p) => (lang ? `/${lang}${p}` : p);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t("seoTitle", { defaultValue: "Panificazione | Nitra System" });
  }, [i18n.language, t]);

  // array sicuri (se la chiave manca restituisce [])
  const introPoints = t("intro.points", { returnObjects: true, defaultValue: [] }) || [];
  const solItems = t("sol.items", { returnObjects: true, defaultValue: [] }) || [];

  return (
    <>
      {/* HERO */}
      <Box position="relative" h={{ base: "42vh", md: "50vh" }} mt={{ base: "72px", md: "80px" }}>
        <Image
          src="/panificazione.webp"
          alt={t("images.mainAlt", { defaultValue: "Impianti panificazione" })}
          w="100%"
          h="100%"
          objectFit="cover"
          opacity={0.85}
        />
        <Flex
          position="absolute"
          inset={0}
          bg="rgba(14,74,103,0.38)"
          direction="column"
          textAlign="center"
          color="white"
          px={4}
          align="center"
          justify="flex-end"
          pb={{ base: "8vh", md: "10vh" }}
        >
          <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={2} textShadow="0 2px 8px rgba(0,0,0,0.5)">
            {t("hero.title")}
          </Heading>
          <Text
            maxW="3xl"
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.900"
            textShadow="0 1px 6px rgba(0,0,0,0.4)"
          >
            {t("hero.subtitle")}
          </Text>
        </Flex>
      </Box>

      {/* INTRO + VANTAGGI */}
      <Container maxW="7xl" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mb={{ base: 10, md: 14 }}>
          <Image
            src="/pane2.png"
            alt={t("images.secondaryAlt", { defaultValue: "Camere di lievitazione e conservazione impasti" })}
            rounded="xl"
            objectFit="cover"
            h={{ base: "220px", md: "320px" }}
          />
          <Box>
            <Heading size="lg" color="nitra.primary" mb={3}>
              {t("intro.title")}
            </Heading>
            <Text color="gray.700" mb={4}>
              {t("intro.body")}
            </Text>
            <List spacing={2}>
              {introPoints.map((p, i) => (
                <ListItem key={i}>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  {p}
                </ListItem>
              ))}
            </List>
          </Box>
        </SimpleGrid>

        <Divider my={8} />

        {/* SOLUZIONI – ACCORDION */}
        <Heading size="lg" color="nitra.primary" mb={4}>
          {t("sol.title")}
        </Heading>
        <Accordion allowMultiple>
          {solItems.map((item, i) => (
            <AccordionItem key={i}>
              <h2>
                <AccordionButton _expanded={{ bg: "teal.50" }}>
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.body}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <HStack mt={10} spacing={4}>
          <Button as={RouterLink} to={withLang("/contatti")} colorScheme="teal" size="lg">
            {t("cta.primary")}
          </Button>
          <Button as={RouterLink} to={withLang("/")} variant="outline">
            {t("cta.secondary")}
          </Button>
        </HStack>
      </Container>

      {/* CTA FINALE */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>{t("cta.title")}</Heading>
          <Text mb={8} opacity={0.9}>
            {t("cta.desc")}
          </Text>

          <Button
            as={RouterLink}
            to={withLang("/contatti")}
            bg="nitra.accent"
            color="white"
            px={8}
            py={3}
            rounded="full"
            fontWeight="600"
            _hover={{ bg: "#C85B38" }}
            _active={{ bg: "#9F3A22" }}
          >
            {t("cta.button")}
          </Button>
        </Container>
      </Box>
    </>
  );
}
