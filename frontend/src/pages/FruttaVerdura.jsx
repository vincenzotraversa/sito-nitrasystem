// src/pages/FruttaVerdura.jsx
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
  Stack,
  Button,
  Icon,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { FaCheckCircle, FaLeaf, FaThermometerHalf, FaTint, FaTruck, FaArrowRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

export default function FruttaVerdura() {
  // 🔑 usa il namespace pages.produce
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "pages.produce" });

  useEffect(() => {
    document.title = t("seoTitle");
  }, [i18n.language, t]);

  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/ortofrutta.png')" 
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
            {t("title")}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95} maxW="3xl" mx="auto">
            {t("intro")}
          </Text>
        </Container>
      </Box>

      {/* ================= DESCRIZIONE / INTRO ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h2" size="lg" color="nitra.primary" mb={4} fontWeight="700">
                {t("introTitle", { defaultValue: t("title") })}
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                {t("introLong", {
                  defaultValue:
                    "Dalla raccolta allo stoccaggio, progettiamo sistemi che riducono rapidamente il campo termico nei prodotti ortofrutticoli, stabilizzano umidità e minimizzano i cali peso."
                })}
              </Text>

              <List spacing={3} fontSize="md">
                {[
                  t("bullets.0", { defaultValue: "Pre-cooling immediato post-raccolta" }),
                  t("bullets.1", { defaultValue: "Celle U.L.O./CA per shelf-life estesa" }),
                  t("bullets.2", { defaultValue: "Gestione umidità e flussi d’aria dedicati" })
                ].map((txt, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="nitra.accent" />
                    {txt}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/frollatura.png" // <--- aggiungi in /public
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

      {/* ================= SOLUZIONI ================= */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {t("sol.title")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              { icon: FaThermometerHalf, title: t("sol.points.0"), text: t("solText.0", { defaultValue: "Riduzione rapida della T° di polpa con gestione curva di raffreddamento." }) },
              { icon: FaLeaf, title: t("sol.points.1"), text: t("solText.1", { defaultValue: "Atmosfera controllata/ultra-bassa per rallentare la respirazione dei frutti." }) },
              { icon: FaTint, title: t("sol.points.2"), text: t("solText.2", { defaultValue: "Controllo UR% per proteggere croccantezza e aspetto." }) }
            ].map((c, i) => (
              <MotionBox key={i} p={6} bg="white" rounded="2xl" shadow="md" whileHover={{ y: -4 }} transition=".2s">
                <HStack spacing={4} mb={2}>
                  <Icon as={c.icon} boxSize={8} color="nitra.accent" />
                  <Heading as="h4" size="md">{c.title}</Heading>
                </HStack>
                <Text color="gray.600">{c.text}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= BENEFICI ================= */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading as="h3" size="lg" textAlign="center" mb={{ base: 8, md: 12 }} color="nitra.primary">
            {t("benefits.title")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {t("benefits.points", { returnObjects: true }).map((b, i) => (
              <Box key={i} p={6} bg="white" rounded="xl" shadow="md">
                <Heading as="h4" size="md" mb={3}>{b}</Heading>
                <Text color="gray.600">
                  {t(`benefits.body.${i}`, {
                    defaultValue:
                      [
                        "Aumento vendibile grazie a migliori texture e minor disidratazione.",
                        "Meno scarti e rese più prevedibili lungo la filiera.",
                        "Standard qualitativi costanti fino alla consegna."
                      ][i] || ""
                  })}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Stack direction={{ base: "column", md: "row" }} spacing={6} mt={10} align="center" justify="center">
            <HStack spacing={3}>
              <Icon as={FaTruck} />
              <Text color="gray.600">{t("kpi.coldChain", { defaultValue: "Continuità catena del freddo" })}</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaThermometerHalf} />
              <Text color="gray.600">{t("kpi.precision", { defaultValue: "Controllo preciso della temperatura" })}</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaTint} />
              <Text color="gray.600">{t("kpi.humidity", { defaultValue: "Gestione umidità e cali peso" })}</Text>
            </HStack>
          </Stack>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>{t("cta.title")}</Heading>
          <Text mb={8} opacity={0.95}>
            {t("cta.desc")}
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
            <Button
              as={RouterLink}
              to="/contatti"
              colorScheme="teal"
              variant="solid"
              size="lg"
              rightIcon={<FaArrowRight />}
            >
              {t("cta.button")}
            </Button>
            <Button
              as={RouterLink}
              to="/"
              variant="outline"
              size="lg"
              color="white"
              _hover={{ bg: "white", color: "nitra.primary" }}
            >
              {t("cta.secondary")}
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
