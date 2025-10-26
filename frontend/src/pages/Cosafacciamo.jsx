// src/pages/CosaFacciamo.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Stack,
  List,
  ListItem,
  ListIcon,
  Icon,
  Divider,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBullseye,
  FaChartBar,
  FaCogs,
  FaRobot,
  FaHandshake,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const fade = (prm) => ({
  initial: { opacity: 0, y: prm?.y ?? 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: prm?.d ?? 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
});

export default function CosaFacciamo() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // === SEO + ADV setup ===
  useEffect(() => {
    document.title = "Cosa Facciamo | Marvincla — Soluzioni Digitali per l’Agroalimentare";
    const setMeta = (name, content, property = false) => {
      const sel = property ? `meta[property='${name}']` : `meta[name='${name}']`;
      let tag = document.querySelector(sel);
      if (!tag) {
        tag = document.createElement("meta");
        if (property) tag.setAttribute("property", name);
        else tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // ✅ Meta + OG
    setMeta(
      "description",
      "Scopri come Marvincla trasforma il settore agroalimentare con soluzioni digitali: sviluppo software, AI, e-commerce, Business Intelligence e marketing integrato."
    );
    setMeta("og:title", "Cosa Facciamo | Marvincla");
    setMeta(
      "og:description",
      "Dalla strategia alla tecnologia: piattaforme digitali, intelligenza artificiale e partnership per la crescita delle imprese agroalimentari."
    );
    setMeta("og:image", "/og-cosafacciamo.jpg");
    setMeta("og:type", "website");

    // ✅ JSON-LD Schema (Service + Organization)
    const ldId = "ld-service";
    let ld = document.getElementById(ldId);
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Servizi digitali per la filiera agroalimentare",
      provider: {
        "@type": "Organization",
        name: "Marvincla",
        url: "https://marvincla.it",
        logo: "https://marvincla.it/logo-marvincla.png",
      },
      areaServed: "IT",
      serviceType: [
        "Sviluppo software",
        "Business Intelligence",
        "Intelligenza Artificiale",
        "Strategie Digitali",
      ],
      description:
        "Marvincla offre soluzioni integrate per digitalizzare la filiera agroalimentare: piattaforme web, data analytics e AI applicata ai processi produttivi e commerciali.",
    });
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <Box position="relative" overflow="hidden" role="region" aria-label="Cosa facciamo - hero">
        <Box as="picture">
          <source srcSet="/Cosafacciamo.png" type="image/avif" />
          <source srcSet="/Cosafacciamo.png" type="image/webp" />
          <Image
            src="/Cosafacciamo.png"
            alt="Soluzioni digitali per la filiera agroalimentare"
            w="100%"
            h={{ base: "56vh", md: "64vh", lg: "72vh" }}
            objectFit="cover"
            loading="eager"
          />
        </Box>

        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, blackAlpha.700 0%, blackAlpha.600 40%, blackAlpha.700 100%)"
          display="flex"
          alignItems="center"
        >
          <Container maxW="7xl" px={{ base: 6, md: 8, lg: 12 }}>
            <MotionBox
              {...(prefersReducedMotion ? { initial: false } : fade({ y: 20, d: 0.6 }))}
              color="white"
              maxW="5xl"
            >
              <Heading as="h1" size="2xl" lineHeight="1.1" mb={4}>
                Trasformiamo il settore agroalimentare con la forza del digitale
              </Heading>
              <Text fontSize="xl" color="whiteAlpha.900" mb={6}>
                Soluzioni su misura che uniscono analisi, strategia e tecnologia. Dalla tracciabilità
                all’AI, rendiamo la filiera più efficiente e competitiva.  
                📈 <b>Dal campo alla rete: il digitale che genera valore.</b>
              </Text>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      {/* ===== SEZIONE: SERVIZI DIGITALI ===== */}
      <Section
        id="servizi-digitali"
        icon={FaBullseye}
        title="Servizi digitali"
        text={
          <>
            <b>Comunicare, connettere, crescere.</b> Creiamo e gestiamo siti web, portali e piattaforme
            e-commerce pensati per valorizzare le imprese agroalimentari. Strategie personalizzate —
            dal SEO/SEM alle campagne ADV — per generare visibilità e risultati concreti.
          </>
        }
        quote="Dal campo alla rete: il digitale che genera valore."
        items={[
          "Siti web, portali e e-commerce su misura",
          "Strategie SEO, SEM e pubblicità mirata",
          "Social Media Management e campagne ADV",
          "Gestione contenuti multimediali e storytelling aziendale",
        ]}
        img="/servizidigitali.png"
        alt="Soluzioni digitali per l’agroalimentare"
      />

      <Divider />

      {/* ===== SEZIONE: BUSINESS INTELLIGENCE ===== */}
      <Section
        reverse
        id="business-intelligence"
        icon={FaChartBar}
        title="Business Intelligence"
        text={
          <>
            <b>Dati che diventano decisioni.</b> Analisi su import/export, domanda e trend di mercato per
            decisioni strategiche basate su evidenze reali. Dashboard e previsioni per guidare la crescita.
          </>
        }
        quote="Trasformiamo i dati in vantaggio competitivo."
        items={[
          "Dashboard interattive per la direzione commerciale",
          "Analisi import/export e indicatori di mercato",
          "Report di settore con KPI strategici",
          "Previsioni e simulazioni basate su AI",
        ]}
        img="/businessintelligence.png"
        alt="Business Intelligence agroalimentare"
      />

      <Divider />

      {/* ===== SEZIONE: SVILUPPO SOFTWARE ===== */}
      <Section
        id="sviluppo-software"
        icon={FaCogs}
        title="Sviluppo software e piattaforme IT"
        text={
          <>
            <b>Soluzioni su misura per la filiera agroalimentare.</b> Progettiamo software gestionali,
            piattaforme B2B e integrazioni ERP/CRM/API per ottimizzare i processi e scalare in cloud.
          </>
        }
        quote="Digitalizziamo i processi per migliorare l’efficienza."
        items={[
          "Piattaforme B2B e marketplace verticali",
          "Integrazioni ERP/CRM/API e sistemi legacy",
          "Gestionali su misura e app PWA responsive",
          "Sicurezza e scalabilità cloud-native",
        ]}
        img="/svilupposoftware.png"
        alt="Sviluppo software e piattaforme IT"
      />

      <Divider />

      {/* ===== SEZIONE: INTELLIGENZA ARTIFICIALE ===== */}
      <Section
        reverse
        id="intelligenza-artificiale"
        icon={FaRobot}
        title="Intelligenza Artificiale integrata"
        text={
          <>
            <b>L’AI come motore dell’innovazione.</b> Automatizziamo analisi, forecasting e controllo qualità
            con modelli predittivi che migliorano decisioni, efficienza e sostenibilità.
          </>
        }
        quote="Dati, automazione e intelligenza per una filiera che pensa in digitale."
        items={[
          "Forecast della domanda e ottimizzazione scorte",
          "Rilevamento anomalie e qualità prodotto",
          "Raccomandazioni automatiche e scoring lead",
          "Automazione documentale e analisi predittiva",
        ]}
        img="/intelligenzaartificiale.png"
        alt="AI integrata nella filiera"
      />

      <Divider />

      {/* ===== SEZIONE: PARTNER ===== */}
      <Section
        id="partner"
        icon={FaHandshake}
        title="Partner e sinergie per la crescita"
        text={
          <>
            <b>Creiamo connessioni che generano valore.</b> Aiutiamo le imprese a individuare partner strategici
            per innovare insieme, condividendo risorse e obiettivi.
          </>
        }
        quote="Collaborare per competere meglio."
        items={[
          "Networking B2B con aziende del settore",
          "Partnership tecnologiche e commerciali",
          "Progetti con enti di ricerca e università",
          "Supporto nella co-innovazione di filiera",
        ]}
        img="/partner.png"
        alt="Partnership e sinergie tra imprese"
        cta={{ text: "Scopri come diventare partner", to: "/partnercollaborazioni" }}
      />

      {/* ===== CTA finale ===== */}
      <Box bg="gray.50" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Marvincla. Dove l’innovazione incontra la filiera.</Heading>
          <Text fontSize="lg" color="gray.700" mb={6}>
            Un unico interlocutore per la trasformazione digitale del settore agroalimentare.
            Tecnologia, analisi e visione strategica al servizio delle imprese.
          </Text>
          <Button as={RouterLink} to="/contatti" colorScheme="teal" size="lg">
            📞 Richiedi una consulenza
          </Button>
        </Container>
      </Box>
    </>
  );
}

// ===== COMPONENTE RIUTILIZZABILE =====
function Section({ id, icon, title, text, quote, items, img, alt, reverse, cta }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <Container id={id} maxW="7xl" py={{ base: 12, md: 16, lg: 20 }} px={{ base: 6, md: 8, lg: 12 }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 12 }}
        alignItems="center"
        direction={reverse ? "row-reverse" : "row"}
      >
        {!reverse && (
          <Image src={img} alt={alt} objectFit="cover" rounded="xl" shadow="md" loading="lazy" />
        )}

        <MotionBox {...(prefersReducedMotion ? { initial: false } : fade({ y: 28 }))}>
          <Stack spacing={4}>
            <Icon as={icon} boxSize={10} color="teal.500" />
            <Heading as="h2">{title}</Heading>
            <Text fontSize="lg" color="gray.700">{text}</Text>
            <Text fontSize="sm" color="gray.600">💬 “{quote}”</Text>
            <List spacing={2} mt={2}>
              {items.map((t, i) => (
                <ListItem key={i}>
                  <ListIcon as={FaCheckCircle} color="teal.500" />
                  {t}
                </ListItem>
              ))}
            </List>
            <Button as={RouterLink} to={cta?.to || "/contatti"} colorScheme="teal" mt={6}>
              {cta?.text || "Richiedi una consulenza"}
            </Button>
          </Stack>
        </MotionBox>

        {reverse && (
          <Image src={img} alt={alt} objectFit="cover" rounded="xl" shadow="md" loading="lazy" />
        )}
      </SimpleGrid>
    </Container>
  );
}
