import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hydrocooler() {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "pages.hydrocooler" });

  useEffect(() => {
    document.title = t("seoTitle");
  }, [i18n.language, t]);

  return (
    <Box bg="white" color="gray.800">
      {/* ============== HERO ============== */}
      <Box
        position="relative"
        bgImage="url('/hydrocooler2.png')"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        _before={{ content: '""', position: "absolute", inset: 0, bg: "rgba(0,0,0,0.45)" }}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        color="white"
      >
        <Container maxW="6xl" position="relative">
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} mb={4} fontWeight="800">
            {t("hero.title")}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            {t("hero.subtitle")}
          </Text>
        </Container>
      </Box>

      {/* ============== INTRO / DESCRIZIONE ============== */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h2" size="lg" color="nitra.primary" mb={4} fontWeight="700">
                {t("intro.title")}
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                {t("intro.body")}
              </Text>
              <List spacing={3} fontSize="md">
                {t("intro.points", { returnObjects: true }).map((p, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="nitra.accent" />
                    {p}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/hydrocooler3.png"
                alt={t("images.mainAlt")}
                rounded="xl"
                shadow="xl"
                mx="auto"
                maxW="90%"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ============== FEATURES ============== */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {t("features.title")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {t("features.points", { returnObjects: true }).map((card, i) => (
              <Box key={i} p={6} bg="white" rounded="xl" shadow="md">
                <Heading as="h4" size="md" mb={3}>
                  {card.title}
                </Heading>
                <Text color="gray.600">{card.body}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ============== BENEFITS ============== */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {t("benefits.title")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {t("benefits.cards", { returnObjects: true }).map((card, i) => (
              <Box key={i} p={6} bg="white" rounded="xl" shadow="md">
                <Heading as="h4" size="md" mb={3}>
                  {card.title}
                </Heading>
                <Text color="gray.600">{card.body}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ============== CTA ============== */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>{t("cta.title")}</Heading>
          <Text mb={8} opacity={0.9}>
            {t("cta.desc")}
          </Text>
          <Button
            as={RouterLink}
            to="/contatti"
            colorScheme="orange"
            bg="orange.500"
            _hover={{ bg: "orange.400" }}
            size="lg"
            fontWeight="600"
          >
            {t("cta.button")}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
