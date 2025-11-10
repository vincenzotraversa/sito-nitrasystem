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
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LattieroCaseario() {
  const { t } = useTranslation();

  // helpers i18n sicuri
  const arr = (k) => {
    const v = t(k, { returnObjects: true, defaultValue: [] });
    return Array.isArray(v) ? v : [];
  };
  const txt = (k, f = "") => (typeof t(k) === "string" ? t(k) : f);

  useEffect(() => {
    document.title = txt("pages.dairy.seoTitle", "Prodotti Lattiero-Caseari | Nitra System");
  }, [t]);

  const withLang = (p) => p;

  return (
    <Box bg="white" color="gray.800">
      {/* HERO */}
      <Box
        position="relative"
        bgImage="url('/lattiero.jpg')"
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
        <Container maxW="6xl" position="relative">
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} mb={4} fontWeight="800">
            {txt("pages.dairy.hero.title", "Impianti frigoriferi per il settore lattiero-caseario")}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            {txt(
              "pages.dairy.hero.subtitle",
              "Sistemi di refrigerazione avanzati per garantire qualità e sicurezza lungo tutto il processo produttivo."
            )}
          </Text>
        </Container>
      </Box>

      {/* DESCRIZIONE */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h2" size="lg" color="nitra.primary" mb={4} fontWeight="700">
                {txt(
                  "pages.dairy.intro.title",
                  "Soluzioni su misura per la catena del freddo nel settore latte e formaggi"
                )}
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                {txt(
                  "pages.dairy.intro.body",
                  "Progettiamo impianti per produzione e conservazione dei lattiero-caseari, preservando le proprietà del latte e ottimizzando i consumi."
                )}
              </Text>

              <List spacing={3} fontSize="md" color="gray.700">
                {arr("pages.dairy.intro.points").map((p, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="nitra.accent" />
                    {p}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/lattiero.jpg"
                alt={txt("pages.dairy.images.mainAlt", "Impianto frigorifero settore lattiero-caseario")}
                rounded="xl"
                shadow="xl"
                mx="auto"
                maxW="90%"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* VANTAGGI */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {txt("pages.dairy.benefits.title", "Vantaggi per l’industria lattiero-casearia")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {arr("pages.dairy.benefits.cards").map((c, i) => (
              <Box key={i} p={6} bg="white" rounded="xl" shadow="md">
                <Heading as="h4" size="md" mb={3}>
                  {c.title}
                </Heading>
                <Text color="gray.600">{c.body}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>{txt("pages.dairy.cta.title", "Progettiamo il freddo su misura per il tuo caseificio")}</Heading>
          <Text mb={8} opacity={0.9}>
            {txt(
              "pages.dairy.cta.desc",
              "Affidati a Nitra System per impianti efficienti, sostenibili e conformi agli standard di qualità."
            )}
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
            {txt("pages.dairy.cta.button", "Contattaci ora")} <Box as="span" ml={2}>›</Box>
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
