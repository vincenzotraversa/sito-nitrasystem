// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  HStack,
  SimpleGrid,
  Container,
  Icon,
  List,
  ListItem,
  ListIcon,
  Stack,
  Divider,
  Link,
  Tag,
  VStack,
} from "@chakra-ui/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaHeadset,
  FaLaptop,
  FaCheckCircle,
  FaNewspaper,
  FaAward,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const getParam = (name) => new URLSearchParams(window.location.search).get(name) || "";

// === SLIDES ===
const slides = [
  {
    image: "/Sfondo HOME.png",
    headline:
      "Marvincla. Il polo digitale che accompagna il settore agroalimentare nella trasformazione verso il futuro.",
    subtitle:
      "Un ecosistema di servizi e piattaforme che unisce innovazione tecnologica, analisi dei dati e conoscenza del settore per guidare la crescita delle imprese agroalimentari.",
    cta: "Scopri di più",
    ctaTarget: "vision",
  },
  {
    image: "/Sfondo HOME.png",
    headline:
      "Trasformiamo la filiera agroalimentare con dati, intelligenza artificiale, siti, e-commerce e piattaforme digitali.",
    subtitle:
      "Dalla terra ai mercati globali, integriamo tecnologia, strategia e competenza per rendere la filiera più efficiente, intelligente e connessa.",
    cta: "Scopri le nostre soluzioni",
    ctaTarget: "vision",
  },
  {
    image: "/Sfondo HOME.png",
    headline:
      "Dove l’innovazione incontra la filiera. Tecnologia, dati e visione strategica al servizio dell’agroalimentare.",
    subtitle:
      "Sviluppiamo soluzioni digitali, strumenti di analisi e piattaforme basate su intelligenza artificiale per aiutare le aziende a evolversi, connettersi e competere.",
    cta: "Inizia la trasformazione",
    ctaTarget: "vision",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // ===== SEO e ADV tracking =====
  const utm = useMemo(
    () => ({
      source: getParam("utm_source"),
      medium: getParam("utm_medium"),
      campaign: getParam("utm_campaign"),
      content: getParam("utm_content"),
      term: getParam("utm_term"),
      gclid: getParam("gclid"),
    }),
    []
  );

  useEffect(() => {
    // --- SEO meta ---
    const setMeta = (selector, attr, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("name=")) {
          el.setAttribute("name", selector.match(/name='([^']+)'/)?.[1] || "");
        } else if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property='([^']+)'/)?.[1] || "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel='${rel}']`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    document.title =
      "Marvincla | Polo digitale per la filiera agroalimentare – AI, dati e innovazione sostenibile";
    setMeta(
      "meta[name='description']",
      "content",
      "Marvincla è la startup innovativa che trasforma la filiera agroalimentare con AI, dati e piattaforme digitali. Scopri ColdSharing e i nostri servizi."
    );
    setMeta(
      "meta[name='keywords']",
      "content",
      "Marvincla, ColdSharing, startup innovativa, digitalizzazione agroalimentare, AI, logistica freddo, e-commerce B2B, Puglia"
    );
    setMeta("meta[property='og:title']", "content", "Marvincla — Innovazione per la filiera agroalimentare");
    setMeta(
      "meta[property='og:description']",
      "content",
      "Scopri come Marvincla unisce tecnologia, dati e strategia per rendere sostenibile e competitiva la filiera agroalimentare italiana."
    );
    setMeta("meta[property='og:type']", "content", "website");
    setMeta("meta[property='og:image']", "content", "/og-home.jpg");
    setLink("canonical", "https://marvincla.it/");

    // --- JSON-LD ---
    const ldId = "ld-home";
    let ld = document.getElementById(ldId);
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Marvincla",
      url: "https://marvincla.it",
      logo: "https://marvincla.it/logo-marvincla.png",
      description:
        "Polo digitale che supporta la filiera agroalimentare nella trasformazione digitale con AI, piattaforme e dati.",
      sameAs: [
        "https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce",
        "https://www.corrieredelmezzogiorno.it/",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Giuseppe Semerari, 7",
        addressLocality: "Bari",
        addressRegion: "Puglia",
        postalCode: "70132",
        addressCountry: "IT",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@marvincla.it",
          telephone: "+39 000 000 0000",
        },
      ],
    });
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 9000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image src={slides[index].image} w="100%" h={["80vh", "90vh", "100vh"]} objectFit="cover" />
        <Box position="absolute" inset="0" bg="rgba(0,0,0,0.45)" display="flex" alignItems="center">
          <Box color="white" px={["6", "12", "24"]} maxW="6xl">
            <AnimatePresence mode="wait">
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
                textAlign="left"
              >
                <Heading size="2xl" mb={6} lineHeight="1.15">
                  {slides[index].headline}
                </Heading>
                <Text fontSize="xl" mb={8} color="gray.100" maxW="4xl">
                  {slides[index].subtitle}
                </Text>
                <Button
                  colorScheme="teal"
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="full"
                  boxShadow="lg"
                  _hover={{ bg: "teal.400" }}
                  onClick={() => document.getElementById(slides[index].ctaTarget)?.scrollIntoView({ behavior: "smooth" })}
                >
                  🔹 {slides[index].cta}
                </Button>
              </MotionBox>
            </AnimatePresence>
          </Box>
        </Box>

        {/* Navigazione slider */}
        <IconButton
          aria-label="Previous"
          icon={<FaArrowLeft />}
          position="absolute"
          top="50%"
          left="6"
          transform="translateY(-50%)"
          colorScheme="whiteAlpha"
          onClick={prev}
          variant="ghost"
          fontSize="2xl"
        />
        <IconButton
          aria-label="Next"
          icon={<FaArrowRight />}
          position="absolute"
          top="50%"
          right="6"
          transform="translateY(-50%)"
          colorScheme="whiteAlpha"
          onClick={next}
          variant="ghost"
          fontSize="2xl"
        />
      </Box>

      {/* ====================== PROGETTO DI PUNTA ====================== */}
      <Container id="progetto-punta" maxW="7xl" py={[12, 16, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center">
          <MotionBox initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Heading size="lg" color="teal.600" mb={3}>
              Il nostro progetto di punta
            </Heading>
            <Heading mb={4}>
              ColdSharing — il marketplace B2B che digitalizza la condivisione del freddo.
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={6}>
              Nato in Marvincla, ColdSharing connette imprese agroalimentari, logistiche e operatori del freddo.
              Un progetto riconosciuto tra i finalisti della <b>Start Cup Puglia 2023</b> e menzionato da
              <b> La Repubblica</b>. Scopri come stiamo ridefinendo la logistica sostenibile.
            </Text>
            <Button as={RouterLink} to="/coldsharing" colorScheme="teal" size="lg">
              🔹 Scopri ColdSharing
            </Button>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image src="/cold-sharing-logo.png" alt="ColdSharing" rounded="lg" shadow="lg" />
          </MotionBox>
        </SimpleGrid>

        {/* TRUST BLOCK */}
        <VStack mt={10} spacing={3} align="start">
          <HStack>
            <Icon as={FaAward} color="teal.500" />
            <Text>
              Finalista <b>Start Cup Puglia 2023</b> —{" "}
              <Link
                href="https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce"
                color="teal.600"
                isExternal
              >
                leggi l’articolo
              </Link>
            </Text>
          </HStack>
          <HStack>
            <Icon as={FaNewspaper} color="teal.500" />
            <Text>Uscito su <b>La Repubblica</b> — rassegna stampa 2023</Text>
          </HStack>
          <HStack spacing={2}>
            <Tag colorScheme="teal" variant="subtle">Innovazione</Tag>
            <Tag colorScheme="teal" variant="subtle">Sostenibilità</Tag>
            <Tag colorScheme="teal" variant="subtle">Logistica</Tag>
          </HStack>
        </VStack>
      </Container>

      <Divider />

      {/* ====================== VISION ====================== */}
      <Container id="vision" maxW="7xl" py={[12, 16, 20]}>
        <Stack spacing={6}>
          <Heading>Da visione a innovazione</Heading>
          <Text fontSize="lg" color="gray.700">
            Marvincla è una <b>startup innovativa</b> che trasforma la filiera agroalimentare italiana
            con strategie digitali, AI e piattaforme integrate. Costruiamo un ecosistema in cui produttori,
            logistiche e distributori collaborano per una crescita sostenibile e tracciabile.
          </Text>

          <Box>
            <Heading size="md" mb={3}>La nostra visione</Heading>
            <Text fontSize="lg" color="gray.700">
              Crediamo in un futuro dove la filiera è intelligente e connessa. La nostra missione è
              aiutare le imprese a competere globalmente, valorizzando il territorio con la tecnologia.
            </Text>
          </Box>

          <Box id="services">
            <Heading size="md" mb={3}>Cosa facciamo</Heading>
            <List spacing={2} fontSize="lg" color="gray.700">
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Servizi digitali → web, adv, social strategy.</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Business Intelligence → analisi dati e insight di mercato.</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Sviluppo software → piattaforme e marketplace su misura.</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />AI integrata → automazione, predizione e personalizzazione.</ListItem>
            </List>

            <Button mt={6} colorScheme="teal" as={RouterLink} to="/servizi">
              🔹 Esplora i nostri servizi
            </Button>
          </Box>
        </Stack>
      </Container>

      <Divider />

      {/* ====================== PERCHÉ MARVINCLA ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <Heading mb={6}>Perché scegliere Marvincla</Heading>
        <Text fontSize="lg" color="gray.700" mb={6}>
          Perché uniamo <b>competenza tecnologica</b> e <b>conoscenza del settore agroalimentare</b>.
          Accompagniamo le imprese dal concept al go-live, integrando dati, design e strategia per
          massimizzare ogni investimento digitale.
        </Text>

        <SimpleGrid columns={[1, 3]} spacing={8}>
          {[
            { icon: FaLaptop, title: "Digitale end-to-end" },
            { icon: FaGlobe, title: "Filiera connessa" },
            { icon: FaHeadset, title: "Supporto strategico" },
          ].map((it, i) => (
            <MotionBox key={i} p={6} borderWidth="1px" rounded="2xl" whileHover={{ y: -4 }} transition="0.2s">
              <Icon as={it.icon} color="teal.500" boxSize={8} mb={3} />
              <Heading size="md" mb={2}>{it.title}</Heading>
              <Text color="gray.600">Soluzioni su misura e accompagnamento continuo per risultati concreti.</Text>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Button as={RouterLink} to="/chisiamo" colorScheme="teal" size="lg" mt={8}>
          🔹 Scopri chi siamo
        </Button>
      </Container>

      {/* ====================== CALL TO ACTION ====================== */}
      <Box bg="gray.50" py={[14, 20]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Marvincla. Dove l’innovazione incontra la filiera.</Heading>
          <Text fontSize="lg" color="gray.700" mb={6}>
            Tradizione, tecnologia e visione. Un solo partner per digitalizzare la tua impresa agroalimentare.
          </Text>
          <Button as={RouterLink} to="/contatti" colorScheme="teal" size="lg">
            Parla con noi →
          </Button>
        </Container>
      </Box>
    </>
  );
}