// src/pages/Logiref.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function LogisticaRefrigerata() {
  // usa namespace e prefisso coerenti con il JSON
  const { t, i18n } = useTranslation("common", { keyPrefix: "pages.logiref" });

  useEffect(() => {
    document.title = t("seoTitle", { defaultValue: "Logistica Refrigerata | Nitra System" });
  }, [i18n.language, t]);

  const points = t("intro.points", { returnObjects: true, defaultValue: [] }) || [];
  const benefits = t("benefits.cards", { returnObjects: true, defaultValue: [] }) || [];

  return (
    <Box bg="white" color="gray.800">
      {/* HERO SECTION */}
      <Box
        position="relative"
        bgImage="url('/logisticarefrigerata3.png')"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "rgba(0,0,0,0.5)",
        }}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        color="white"
      >
        <Container maxW="7xl" position="relative" zIndex={1}>
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" mb={4}>
            {t("hero.title")}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95} maxW="4xl" mx="auto">
            {t("hero.subtitle")}
          </Text>
        </Container>
      </Box>

      {/* INTRO SECTION */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
            <Box>
              <Heading as="h2" size="lg" color="nitra.primary" mb={4}>
                {t("intro.title")}
              </Heading>
              <Text fontSize="md" mb={6} color="gray.700">
                {t("intro.body")}
              </Text>

              <List spacing={3} fontSize="md">
                {points.map((item, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="nitra.accent" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/logisticarefrigerata2.png"
                alt={t("images.mainAlt")}
                borderRadius="xl"
                shadow="xl"
                maxW="95%"
                mx="auto"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* BENEFITS SECTION */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <Heading as="h3" textAlign="center" size="lg" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {t("benefits.title")}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {benefits.map((b, i) => (
              <Box key={i} p={6} bg="white" borderRadius="xl" shadow="md">
                <Heading as="h4" size="md" mb={3}>{b.title}</Heading>
                <Text color="gray.600">{b.body}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>{t("cta.title")}</Heading>
          <Text opacity={0.9} mb={8}>{t("cta.desc")}</Text>
          <Button
            as={RouterLink}
            to="/contatti"
            bg="nitra.accent"
            color="white"
            px={8}
            py={3}
            borderRadius="full"
            fontWeight="600"
            _hover={{ bg: "#C85B38" }}
          >
            {t("cta.button")}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
