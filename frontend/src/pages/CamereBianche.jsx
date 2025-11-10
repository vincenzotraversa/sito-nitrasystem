// src/pages/CamereBianche.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
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

export default function CamereBianche() {
  // Usiamo il keyPrefix per puntare a pages.cleanrooms.*
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "pages.cleanrooms" });

  const pageTitle =
    i18n.language === "it"
      ? "Camere bianche | Nitra System"
      : "Cleanrooms | Nitra System";

  const pageDescription =
    i18n.language === "it"
      ? "Progettazione e realizzazione di camere bianche ISO 14644 per i settori farmaceutico, biomedicale, elettronico e ricerca. Nitra System: controllo particellare, HVAC e validazione ambientale."
      : "Design and construction of ISO 14644 cleanrooms for pharmaceutical, biomedical, electronics and research. Nitra System: particle control, HVAC and environmental validation.";

  return (
    <Box bg="white" color="gray.800">
      {/* ===== META TAGS SEO ===== */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={
            i18n.language === "it"
              ? "camere bianche, cleanroom, ISO 14644, HVAC, validazione, nitra system, farmaceutico, biomedicale"
              : "cleanrooms, ISO 14644, HVAC, validation, pharma, biomedical, nitra system"
          }
        />
        {/* aggiorna il dominio definitivo quando pubblicherai */}
        <link rel="canonical" href="https://www.nitrasystem.com/camere-bianche" />
      </Helmet>

      {/* ===== HERO ===== */}
      <Box
        position="relative"
        bgImage="url('/camerebianche.png')"  // metti il file in /public
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "rgba(0,0,0,0.45)",
        }}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        color="white"
      >
        <Container maxW="6xl" position="relative" zIndex="1">
          <Heading size="2xl" mb={4}>
            {t("cleanrooms")}
          </Heading>
          <Text fontSize="xl">{t("cleanroomsSubtitle")}</Text>
        </Container>
      </Box>

      {/* ===== CONTENUTO ===== */}
      <Container maxW="7xl" py={{ base: 12, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Heading size="lg" mb={4}>
              {t("cleanroomsTitle")}
            </Heading>
            <Text mb={6} color="gray.700">
              {t("cleanroomsIntro")}
            </Text>

            <List spacing={3} fontSize="md">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                {t("cleanroomsList1")}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                {t("cleanroomsList2")}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                {t("cleanroomsList3")}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                {t("cleanroomsList4")}
              </ListItem>
            </List>
          </Box>

          <Box>
            <Image
              src="/camerebianche.png"  // metti il file in /public
              alt={t("cleanrooms")}
              borderRadius="xl"
              boxShadow="lg"
            />
          </Box>
        </SimpleGrid>
      </Container>

      {/* ===== CTA ===== */}
      <Box bg="gray.50" py={{ base: 10, md: 16 }}>
        <Container maxW="5xl" textAlign="center">
          <Heading size="md" mb={4}>
            {t("cleanroomsCtaTitle")}
          </Heading>
          <Text fontSize="md" color="gray.600" mb={8}>
            {t("cleanroomsCtaText")}
          </Text>

          <Button
            as={RouterLink}
            to="/contatti"
            colorScheme="teal"
            size="lg"
          >
            {t("getAQuote", { defaultValue: "Richiedi preventivo" })}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
