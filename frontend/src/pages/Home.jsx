// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Stack,
  LinkBox,
  LinkOverlay,
  chakra,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useTranslation } from "react-i18next";
import { shouldForwardProp as chakraShouldForwardProp } from "@chakra-ui/react";

/* -------- Motion components -------- */
const MotionBox = motion(
  chakra.div,
  {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || chakraShouldForwardProp(prop),
  }
);

const MotionImage = motion(
  chakra.img,
  {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || chakraShouldForwardProp(prop),
  }
);

/* -------- Util lingua (se usi prefix nelle route, gestiscilo qui) -------- */
const withLang = (path) => path;

/* -------- Dataset card (img + route) -------- */
/* Agroalimentare: NIENTE panificazione */
const AGRO_CARDS = [
  { id: "carni",        img: "/lavorazionecarni.png",   to: "/settori/agroalimentare/lavorazione-carni" },
  { id: "lattiero",     img: "/lattiero.jpg",           to: "/settori/agroalimentare/lattiero-caseari" },
  { id: "ittico",       img: "/ittico.jpg",             to: "/settori/agroalimentare/ittico" },
  { id: "ortofrutta",   img: "/ortofrutta.png",         to: "/settori/agroalimentare/ortofrutta" },
  { id: "trasformati",  img: "/processoalimentare.jpg", to: "/settori/agroalimentare/trasformati" },
];

/* Manifatturiero + Logistica */
const MANIF_CARDS = [
  { id: "log-refrig", img: "/logisticarefrigerata3.png", to: "/settori/manifatturiero/logistica-refrigerata" },
  { id: "log-gdo",    img: "/gdo2.png",                  to: "/settori/manifatturiero/logistica-gdo" },
  { id: "hydro",      img: "/hydrocooler2.png",          to: "/settori/manifatturiero/hydrocooler" },
  { id: "vacuum",     img: "/vacuumcooler3.png",         to: "/settori/manifatturiero/vacuumcooler" },
  { id: "sanit",      img: "/sanificatore.webp",         to: "/settori/manifatturiero/sanificatore" },
  { id: "ghiaccio",   img: "/produttoreghiaccio2.png",   to: "/settori/manifatturiero/produttoreghiaccio" },
];

/* Life Sciences / Pharma: Camere bianche */
const LIFE_CARDS = [
  { id: "cleanrooms", img: "/camerebianche.png", to: "/camere-bianche" },
];

/* -------- UI: Card uniforme -------- */
function SoftCard({ img, title, desc, to }) {
  const cardRadius = "24px";

  return (
    <LinkBox
      as={MotionBox}
      role="group"
      tabIndex={0}
      h="100%"                          // <-- occupa sempre tutta la riga del grid
      display="flex"
      flexDir="column"
      bg="white"
      border="1px solid"
      borderColor="nitra.accent"
      borderRadius={cardRadius}
      overflow="hidden"
      transition="all .25s ease"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
      _focusWithin={{ boxShadow: "0 0 0 3px rgba(14,74,103,0.5)" }}
      color="#0E4A67"
      sx={{
        clipPath: `inset(0 round ${cardRadius})`,
        WebkitMaskImage: "radial-gradient(#000,#000)", // Safari fix
        willChange: "transform",
      }}
    >
      {/* Immagine: altezza fissa per uniformità */}
      <Box position="relative">
        <MotionImage
          src={img}
          alt={title}
          w="100%"
          h={["150px", "170px", "190px"]} // <-- stessa altezza per tutte
          objectFit="cover"
          initial={{ scale: 1.02 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
          display="block"
          style={{ borderTopLeftRadius: cardRadius, borderTopRightRadius: cardRadius }}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, blackAlpha.100, blackAlpha.0 60%)"
          borderTopLeftRadius={cardRadius}
          borderTopRightRadius={cardRadius}
          pointerEvents="none"
        />
      </Box>

      {/* Testo + CTA: spinto in basso per allineare i bottoni */}
      <Stack spacing={3} p={[4, 5]} flex="1" justify="space-between">
        <Box>
          <Heading as="h3" size="md" color="#0E4A67" noOfLines={2}>
            <LinkOverlay as={RouterLink} to={to}>
              {title}
            </LinkOverlay>
          </Heading>
          <Text mt={2} fontSize="sm" color="#0E4A67" noOfLines={2}>
            {desc}
          </Text>
        </Box>

        <Button
          as={RouterLink}
          to={to}
          mt={2}
          size="sm"
          bg="#B04125"
          color="white"
          borderRadius="999px"
          alignSelf="flex-start"
          _hover={{ bg: "#C85B38", transform: "translateY(-1px)" }}
          _active={{ bg: "#9F3A22", transform: "translateY(0)" }}
          transition="all .2s ease"
        >
          »
        </Button>
      </Stack>
    </LinkBox>
  );
}

/* -------- Pagina -------- */
export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("homePage.seo.title");
  }, [t]);

  /* Mappa testi i18n 1:1 sugli id */
  const agroCards = AGRO_CARDS.map((c) => ({
    ...c,
    title: t(`homePage.agro.cards.${c.id}.title`),
    desc:  t(`homePage.agro.cards.${c.id}.desc`),
  }));

  const manufCards = MANIF_CARDS.map((c) => {
    const isLog = c.id.startsWith("log-");
    const ns = isLog ? "homePage.logistics.cards" : "homePage.manuf.cards";
    return {
      ...c,
      title: t(`${ns}.${c.id}.title`),
      desc:  t(`${ns}.${c.id}.desc`),
    };
  });

  const lifeCards = LIFE_CARDS.map((c) => ({
    ...c,
    title: t(`homePage.life.cards.${c.id}.title`),
    desc:  t(`homePage.life.cards.${c.id}.desc`),
  }));

  return (
    <>
      {/* HERO */}
      <Box position="relative" mt={{ base: "72px", md: "80px" }}>
        <Image
          src="/sfondohome.png"
          alt={t("homePage.hero.title")}
          w="100%"
          h={{ base: "70vh", md: "78vh" }}
          objectFit="cover"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient={`
            radial(ellipse at 50% 35%, rgba(0,0,0,0.55), transparent 55%),
            linear(to-b, rgba(0,0,0,0.55), rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.25))
          `}
        />
        <Box
          position="absolute"
          inset={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          px={{ base: 4, md: 6 }}
        >
          <MotionBox
            color="white"
            initial={{ opacity: 0, y: 18, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            maxW="6xl"
          >
            <Heading
              as="h1"
              fontWeight="800"
              lineHeight={1.05}
              letterSpacing="tight"
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
              textShadow="0 6px 22px rgba(0,0,0,0.35)"
            >
              {t("homePage.hero.title")}
            </Heading>
            <Text
              mt={{ base: 3, md: 4 }}
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.900"
              opacity={0.95}
              maxW="3xl"
              mx="auto"
            >
              {t("homePage.hero.tagline")}
            </Text>
          </MotionBox>
        </Box>
        <Box position="absolute" bottom="-1px" left={0} right={0}>
          <Box
            as="svg"
            viewBox="0 0 1440 80"
            w="100%"
            h={{ base: 12, md: 16 }}
            preserveAspectRatio="none"
            display="block"
          >
            <path d="M0,32 C240,64 480,64 720,32 C960,0 1200,0 1440,32 L1440,80 L0,80 Z" fill="#fff" />
          </Box>
        </Box>
      </Box>

      {/* AGROALIMENTARE */}
      <Container id="agro" maxW="7xl" py={[12, 16]}>
        <Heading size="sm" textAlign="center" color="nitra.accent" letterSpacing="widest">
          {t("homePage.agro.overtitle")}
        </Heading>
        <Heading textAlign="center" color="#0E4A67" mt={2} mb={8}>
          {t("homePage.agro.title")}
        </Heading>

        <SimpleGrid
          columns={[1, 2, 3]}
          spacing={[4, 6, 8]}
          alignItems="stretch"        // <-- allinea le altezze
          gridAutoRows="1fr"          // <-- righe della stessa altezza
        >
          {agroCards.map((c) => (
            <Box key={`agro-${c.id}`} h="100%">
              <SoftCard img={c.img} title={c.title} desc={c.desc} to={withLang(c.to)} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* LIFE SCIENCES */}
      <Container id="life" maxW="7xl" py={[6, 12]}>
        <Heading size="sm" textAlign="center" color="nitra.accent" letterSpacing="widest">
          {t("homePage.life.overtitle")}
        </Heading>
        <Heading textAlign="center" color="#0E4A67" mt={2} mb={8}>
          {t("homePage.life.title")}
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={[4, 6, 8]}
          alignItems="stretch"
          gridAutoRows="1fr"
        >
          {lifeCards.map((c) => (
            <Box key={`life-${c.id}`} h="100%">
              <SoftCard img={c.img} title={c.title} desc={c.desc} to={withLang(c.to)} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* MANIFATTURIERO / LOGISTICA */}
      <Container id="manif" maxW="7xl" py={[6, 12]}>
        <Heading size="sm" textAlign="center" color="nitra.accent" letterSpacing="widest">
          {t("homePage.manuf.overtitle")}
        </Heading>
        <Heading textAlign="center" color="#0E4A67" mt={2} mb={8}>
          {t("homePage.manuf.title")}
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={[4, 6, 8]}
          alignItems="stretch"
          gridAutoRows="1fr"
        >
          {manufCards.map((c) => (
            <Box key={`manif-${c.id}`} h="100%">
              <SoftCard img={c.img} title={c.title} desc={c.desc} to={withLang(c.to)} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box bg="gray.50" py={[10, 14]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>{t("homePage.cta.title")}</Heading>
          <Text color="gray.700" mb={6}>
            {t("homePage.cta.desc")}
          </Text>
          <Button as={RouterLink} to={withLang("/contatti")} colorScheme="teal" size="lg">
            {t("homePage.cta.button")}
          </Button>
        </Container>
      </Box>
    </>
  );
}
