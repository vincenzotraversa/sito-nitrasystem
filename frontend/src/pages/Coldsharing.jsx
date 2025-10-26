// src/pages/ColdSharing.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Icon,
  Stack,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaSearchLocation,
  FaCheckCircle,
  FaLeaf,
  FaTruck,
  FaWarehouse,
  FaBoxOpen,
  FaAward,
  FaNewspaper,
} from "react-icons/fa";

const MotionBox = motion(Box);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ColdSharing() {
  // ======= SEO senza dipendenze (title, meta, og, JSON-LD) =======
  useEffect(() => {
    const setMeta = (selector, attr, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        // supporta name=... e property=...
        if (selector.includes("name=")) {
          el.setAttribute("name", selector.match(/name='([^']+)'/)?.[1] || "");
        } else if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property='([^']+)'/)?.[1] || "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    document.title = "ColdSharing | Il primo marketplace B2B per la condivisione del freddo";
    setMeta("meta[name='description']", "content",
      "ColdSharing, sviluppato da Marvincla, è la piattaforma B2B che digitalizza la condivisione del freddo. Scopri come ottimizzare celle frigorifere e trasporti nella filiera agroalimentare."
    );
    setMeta("meta[name='keywords']", "content",
      "ColdSharing, Marvincla, marketplace freddo, logistica agroalimentare, celle frigorifere, container frigo, sostenibilità, Puglia, Start Cup"
    );
    setMeta("meta[property='og:title']", "content",
      "ColdSharing — Condividere il freddo per una filiera più efficiente"
    );
    setMeta("meta[property='og:description']", "content",
      "La piattaforma che digitalizza la condivisione del freddo tra imprese. Un progetto sviluppato da Marvincla."
    );
    setMeta("meta[property='og:type']", "content", "website");
    setMeta("meta[property='og:image']", "content", "/Coldsharing.png");

    // JSON-LD
    const ldId = "ld-softwareapplication-coldsharing";
    let ld = document.getElementById(ldId);
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "ColdSharing",
      alternateName: "Cold Sharing",
      url: "https://cellefrigo.net.it",
      image: "https://marvincla.it/Coldsharing.png",
      author: { "@type": "Organization", name: "Marvincla", url: "https://marvincla.it" },
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "ColdSharing è la piattaforma B2B che digitalizza la condivisione del freddo tra imprese agroalimentari, logistiche e operatori del settore.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", category: "Free", url: "https://cellefrigo.net.it" },
      sameAs: [
        "https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce",
        "https://www.corrieredelmezzogiorno.it/",
      ],
    });

    // cleanup opzionale: lascia meta/ld per caching SEO; non li rimuoviamo
  }, []);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/Sfondo Cold Sharing.png"
          alt="ColdSharing Hero"
          w="100%"
          h={["80vh", "90vh", "100vh"]}
          objectFit="cover"
          filter="brightness(0.65)"
          loading="eager"
        />
        <Box
          position="absolute"
          inset="0"
          display="flex"
          flexDir="column"
          justifyContent="center"
          color="white"
          px={[6, 12, 24]}
        >
          <MotionBox
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            maxW="5xl"
          >
            <Heading fontSize={["3xl", "4xl", "5xl"]} mb={4} lineHeight="1.2">
              Il futuro della logistica agroalimentare è collaborativo
            </Heading>
            <Text fontSize="xl" maxW="3xl" mb={8} color="whiteAlpha.900">
              ColdSharing è la piattaforma che digitalizza la condivisione del freddo tra imprese.
              Meno sprechi, più efficienza, più sostenibilità.
            </Text>
            <Button
              colorScheme="teal"
              size="lg"
              px={8}
              py={6}
              borderRadius="full"
              onClick={() => scrollToId("cos-e")}
            >
              Scopri come funziona →
            </Button>
          </MotionBox>
        </Box>
      </Box>

      {/* ====================== COS’È ====================== */}
      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }} id="cos-e">
        <Heading size="lg" color="teal.600" mb={4}>
          Cos’è ColdSharing
        </Heading>
        <Text fontSize="lg" color="gray.700" maxW="5xl" mb={6}>
          ColdSharing, sviluppato da <b>Marvincla</b>, è il primo marketplace B2B dedicato alla
          condivisione di spazi e mezzi refrigerati. Con un clic, imprese agroalimentari, logistiche e
          operatori del freddo possono <b>offrire o prenotare capacità refrigerata</b> in modo
          digitale, tracciabile e sostenibile.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Image src="/Coldsharing.png" alt="Interfaccia ColdSharing" rounded="2xl" shadow="lg" />
          <Box>
            <Heading size="md" mb={4}>Perché nasce ColdSharing</Heading>
            <Text color="gray.700" mb={4}>
              Ogni giorno centinaia di celle frigorifere restano inutilizzate, mentre altre imprese
              affrontano costi elevati per reperire spazi e mezzi. ColdSharing nasce per <b>collegare
              domanda e offerta</b>, creando una rete logistica più efficiente e sostenibile.
            </Text>
            <List spacing={3} color="gray.700">
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Disponibilità in tempo reale e geolocalizzata</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Prenotazioni digitali con tracciabilità e notifiche</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Collaborazione tra operatori della filiera del freddo</ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Container>

      {/* ====================== COME FUNZIONA ====================== */}
      <Box id="come-funziona" bg="gray.50" py={{ base: 12, md: 16, lg: 20 }}>
        <Container maxW="7xl">
          <Heading textAlign="center" mb={10}>
            Come funziona
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} textAlign="center">
            <Box>
              <Icon as={FaSearchLocation} color="teal.500" boxSize={10} mb={3} />
              <Heading size="sm" mb={2}>1 · Cerca</Heading>
              <Text color="gray.700">Trova spazi o mezzi refrigerati disponibili nella tua zona, in tempo reale.</Text>
            </Box>
            <Box>
              <Icon as={FaCheckCircle} color="teal.500" boxSize={10} mb={3} />
              <Heading size="sm" mb={2}>2 · Prenota</Heading>
              <Text color="gray.700">Gestisci prenotazioni e pagamenti in modo digitale e trasparente.</Text>
            </Box>
            <Box>
              <Icon as={FaLeaf} color="teal.500" boxSize={10} mb={3} />
              <Heading size="sm" mb={2}>3 · Condividi</Heading>
              <Text color="gray.700">Ottimizza risorse, riduci costi ed emissioni e valorizza il tuo spazio.</Text>
            </Box>
          </SimpleGrid>

          <Box textAlign="center" mt={12}>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<FaArrowRight />}
              as="a"
              href="https://cellefrigo.net.it"
              target="_blank"
              rel="noreferrer"
            >
              Registrati su ColdSharing — è gratuito!
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ====================== COSA OFFRE ====================== */}
      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }}>
        <Heading size="md" mb={8}>Cosa offre</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <MotionBox p={6} borderWidth="1px" rounded="2xl" bg="white" whileHover={{ y: -3 }} transition="0.2s">
            <Icon as={FaWarehouse} color="teal.500" boxSize={8} mb={3} />
            <Heading size="sm" mb={2}>Celle frigorifere</Heading>
            <Text color="gray.600">Stoccaggi temporanei in ambienti certificati e monitorati.</Text>
          </MotionBox>
          <MotionBox p={6} borderWidth="1px" rounded="2xl" bg="white" whileHover={{ y: -3 }} transition="0.2s">
            <Icon as={FaBoxOpen} color="teal.500" boxSize={8} mb={3} />
            <Heading size="sm" mb={2}>Container frigo</Heading>
            <Text color="gray.600">Capacità modulare e flessibile per picchi di domanda.</Text>
          </MotionBox>
          <MotionBox p={6} borderWidth="1px" rounded="2xl" bg="white" whileHover={{ y: -3 }} transition="0.2s">
            <Icon as={FaTruck} color="teal.500" boxSize={8} mb={3} />
            <Heading size="sm" mb={2}>Trasporto refrigerato</Heading>
            <Text color="gray.600">Camion e furgoni a temperatura controllata.</Text>
          </MotionBox>
        </SimpleGrid>
      </Container>

      {/* ====================== VANTAGGI ====================== */}
      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }}>
        <Heading size="lg" mb={6}>Perché scegliere ColdSharing</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Heading size="sm" mb={3}>Vantaggi per le imprese</Heading>
            <List spacing={3} color="gray.700">
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Riduci i costi operativi e gli sprechi</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Digitalizza la gestione logistica e amministrativa</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Accedi a nuovi partner commerciali</ListItem>
            </List>
          </Box>
          <Box>
            <Heading size="sm" mb={3}>Impatto sostenibile</Heading>
            <List spacing={3} color="gray.700">
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Ottimizza l’uso di energia e infrastrutture</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Riduci emissioni di CO₂ e chilometri a vuoto</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Promuovi una logistica agroalimentare più green</ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Container>

      {/* ====================== RICONOSCIMENTI & STAMPA ====================== */}
      <Box bg="gray.50" py={{ base: 12, md: 16, lg: 20 }}>
        <Container maxW="7xl">
          <Heading textAlign="center" mb={10}>Riconoscimenti e stampa</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MotionBox p={6} rounded="2xl" borderWidth="1px" whileHover={{ y: -3 }} transition="0.2s" bg="white">
              <Stack direction="row" align="center" mb={3}>
                <Icon as={FaAward} color="teal.500" boxSize={8} />
                <Heading size="sm">Finalista Start Cup Puglia 2023</Heading>
              </Stack>
              <Text color="gray.700" mb={3}>
                ColdSharing è tra i progetti finalisti della <b>Start Cup Puglia 2023</b>, la
                competizione per l’innovazione promossa da Regione Puglia e ARTI.
              </Text>
              <Link
                href="https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce"
                color="teal.600"
                fontWeight="medium"
                isExternal
                rel="noreferrer"
              >
                Leggi l’articolo ufficiale →
              </Link>
            </MotionBox>

            <MotionBox p={6} rounded="2xl" borderWidth="1px" whileHover={{ y: -3 }} transition="0.2s" bg="white">
              <Stack direction="row" align="center" mb={3}>
                <Icon as={FaAward} color="teal.500" boxSize={8} />
                <Heading size="sm">La Repubblica</Heading>
              </Stack>
              <Text color="gray.700" mb={3}>
                Il progetto ColdSharing è stato raccontato anche dal <b>La Repubblica</b>,
                come esempio di innovazione digitale e sostenibilità nella logistica agroalimentare.
              </Text>
              <Link
                href="https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce"
                color="teal.600"
                fontWeight="medium"
                isExternal
                rel="noreferrer"
              >
                Leggi l’articolo ufficiale →
              </Link>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ====================== LEGAME CON MARVINCLA ====================== */}
      <Box bg="white" py={{ base: 12, md: 16, lg: 20 }}>
        <Container maxW="7xl" textAlign="center">
          <Heading size="md" mb={4}>Un progetto sviluppato da Marvincla</Heading>
          <Text color="gray.700" maxW="4xl" mx="auto">
            ColdSharing nasce all’interno di <b>Marvincla</b>, la startup che accompagna le imprese agroalimentari
            nella trasformazione digitale. È il primo esempio concreto della nostra visione: creare tecnologie
            che connettono persone, dati e risorse per rendere la filiera più efficiente e sostenibile.
          </Text>
        </Container>
      </Box>

      {/* ====================== CTA ====================== */}
      <Box bg="teal.700" color="white" textAlign="center" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <Heading mb={3}>ColdSharing. Condividere il freddo non è mai stato così semplice.</Heading>
          <Text color="whiteAlpha.900" mb={6}>
            Unisciti alla rete che ridisegna il futuro della logistica agroalimentare.
          </Text>
          <Button
            as="a"
            href="https://cellefrigo.net"
            target="_blank"
            rel="noreferrer"
            colorScheme="whiteAlpha"
            size="lg"
            rightIcon={<FaArrowRight />}
          >
            Inizia ora
          </Button>
        </Container>
      </Box>
    </>
  );
}
