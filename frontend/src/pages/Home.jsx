// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Stack,
  HStack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

// NOTE: gli slug qui sotto sono allineati alle rotte che hai in App.jsx
// - carni: .../lavorazionecarni  (senza trattino)
// - gli altri come da Navbar che avevi condiviso
const AGRO_CARDS = [
  {
    img: "/lavorazionecarne.jpg",
    title: "Lavorazione carni",
    desc:
      "Impianti frigoriferi per la lavorazione delle carni: celle TN e BT, tunnel di raffreddamento e abbattimento, sistemi per salatura e stagionatura con controllo di temperatura e umidità per garantire qualità e sicurezza alimentare.",
    to: "/settori/agroalimentare/lavorazione-carni",
  },
  {
    img: "/panificazione.webp",
    title: "Panificazione",
    desc:
      "Impianti per fermalievita, abbattimento, conservazione impasti e camere di lievitazione controllata.",
    to: "/settori/agroalimentare/panificazione",
  },
  {
    img: "/lattiero.jpg",
    title: "Prodotti lattiero-caseari",
    desc:
      "Raffreddamento latte, maturazione, stagionatura formaggi e celle a umidità controllata.",
    to: "/settori/agroalimentare/lattiero-caseari",
  },
  {
    img: "/ittico.jpg",
    title: "Lavorazione ittico-pesce",
    desc:
      "Processo a bassa temperatura, surgelazione rapida, stoccaggio e sala lavorazione igienizzata.",
    to: "/settori/agroalimentare/ittico",
  },
  {
    img: "/frutta.jpg",
    title: "Frutta e verdura",
    desc:
      "Pre-cooling, atmosfera controllata, celle frigoconservazione e linee di confezionamento.",
    to: "/settori/agroalimentare/ortofrutta",
  },
  {
    img: "/processoalimentare.jpg",
    title: "Prodotti alimentari trasformati",
    desc:
      "Refrigerazione di processo, tunnel, chiller per fluidi secondari e stoccaggi a temperatura.",
    to: "/settori/agroalimentare/trasformati",
  },
];

const MANIF_CARDS = [
  {
    img: "/logisticarefrigerata.jpg",
    title: "Logistica refrigerata",
    desc:
      "Magazzini TN/BT, baie isotermiche, anticamere e gestione carichi con riduzione dispersioni.",
    to: "/settori/manifatturiero/logistica-refrigerata",
  },
  {
    img: "/logisticagdo.webp",
    title: "Logistica GDO e distribuzione",
    desc:
      "Hub multi-temperatura, sistemi di supervisione energetica e continuità H24.",
    to: "/settori/manifatturiero/logistica-gdo",
  },
  {
    img: "/hydrocooler.jpg",
    title: "Hydrocooler",
    desc:
      "Raffreddamento rapido post-raccolta per ortofrutta con alte portate d’acqua a temperatura controllata.",
    to: "/settori/manifatturiero/hydrocooler",
  },
  {
    img: "/vacuumcooler.jpg",
    title: "Vacuumcooler",
    desc:
      "Raffreddamento sottovuoto di prodotto fresco: qualità elevata e shelf-life estesa.",
    to: "/settori/manifatturiero/vacuumcooler",
  },
  {
    img: "/sanificatore.webp",
    title: "Sanificatore alimentare",
    desc:
      "Ionizzazione aria per abbattimento cariche microbiche, odori e VOC in ambienti alimentari.",
    to: "/settori/manifatturiero/sanificatore",
  },
  {
    img: "/produttoreghiaccio.webp",
    title: "Produttori di ghiaccio",
    desc:
      "Ghiaccio granulare/supergranulare e a scaglie per conservazione e presentazione prodotto.",
    to: "/settori/manifatturiero/produttoreghiaccio",
  },
];

/* -------------------------------------------------------------------------- */
/*                           COMPONENTE CARD MORBIDA                          */
/* -------------------------------------------------------------------------- */
function SoftCard({ img, title, desc, to }) {
  return (
    <LinkBox
      as={MotionBox}
      role="group"
      tabIndex={0}
      bg="white"
      border="1px solid"
      borderColor="nitra.accent"
      borderRadius="28px"
      overflow="hidden"
      transition="all .25s ease"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
      _focusWithin={{ boxShadow: "0 0 0 3px rgba(14,74,103,0.5)" }} // blu scuro con opacità
      color="#0E4A67" // 👈 testo blu scuro per tutto il contenuto
    >
      {/* Immagine */}
      <Box position="relative">
        <MotionImage
          src={img}
          alt={title}
          w="100%"
          h={["140px", "160px", "180px"]}
          objectFit="cover"
          borderTopLeftRadius="28px"
          borderTopRightRadius="28px"
          initial={{ scale: 1.02 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, blackAlpha.100, blackAlpha.0 60%)"
          borderTopLeftRadius="28px"
          borderTopRightRadius="28px"
        />
      </Box>

      {/* Corpo testo */}
      <Stack spacing={3} p={[4, 5]}>
        <Heading as="h3" size="md" color="#0E4A67">
          <LinkOverlay as={RouterLink} to={to}>
            {title}
          </LinkOverlay>
        </Heading>
        <Text fontSize="sm" color="#0E4A67">
          {desc}
        </Text>

        <Button
          as={RouterLink}
          to={to}
          mt={2}
          size="sm"
          bg="#B04125" // arancione brand
          color="white"
          borderRadius="999px"
          alignSelf="start"
          _hover={{ bg: "#C85B38", transform: "translateY(-1px)" }}
          _active={{ bg: "#9F3A22", transform: "translateY(0)" }}
          transition="all .2s ease"
        >
          Scopri di più →
        </Button>
      </Stack>
    </LinkBox>
  );
}


/* -------------------------------------------------------------------------- */
/*                                  HOME PAGE                                 */
/* -------------------------------------------------------------------------- */
export default function Home() {
  const { lang = "it" } = useParams(); // <-- PRENDO LA LINGUA
  useEffect(() => {
    document.title =
      "Nitra System | Refrigerazione industriale per agroalimentare e di processo";
  }, []);

  // Helper per pre-pendere /:lang ai link
  const withLang = (path) => `/${lang}${path}`;

  return (
    <>
      {/* ====================== HERO (restyling) ====================== */}
      <Box position="relative" mt={{ base: "72px", md: "80px" }}>
        <Image
          src="/sfondohome.png"
          alt="Impianti frigoriferi Nitra System"
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
              REFRIGERAZIONE INDUSTRIALE
              <Box as="span" display="block">
                E COMMERCIALE.
              </Box>
            </Heading>

            <Text
              mt={{ base: 3, md: 4 }}
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.900"
              opacity={0.95}
              maxW="3xl"
              mx="auto"
            >
              Progettazione e realizzazione di Celle frigorifere, Magazzini refrigerati,
              Hydrocooler e Vacuumcooler per il settore industriale e commerciale.
            </Text>

            {/*<HStack justify="center" spacing={4} mt={{ base: 5, md: 6 }}>
              <Button
                as={RouterLink}
                to={withLang("#agro")}
                size="lg"
                borderRadius="999px"
                px={6}
                bg="#B04125" p={6} rounded="xl"
                color="white"
                boxShadow="0 8px 24px rgba(56,178,172,0.35)"
                _hover={{ bg: "teal.500", transform: "translateY(-2px)" }}
                _active={{ transform: "translateY(0)" }}
                transition="all .2s ease"
              >
                Settore Agroalimentare
              </Button>

              <Button
                as={RouterLink}
                to={withLang("#manif")}
                size="lg"
                borderRadius="999px"
                px={6}
                bg="#B04125" p={6} rounded="xl"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                backdropFilter="saturate(140%) blur(6px)"
                _hover={{ bg: "rgba(255,255,255,0.12)", transform: "translateY(-2px)" }}
                _active={{ transform: "translateY(0)" }}
                transition="all .2s ease"
              >
                Settore Industriale
              </Button>
            </HStack>*/}
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

      {/* ====================== SETTORE AGROALIMENTARE ====================== */}
      <Container id="agro" maxW="7xl" py={[12, 16]}>
        <Heading
          size="sm"
          textAlign="center"
          color="nitra.accent"
          letterSpacing="widest"
        >
          IMPIANTI DI REFRIGERAZIONE INDUSTRIALE
        </Heading>
        <Heading textAlign="center" color="#0E4A67" mt={2} mb={8}>
          SETTORE AGROALIMENTARE
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={[4, 6, 8]}>
          {AGRO_CARDS.map((c, i) => (
            <SoftCard
              key={i}
              img={c.img}
              title={c.title}
              desc={c.desc}
              to={withLang(c.to)} // <-- PREFISSO LINGUA
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* ====================== SETTORE MANIFATTURIERO ====================== */}
      <Container id="manif" maxW="7xl" py={[6, 12]}>
        <Heading
          size="sm"
          textAlign="center"
          color="nitra.accent"
          letterSpacing="widest"
        >
          IMPIANTI DI REFRIGERAZIONE INDUSTRIALE E COMMERCIALE
        </Heading>
        <Heading textAlign="center" color="#0E4A67" mt={2} mb={8}>
          SETTORE INDUSTRIALE
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={[4, 6, 8]} justifyItems="center">
          {MANIF_CARDS.map((c, i) => (
            <SoftCard
              key={i}
              img={c.img}
              title={c.title}
              desc={c.desc}
              to={withLang(c.to)} // <-- PREFISSO LINGUA
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* ====================== FOOT CTA ====================== */}
      <Box bg="gray.50" py={[10, 14]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Parla con i nostri tecnici</Heading>
          <Text color="gray.700" mb={6}> 
            Operiamo in tutta Italia e in Bulgaria. Partner ideale per espandere la tua attività
            nell'Europa dell'Est.
          </Text>
          <Button as={RouterLink} to={withLang("/contatti")} colorScheme="teal" size="lg">
            Richiedi una consulenza →
          </Button>
        </Container>
      </Box>
    </>
  );
}
