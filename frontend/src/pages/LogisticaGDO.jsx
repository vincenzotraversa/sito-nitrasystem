import React, { useEffect } from "react";
import {
  Box, Container, Heading, Text, SimpleGrid, Image,
  List, ListItem, ListIcon, Stack, Button, Badge, Divider
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCheckCircle, FaThermometerHalf, FaRoute, FaClock, FaCogs, FaTruck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function LogisticaGDO() {
  // ns + prefisso coerenti con i JSON
  const { t, i18n } = useTranslation("common", { keyPrefix: "pages.logisticaGdo" });

  // SEO <title>
  useEffect(() => {
    document.title = t("seoTitle", { defaultValue: "Logistica GDO | Nitra System" });
  }, [t, i18n.language]);

  // array sicuri da i18n
  const introPoints = t("intro.points", { returnObjects: true, defaultValue: [] }) || [];
  const serviceCards = t("services.cards", { returnObjects: true, defaultValue: [] }) || [];
  const processSteps = t("process.steps", { returnObjects: true, defaultValue: [] }) || [];
  const kpis = t("kpi.items", { returnObjects: true, defaultValue: [] }) || [];

  // piccola mappa per le icone dei servizi
  const serviceIcons = [FaThermometerHalf, FaRoute, FaClock];

  return (
    <Box bg="white" color="gray.800">
      {/* HERO */}
      <Box
        position="relative"
        bgImage="url('/gdo2.png')"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        _before={{ content: '""', position: "absolute", inset: 0, bg: "rgba(0,0,0,0.5)" }}
        py={{ base: 20, md: 28 }}
        color="white"
      >
        <Container maxW="7xl" position="relative" zIndex={1} textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            {t("hero.title", { defaultValue: "" })}
          </Heading>
          <Text fontSize="lg" opacity={0.95} maxW="4xl" mx="auto">
            {t("hero.subtitle", { defaultValue: "" })}
          </Text>
        </Container>
      </Box>

      {/* INTRO */}
      <Box py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading size="lg" mb={4}>{t("intro.title", { defaultValue: "" })}</Heading>
              <Text mb={4}>{t("intro.p1", { defaultValue: "" })}</Text>
              <Text mb={6} color="gray.600">{t("intro.p2", { defaultValue: "" })}</Text>
              <List spacing={3}>
                {introPoints.map((p, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    {p}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Image
                src="/logisticagdo.webp"
                alt={t("images.introAlt", { defaultValue: "Retail logistics hub" })}
                borderRadius="xl"
                shadow="lg"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* SERVIZI */}
      <Box bg="gray.50" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <Heading size="lg" textAlign="center" mb={10}>
            {t("services.title", { defaultValue: "" })}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {serviceCards.map((c, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <Box key={i} p={6} bg="white" borderRadius="xl" shadow="md">
                  <Box fontSize="3xl" mb={4}><Icon /></Box>
                  <Heading size="md" mb={2}>{c.title}</Heading>
                  <Text color="gray.600">{c.text ?? c.body ?? ""}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* PROCESSO */}
      <Box py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <Heading size="lg" textAlign="center" mb={4}>
            {t("process.title", { defaultValue: "" })}
          </Heading>
          <Text textAlign="center" color="gray.600" mb={10}>
            {t("process.subtitle", { defaultValue: "" })}
          </Text>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
            {processSteps.map((s, i) => {
              const StepIcon = [FaCogs, FaThermometerHalf, FaTruck, FaCheckCircle][i % 4];
              return (
                <Box key={i} p={6} bg="gray.50" borderRadius="xl" shadow="sm">
                  <Badge colorScheme="teal" mb={3}>{i + 1}</Badge>
                  <Box fontSize="2xl" mb={3}><StepIcon /></Box>
                  <Heading size="md" mb={2}>{s.title}</Heading>
                  <Text color="gray.600">{s.text ?? s.body ?? ""}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="teal.600" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading size="lg" mb={3}>{t("cta.title", { defaultValue: "" })}</Heading>
              <Text opacity={0.95}>{t("cta.text", { defaultValue: "" })}</Text>
            </Box>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify={{ md: "end" }}>
              <Button as={RouterLink} to="/contatti" size="lg" colorScheme="blackAlpha" variant="solid">
                {t("cta.primary", { defaultValue: "" })}
              </Button>
            </Stack>
          </SimpleGrid>
          <Divider my={8} borderColor="whiteAlpha.500" />
          <Text fontSize="sm" opacity={0.8}>{t("disclaimer", { defaultValue: "" })}</Text>
        </Container>
      </Box>
    </Box>
  );
}
