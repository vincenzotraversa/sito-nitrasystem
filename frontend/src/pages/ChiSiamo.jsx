// src/pages/ChiSiamo.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
  SimpleGrid,
  Stack,
  HStack,
  Avatar,
  List,
  ListItem,
  ListIcon,
  Tag,
  Wrap,
  WrapItem,
  Divider,
  Icon,
  Link,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaRocket,
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
  FaLeaf,
  FaGlobe,
  FaHeart,
  FaAward,
  FaNewspaper,
} from "react-icons/fa";

const MotionBox = motion(Box);

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

export default function ChiSiamo() {
  // SEO + ADV meta setup
  useEffect(() => {
    document.title = "Chi Siamo | Marvincla — Innovazione Digitale per la Filiera Agroalimentare";
    const setMeta = (selector, attr, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("name=")) el.setAttribute("name", selector.match(/name='([^']+)'/)[1]);
        if (selector.includes("property=")) el.setAttribute("property", selector.match(/property='([^']+)'/)[1]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    setMeta("meta[name='description']", "content",
      "Marvincla è il polo digitale che accompagna il settore agroalimentare nella trasformazione tecnologica. Scopri il team, la visione e i progetti come ColdSharing."
    );
    setMeta("meta[property='og:title']", "content", "Marvincla — Chi siamo");
    setMeta("meta[property='og:description']", "content",
      "Startup innovativa pugliese che unisce dati, tecnologia e persone per digitalizzare la filiera agroalimentare. Scopri la nostra storia e il significato del logo."
    );
    setMeta("meta[property='og:image']", "content", "/og-chisiamo.jpg");
    setMeta("meta[property='og:type']", "content", "website");

    // JSON-LD schema per SEO e PR
    const ldId = "ld-org";
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
      url: "https://marvincla.it/chi-siamo",
      logo: "https://marvincla.it/logo-marvincla.png",
      foundingDate: "2023",
      description:
        "Startup innovativa pugliese specializzata in piattaforme digitali e intelligenza artificiale per la filiera agroalimentare.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Giuseppe Semerari, 7",
        addressLocality: "Bari",
        postalCode: "70132",
        addressCountry: "IT",
      },
      founder: [
        { "@type": "Person", name: "Vincenzo Traversa" },
        { "@type": "Person", name: "Clara Lorusso" },
        { "@type": "Person", name: "Mario Traversa" },
      ],
      sameAs: [
        "https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce",
        "https://www.corrieredelmezzogiorno.it/",
      ],
    });
  }, []);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box as="section" position="relative" overflow="hidden" aria-label="Chi siamo — Hero">
        <Image
          src="/chisiamo2.png"
          alt="Marvincla — Innovazione digitale per la filiera agroalimentare"
          w="100%"
          h={{ base: "44vh", md: "56vh", lg: "64vh" }}
          objectFit="cover"
          filter="brightness(0.6)"
          loading="eager"
        />
        <Box position="absolute" inset={0} display="flex" alignItems="center" color="white" px={{ base: 6, md: 12 }}>
          <Container maxW="7xl">
            <MotionBox {...fade} maxW="5xl">
              <Heading fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.2" mb={3}>
                Portiamo il digitale dove nasce il valore: in filiera
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95} mb={6}>
                Siamo una startup innovativa nata in Puglia per unire persone, dati e tecnologia al servizio della filiera agroalimentare italiana.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                <Button as="a" href="/contatti" colorScheme="teal" rightIcon={<FaArrowRight />}>Parliamone</Button>
                <Button as="a" href="/cosa-facciamo" variant="outline" colorScheme="whiteAlpha">Scopri i servizi</Button>
              </Stack>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      {/* ====================== RICONOSCIMENTI / PR ====================== */}
      <Container maxW="7xl" py={{ base: 10, md: 14 }}>
        <VStack spacing={4} align="start">
          <HStack>
            <Icon as={FaAward} color="teal.500" />
            <Text>
              <b>Finalista Start Cup Puglia 2023</b> —{" "}
              <Link
                href="https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce"
                color="teal.600"
                isExternal
              >
                leggi la notizia
              </Link>
            </Text>
          </HStack>
          <HStack>
            <Icon as={FaNewspaper} color="teal.500" />
            <Text>
              <b>Uscita su La</b> — Riconoscimento per l’impatto e l’innovazione nel settore agroalimentare.
            </Text>
          </HStack>
        </VStack>
      </Container>

      <Divider />

      {/* ====================== PERCHÉ ESISTIAMO ====================== */}
      <Container as="section" maxW="7xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <MotionBox {...fade} p={6} rounded="2xl" borderWidth="1px">
            <Stack direction="row" align="center" mb={2}>
              <Icon as={FaLightbulb} color="teal.500" boxSize={6} />
              <Heading size="sm">Perché esistiamo</Heading>
            </Stack>
            <Text color="gray.700">
              L’innovazione ha valore solo se semplifica il lavoro delle persone. Aiutiamo la filiera agroalimentare a trasformare dati e processi in valore tangibile.
            </Text>
          </MotionBox>

          <MotionBox {...fade} p={6} rounded="2xl" borderWidth="1px">
            <Stack direction="row" align="center" mb={2}>
              <Icon as={FaCogs} color="teal.500" boxSize={6} />
              <Heading size="sm">Cosa facciamo</Heading>
            </Stack>
            <Text color="gray.700">
              Progettiamo e sviluppiamo piattaforme e servizi digitali su misura. Dalla strategia alla delivery, accompagniamo le imprese nel percorso di trasformazione.
            </Text>
          </MotionBox>

          <MotionBox {...fade} p={6} rounded="2xl" borderWidth="1px">
            <Stack direction="row" align="center" mb={2}>
              <Icon as={FaRocket} color="teal.500" boxSize={6} />
              <Heading size="sm">Cosa ottieni</Heading>
            </Stack>
            <List spacing={2} color="gray.700">
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Processi ottimizzati e più veloci</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Decisioni basate sui dati</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="teal.500" />Collaborazioni strategiche nella filiera</ListItem>
            </List>
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== SIGNIFICATO DEL LOGO (non modificato) ====================== */}
      <Container as="section" maxW="7xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <MotionBox {...fade} justifySelf="center">
            <Image
              src="/logomarvinclatras.png"
              alt="Logo Marvincla"
              mx="auto"                         // sempre centrato
              maxH={{ base: "240px", md: "300px", lg: "340px" }}  // un po' più grande
              objectFit="contain"
              display="block"
            />
          </MotionBox>
          <MotionBox {...fade}>
            <Heading size="lg" mb={3}>Il significato del nostro logo</Heading>
            <Text color="gray.700" fontSize="lg" mb={3}>
              Il logo di <b>Marvincla</b> racchiude tutto ciò che siamo e ciò in cui crediamo: un punto d’incontro tra <b>natura e innovazione</b>.
            </Text>
            <Text color="gray.700" fontSize="lg" mb={3}>
              La <b>foglia</b> rappresenta la vita, la terra e il lavoro quotidiano di chi produce valore nel settore agroalimentare. Le <b>connessioni digitali</b> che la avvolgono simboleggiano la tecnologia, i dati e l’intelligenza artificiale che trasformano quei processi in qualcosa di più efficiente, sostenibile e connesso.
            </Text>
            <Text color="gray.700" fontSize="lg" mb={3}>
              Insieme, questi elementi raccontano la nostra missione: <b>coltivare il futuro</b> unendo competenza umana e potenza digitale. Il blu esprime fiducia e visione; le linee pulite evocano collaborazione, equilibrio e crescita condivisa.
            </Text>
            <Text color="gray.700" fontSize="lg">
              Per noi non è solo un marchio: è l’impegno a <b>trasformare il mondo agroalimentare</b> con la forza del digitale, senza mai perdere le sue radici.
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== TEAM ====================== */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <MotionBox {...fade} textAlign="center" mb={10}>
          <Heading size="lg" mb={2}>Persone, prima della tecnologia</Heading>
          <Text color="gray.700" maxW="4xl" mx="auto">
            Un team multidisciplinare che combina competenze gestionali, tecniche e commerciali per offrire soluzioni concrete e scalabili.
          </Text>
        </MotionBox>

        {/* === Membri team === */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {[
            {
              name: "Vincenzo Traversa",
              role: "CEO & Founder · Ingegnere Gestionale",
              img: "/team-vincenzo.jpg",
              desc: "Gestione progetti end-to-end e traduzione dei requisiti aziendali in specifiche chiare. Focus sulla logistica del freddo.",
              tags: ["Project Management", "Analisi requisiti", "Filiera del freddo"],
            },
            {
              name: "Clara Lorusso",
              role: "CTO & Co-Founder · Software Developer",
              img: "/team-clara.jpg",
              desc: "Architetture web e database relazionali. Esperta di TypeScript, Laravel e ambienti scalabili.",
              tags: ["TypeScript", "MySQL", "PostgreSQL", "Laravel"],
            },
            {
              name: "Mario Traversa",
              role: "COO & Co-Founder · Responsabile Commerciale",
              img: "/team-mario.jpg",
              desc: "Coordinamento operativo e relazioni B2B nel settore agroalimentare. Cura la rete di partnership e la customer experience.",
              tags: ["Account Management", "Operazioni", "Agroalimentare"],
            },
          ].map((m) => (
            <MotionBox key={m.name} p={6} rounded="2xl" borderWidth="1px" whileHover={{ y: -3 }} transition="0.2s">
              <Stack align="center" spacing={4}>
                <Avatar size="xl" name={m.name} src={m.img} />
                <Heading size="md">{m.name}</Heading>
                <Text color="teal.600" fontWeight="semibold">{m.role}</Text>
                <Text color="gray.700" textAlign="center">{m.desc}</Text>
                <Wrap justify="center">
                  {m.tags.map((t) => (
                    <WrapItem key={t}><Tag colorScheme="teal" variant="subtle">{t}</Tag></WrapItem>
                  ))}
                </Wrap>
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== VALORI ====================== */}
      <Container as="section" maxW="7xl" py={{ base: 12, md: 16 }}>
        <Heading size="lg" mb={6}>I nostri valori</Heading>
        <Wrap>
          {[
            { label: "Ascolto e trasparenza", icon: FaHeart },
            { label: "Impatto misurabile", icon: FaChartLine },
            { label: "Sostenibilità e filiera", icon: FaLeaf },
            { label: "Sicurezza dei dati", icon: FaGlobe },
          ].map((v) => (
            <WrapItem key={v.label}>
              <Tag size="lg" colorScheme="teal" variant="subtle" px={3} py={2}>
                <Stack direction="row" align="center" spacing={2}>
                  <Icon as={v.icon} />
                  <Text>{v.label}</Text>
                </Stack>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Container>

      {/* ====================== CTA ====================== */}
      <Box bg="gray.50" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Pronti a costruire il prossimo passo?</Heading>
          <Text color="gray.700" mb={6}>Parlaci dei tuoi obiettivi: trasformeremo le idee in risultati concreti.</Text>
          <Button as="a" href="/contatti" colorScheme="teal" rightIcon={<FaArrowRight />}>Contattaci</Button>
        </Container>
      </Box>
    </>
  );
}
