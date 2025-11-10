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
  Divider,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProdottiTrasformati() {
  // ✅ tutte le chiavi vivono sotto pages.processed
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "pages.processed" });
  const { lang } = useParams();
  const withLang = (p) => (lang ? `/${lang}${p}` : p);

  // Letture con fallback robusti
  const seoTitle = t("seoTitle", { defaultValue: t("title", { defaultValue: "Prodotti trasformati" }) });
  const pageTitle = t("title", { defaultValue: "Prodotti alimentari trasformati" });

  // intro può essere stringa (come nei tuoi JSON) o oggetto {title, body, points[]}
  const intro = t("intro", { returnObjects: true, defaultValue: "" });

  // Sezioni "sol" e "benefits": titoli + array
  const solTitle = t("sol.title", { defaultValue: t("solutionsTitle", { defaultValue: "Soluzioni" }) });
  const solItems = t("sol.items", { returnObjects: true, defaultValue: [] }) || [];
  const solPoints = t("sol.points", { returnObjects: true, defaultValue: [] }) || [];
  const solutions = solItems.length > 0 ? solItems : solPoints.map((p) => ({ title: p, body: "" }));

  const benTitle = t("benefits.title", { defaultValue: t("benefitsTitle", { defaultValue: "Benefici" }) });
  const benPoints = t("benefits.points", { returnObjects: true, defaultValue: [] }) || [];

  useEffect(() => {
    document.title = seoTitle;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/trasformati-bg.jpg')" // assicurati che l'immagine sia in /public
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
            {pageTitle}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            {
              // Se intro è una stringa usala qui come sottotitolo
              typeof intro === "string"
                ? intro
                : intro?.body ||
                  t("subtitle", {
                    defaultValue:
                      "Soluzioni di refrigerazione e conservazione per l’industria dei prodotti trasformati: sicurezza, qualità e tracciabilità.",
                  })
            }
          </Text>
        </Container>
      </Box>

      {/* ================= DESCRIZIONE / INTRO ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h2" size="lg" color="nitra.primary" mb={4} fontWeight="700">
                {typeof intro === "object" && intro?.title
                  ? intro.title
                  : t("introTitle", {
                      defaultValue: t("solutionsTitle", { defaultValue: "Soluzioni integrate per la refrigerazione industriale" }),
                    })}
              </Heading>

              {/* corpo intro */}
              {typeof intro === "object" && intro?.body ? (
                <Text mb={6} fontSize="md" color="gray.700">
                  {intro.body}
                </Text>
              ) : typeof intro === "string" ? (
                <Text mb={6} fontSize="md" color="gray.700">
                  {intro}
                </Text>
              ) : (
                <Text mb={6} fontSize="md" color="gray.700">
                  {t("introFallback", {
                    defaultValue:
                      "Progetti su misura per conserve, sughi, piatti pronti e semilavorati: efficienza energetica, controllo della temperatura e conformità HACCP.",
                  })}
                </Text>
              )}

              {/* punti intro (se presenti) */}
              {Array.isArray(intro?.points) && intro.points.length > 0 && (
                <List spacing={3} fontSize="md">
                  {intro.points.map((p, i) => (
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
                src="/processoalimentare.jpg" // assicurati che l'immagine sia in /public
                alt={t("images.mainAlt", {
                  defaultValue: t("imageAlt", {
                    defaultValue: "Impianto frigorifero per prodotti alimentari trasformati",
                  }),
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

      {/* ================= SOLUZIONI ================= */}
      {(solutions && solutions.length > 0) && (
        <Box bg="gray.50" py={{ base: 12, md: 20 }}>
          <Container maxW="6xl">
            <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
              {solTitle}
            </Heading>

            {/* Se hai items strutturati {title, body} li renderizziamo come card; 
                se erano solo "points", li mostriamo come lista. */}
            {solItems.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {solutions.map((s, i) => (
                  <Box key={i} p={6} bg="white" rounded="xl" shadow="md">
                    <Heading as="h4" size="md" mb={3}>
                      {s?.title || t("solution", { defaultValue: "Soluzione" }) + ` ${i + 1}`}
                    </Heading>
                    {s?.body ? <Text color="gray.600">{s.body}</Text> : null}
                  </Box>
                ))}
              </SimpleGrid>
            ) : (
              <List spacing={3} fontSize="md" maxW="4xl" mx="auto">
                {solutions.map((p, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="nitra.accent" />
                    {typeof p === "string" ? p : p?.title}
                  </ListItem>
                ))}
              </List>
            )}
          </Container>
        </Box>
      )}

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>
            {t("cta.title", {
              defaultValue: "Impianti efficienti per alimenti pronti e trasformati",
            })}
          </Heading>
          <Text mb={8} opacity={0.9}>
            {t("cta.desc", {
              defaultValue:
                "Ti supportiamo dalla fase di progetto alla messa in servizio: raffreddamento rapido, stoccaggio a lungo termine e telemetria.",
            })}
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
            {t("cta.button", { defaultValue: "Contattaci ora" })}
          </Button>
          <Divider opacity={0.2} mt={8} />
        </Container>
      </Box>
    </Box>
  );
}
