// src/pages/LavorazioneCarni.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  Image,
  Badge,
  Divider,
  List,
  ListItem,
  Icon,
  Flex,
  Button
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function LavorazioneCarni() {
  const { t } = useTranslation();

  // Helpers i18n sicuri
  const arr = (key) => {
    const v = t(key, { returnObjects: true, defaultValue: [] });
    return Array.isArray(v) ? v : [];
  };
  const txt = (key, fallback = "") => {
    const v = t(key);
    return typeof v === "string" ? v : fallback;
  };

  useEffect(() => {
    document.title = txt(
      "pages.meat.seoTitle",
      "Lavorazione carni | Nitra System – Celle, frollatura, tunnel e sale lavorazione"
    );
  }, [t]);

  // per link con lingua (se usi prefix tipo /it, adatta qui)
  const withLang = (p) => p;

  const sections = arr("pages.meat.sections"); // array di blocchi (titolo, testo, bullets, img)

  return (
    <>
      {/* HERO */}
      <Box position="relative" h={["42vh", "46vh", "50vh"]} mt={{ base: "72px", md: "80px" }}>
        <Image
          src="/lavorazionecarni.png"
          alt={txt("pages.meat.hero.title", "Lavorazione carni")}
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
          <Heading size={["xl", "2xl"]} mb={2} textShadow="0 2px 8px rgba(0,0,0,0.5)">
            {txt("pages.meat.hero.title", "Lavorazione carni")}
          </Heading>
          <Text
            maxW="3xl"
            fontSize={["md", "lg"]}
            color="whiteAlpha.900"
            textShadow="0 1px 6px rgba(0,0,0,0.4)"
          >
            {txt(
              "pages.meat.hero.subtitle",
              "Celle TN/BT, frollatura e stagionatura, tunnel di raffreddamento/abbattimento e sale lavorazione climatizzate secondo HACCP."
            )}
          </Text>
        </Flex>
      </Box>

      {/* INTRO + PUNTI DI FORZA */}
      <Container maxW="7xl" py={[8, 12]}>
        <SimpleGrid columns={[1, 2]} spacing={[8, 12]} alignItems="center">
          <Box>
            <Heading color="nitra.primary" mb={4}>
              {txt(
                "pages.meat.intro.title",
                "Refrigerazione su misura per macellerie e industria della carne"
              )}
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              {txt(
                "pages.meat.intro.body",
                "Progettiamo impianti per tutte le fasi: ricevimento, pre-raffreddamento, frollatura, lavorazione, confezionamento e stoccaggio. Massima attenzione a qualità del prodotto, igiene e continuità operativa."
              )}
            </Text>
            <HStack spacing={3} flexWrap="wrap">
              {arr("pages.meat.intro.badges").map((b, i) => (
                <Badge key={i} colorScheme="teal" variant="subtle" px={3} py={1} rounded="full">
                  {b}
                </Badge>
              ))}
            </HStack>
          </Box>

          <Box>
            <Stack spacing={3}>
              {arr("pages.meat.intro.features").map((p, i) => (
                <HStack key={i} align="start">
                  <Icon as={CheckCircleIcon} color="nitra.accent" mt="3px" />
                  <Text color="gray.700">{p}</Text>
                </HStack>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* SEZIONI TECNICHE */}
      <Container maxW="7xl" py={[10, 14]}>
        {sections.map((s, i) => (
          <SimpleGrid
            key={i}
            columns={[1, 2]}
            spacing={[6, 10]}
            mb={i < sections.length - 1 ? [10, 14] : 0}
            alignItems="center"
          >
            {/* se s.imageSide === "left" invertiamo l'ordine su desktop */}
            {s.imageSide === "left" ? (
              <>
                <Image
                  src={s.img}
                  alt={s.alt || s.title}
                  rounded="xl"
                  objectFit="cover"
                  h={["220px", "280px", "320px"]}
                />
                <Box>
                  <Heading size="lg" color="nitra.primary" mb={3}>
                    {s.title}
                  </Heading>
                  <Text color="gray.700" mb={s.bullets?.length ? 4 : 0}>
                    {s.body}
                  </Text>
                  {Array.isArray(s.bullets) && s.bullets.length > 0 && (
                    <List spacing={2} color="gray.700">
                      {s.bullets.map((li, k) => (
                        <ListItem key={k}>{li}</ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              </>
            ) : (
              <>
                <Box order={[2, 1]}>
                  <Heading size="lg" color="nitra.primary" mb={3}>
                    {s.title}
                  </Heading>
                  <Text color="gray.700" mb={s.bullets?.length ? 4 : 0}>
                    {s.body}
                  </Text>
                  {Array.isArray(s.bullets) && s.bullets.length > 0 && (
                    <List spacing={2} color="gray.700">
                      {s.bullets.map((li, k) => (
                        <ListItem key={k}>{li}</ListItem>
                      ))}
                    </List>
                  )}
                </Box>
                <Image
                  src={s.img}
                  alt={s.alt || s.title}
                  rounded="xl"
                  objectFit="cover"
                  h={["220px", "280px", "320px"]}
                />
              </>
            )}
          </SimpleGrid>
        ))}
      </Container>

      {/* CTA */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>{txt("pages.meat.cta.title", "Soluzioni di refrigerazione su misura per il settore carni")}</Heading>
          <Text mb={8} opacity={0.9}>
            {txt(
              "pages.meat.cta.desc",
              "Affidati a Nitra System per impianti efficienti, sicuri e conformi agli standard igienico–sanitari della lavorazione carni."
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
            {txt("pages.meat.cta.button", "Contattaci ora")} <Box as="span" ml={2}>›</Box>
          </Button>
        </Container>
      </Box>
    </>
  );
}
