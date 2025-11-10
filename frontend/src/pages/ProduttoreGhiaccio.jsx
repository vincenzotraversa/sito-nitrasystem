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
import { Link as RouterLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProduttoreGhiaccio() {
  // ✅ tutte le chiavi vivono sotto pages.ice
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "pages.ice" });
  const { lang } = useParams();
  const withLang = (p) => (lang ? `/${lang}${p}` : p);

  // Letture con fallback robusti
  const seoTitle = t("seoTitle", { defaultValue: t("title", { defaultValue: "Produttori di ghiaccio" }) });
  const heroTitle = t("hero.title", { defaultValue: t("title", { defaultValue: "Produttori di ghiaccio" }) });
  const heroSubtitle = t("hero.subtitle", {
    defaultValue:
      "Ghiaccio granulare/supergranulare e a scaglie per conservazione, esposizione e processi produttivi.",
  });

  const introTitle = t("intro.title", { defaultValue: "Perché serve un produttore di ghiaccio?" });
  const introBody = t("intro.body", {
    defaultValue:
      "Garantisce temperatura e umidità costanti per alimenti e bevande. Utile in Ho.Re.Ca., agroalimentare e industria.",
  });
  const introPoints = t("intro.points", { returnObjects: true, defaultValue: [] }) || [];

  const typesTitle = t("types.title", { defaultValue: "Tipologie di ghiaccio disponibili" });
  const typeCards = t("types.cards", { returnObjects: true, defaultValue: [] }) || [];

  const benTitle = t("benefits.title", { defaultValue: "Vantaggi dei nostri produttori di ghiaccio" });
  const benCards = t("benefits.cards", { returnObjects: true, defaultValue: [] }) || [];

  const ctaTitle = t("cta.title", { defaultValue: "Produzione di ghiaccio su misura per ogni esigenza" });
  const ctaDesc = t("cta.desc", {
    defaultValue:
      "Progettiamo e installiamo impianti per ghiaccio granulare, supergranulare e a scaglie: efficienti, igienici e affidabili.",
  });
  const ctaButton = t("cta.button", { defaultValue: t("cta.primary", { defaultValue: "Contattaci ora" }) });

  useEffect(() => {
    document.title = seoTitle;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/produttoreghiaccio2.png')" 
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
        mt={{ base: "72px", md: "80px" }}
      >
        <Container maxW="6xl" position="relative">
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} mb={4} fontWeight="800">
            {heroTitle}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            {heroSubtitle}
          </Text>
        </Container>
      </Box>

      {/* ================= INTRO ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h2" size="lg" color="nitra.primary" mb={4} fontWeight="700">
                {introTitle}
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                {introBody}
              </Text>

              {Array.isArray(introPoints) && introPoints.length > 0 && (
                <List spacing={3} fontSize="md">
                  {introPoints.map((p, i) => (
                    <ListItem key={i}>
                      <ListIcon as={FaCheckCircle} color="nitra.accent" />
                      {p}
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>

            <Box textAlign="center">
              <Image
                src="/produttoreghiaccio2.png"
                alt={t("images.mainAlt", {
                  defaultValue: "Produttore di ghiaccio industriale per alimenti e bevande",
                })}
                rounded="xl"
                shadow="xl"
                mx="auto"
                maxW="90%"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= TIPOLOGIE ================= */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {typesTitle}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {(typeCards.length > 0 ? typeCards : [
              {
                title: t("types.fallback1.title", { defaultValue: "Ghiaccio granulare e supergranulare" }),
                body: t("types.fallback1.body", {
                  defaultValue:
                    "Ideale per esposizione e conservazione: il granulare è più umido e rapido nel raffreddare; il supergranulare è più compatto e mantiene più a lungo la temperatura.",
                }),
              },
              {
                title: t("types.fallback2.title", { defaultValue: "Ghiaccio a scaglie" }),
                body: t("types.fallback2.body", {
                  defaultValue:
                    "Più freddo e asciutto (≈ -6/-12°C), con spessore ridotto: perfetto per lavorazioni e conservazione prolungata di alimenti sensibili.",
                }),
              },
            ]).map((card, i) => (
              <Box key={i} p={6} bg="white" rounded="xl" shadow="md">
                <Heading as="h4" size="md" mb={3}>
                  {card?.title}
                </Heading>
                <Text color="gray.600">{card?.body}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= VANTAGGI ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {benTitle}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {(benCards.length > 0 ? benCards : [
              {
                title: t("benefits.fallback1.title", { defaultValue: "Efficienza e continuità" }),
                body: t("benefits.fallback1.body", {
                  defaultValue:
                    "Produzione costante con consumi ottimizzati anche in condizioni ambientali difficili.",
                }),
              },
              {
                title: t("benefits.fallback2.title", { defaultValue: "Igiene garantita" }),
                body: t("benefits.fallback2.body", {
                  defaultValue:
                    "Materiali inox o anticorrosione nelle parti a contatto con l’acqua per massima igiene e durata.",
                }),
              },
              {
                title: t("benefits.fallback3.title", { defaultValue: "Versatilità d’uso" }),
                body: t("benefits.fallback3.body", {
                  defaultValue:
                    "Per agroalimentare, Ho.Re.Ca., sanitario e industria. Configurazioni su misura di formato e portata.",
                }),
              },
            ]).map((b, i) => (
              <Box key={i} p={6} bg="white" rounded="xl" shadow="md">
                <Heading as="h4" size="md" mb={3}>
                  {b?.title}
                </Heading>
                <Text color="gray.600">{b?.body}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>{ctaTitle}</Heading>
          <Text mb={8} opacity={0.9}>
            {ctaDesc}
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
            {ctaButton}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
