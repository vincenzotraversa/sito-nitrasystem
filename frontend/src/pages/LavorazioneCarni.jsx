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
  VStack,
  Image,
  Badge,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  List,
  ListItem,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function LavorazioneCarni() {
  useEffect(() => {
    document.title =
      "Lavorazione carni | Nitra System – Celle, frollatura, tunnel e sale lavorazione";
  }, []);

  return (
    <>

        {/* HERO COMPATTO */}
        <Box
          position="relative"
          h={["42vh", "46vh", "50vh"]} // altezza equilibrata
          mt={{ base: "72px", md: "80px" }} // spazio sotto la navbar
        >
          <Image
            src="/lavorazionecarne.jpg"
            alt="Impianti frigoriferi per la lavorazione delle carni"
            w="100%"
            h="100%"
            objectFit="cover"
            opacity={0.85}
          />

          {/* Overlay con testo centrato leggermente più in basso */}
          <Flex
            position="absolute"
            inset={0}
            bg="rgba(14,74,103,0.38)"
            direction="column"
            textAlign="center"
            color="white"
            px={4}
            align="center"
            justify="flex-end" // invece di center → posiziona il testo più in basso
            pb={{ base: "8vh", md: "10vh" }} // regola la distanza dal basso
          >
            <Heading
              size={["xl", "2xl"]}
              mb={2}
              textShadow="0 2px 8px rgba(0,0,0,0.5)"
            >
              Lavorazione carni
            </Heading>
            <Text
              maxW="3xl"
              fontSize={["md", "lg"]}
              color="whiteAlpha.900"
              textShadow="0 1px 6px rgba(0,0,0,0.4)"
            >
              Celle TN/BT, frollatura e stagionatura, tunnel di raffreddamento/abbattimento e
              sale lavorazione climatizzate secondo HACCP.
            </Text>
          </Flex>
        </Box>

      {/* INTRO + PUNTI DI FORZA */}
      <Container maxW="7xl" py={[8, 12]}>
        <SimpleGrid columns={[1, 2]} spacing={[8, 12]} alignItems="center">
          <Box>
            <Heading color="nitra.primary" mb={4}>
              Refrigerazione su misura per macellerie e industria della carne
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              Progettiamo impianti per tutte le fasi: ricevimento, pre-raffreddamento, frollatura,
              lavorazione, confezionamento e stoccaggio. Massima attenzione a qualità del prodotto,
              igiene e continuità operativa.
            </Text>
            <HStack spacing={3} flexWrap="wrap">
              {["Efficienza energetica", "Controllo termo-igrometrico", "Sicurezza alimentare", "Service 24/7"].map((t) => (
                <Badge key={t} colorScheme="teal" variant="subtle" px={3} py={1} rounded="full">
                  {t}
                </Badge>
              ))}
            </HStack>
          </Box>

          <Box>
            <Stack spacing={3}>
              {[
                "Celle TN/BT per mezzene, disosso e stoccaggio",
                "Frollatura e stagionatura con controllo umidità",
                "Sale lavorazione climatizzate, flussi aria ottimizzati",
                "Tunnel di raffreddamento/abbattimento rapido",
                "Sanificazione, materiali idonei e drenaggi",
                "Supervisione, telecontrollo e report energetici",
              ].map((p) => (
                <HStack key={p} align="start">
                  <Icon as={CheckCircleIcon} color="nitra.accent" mt="3px" />
                  <Text color="gray.700">{p}</Text>
                </HStack>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* SEZIONI TECNICHE IN STILE “BLOCK + IMAGE” */}
      <Container maxW="7xl" py={[10, 14]}>
        {/* Celle TN/BT */}
        <SimpleGrid columns={[1, 2]} spacing={[6, 10]} mb={[10, 14]} alignItems="center">
          <Box order={[2, 1]}>
            <Heading size="lg" color="nitra.primary" mb={3}>
              Celle TN/BT per conservazione e movimentazione
            </Heading>
            <Text color="gray.700" mb={4}>
              Progettazione di celle positive/negative per mezzene appese e banchi di disosso:
              isolamento ad alte prestazioni, evaporatori anti-brina, porte rapide e barriere
              per ridurre dispersioni all’apertura.
            </Text>
            <List spacing={2} color="gray.700">
              <ListItem>Ganci e binari inox, guide scorrevoli</ListItem>
              <ListItem>Porte isotermiche scorrevoli/battenti</ListItem>
              <ListItem>Illuminazione LED food-grade</ListItem>
            </List>
          </Box>
          <Image
            src="/carni-cella.jpg"
            alt="Celle frigorifere per carni"
            rounded="xl"
            objectFit="cover"
            h={["220px", "280px", "320px"]}
          />
        </SimpleGrid>

        {/* Frollatura / Stagionatura */}
        <SimpleGrid columns={[1, 2]} spacing={[6, 10]} mb={[10, 14]} alignItems="center">
          <Image
            src="/carni-frollatura.jpg"
            alt="Frollatura e maturazione carni"
            rounded="xl"
            objectFit="cover"
            h={["220px", "280px", "320px"]}
          />
          <Box>
            <Heading size="lg" color="nitra.primary" mb={3}>
              Frollatura e stagionatura con controllo umidità
            </Heading>
            <Text color="gray.700" mb={4}>
              Gestione precisa di temperatura, U.R. e ventilazione per uniformare la maturazione.
              Possibilità di ricette, registrazione dati e allarmi fuori soglia.
            </Text>
            <List spacing={2} color="gray.700">
              <ListItem>Sonde ridondate e logging continuo</ListItem>
              <ListItem>Deumidifica con recupero di calore</ListItem>
              <ListItem>Filtri antibatterici e materiali idonei</ListItem>
            </List>
          </Box>
        </SimpleGrid>

        {/* Sale lavorazione / Clima */}
        <SimpleGrid columns={[1, 2]} spacing={[6, 10]} mb={[10, 14]} alignItems="center">
          <Box order={[2, 1]}>
            <Heading size="lg" color="nitra.primary" mb={3}>
              Sale lavorazione climatizzate secondo HACCP
            </Heading>
            <Text color="gray.700" mb={4}>
              Unità trattamento aria, flussi laminari sulle linee, controllo di particolato e
              umidità. Pavimenti drenanti e dettagli costruttivi per igiene e pulizia rapida.
            </Text>
            <List spacing={2} color="gray.700">
              <ListItem>UTA con batterie caldo/freddo</ListItem>
              <ListItem>Ricambi d’aria e filtrazione adeguati</ListItem>
              <ListItem>Pressioni differenziali tra zone</ListItem>
            </List>
          </Box>
          <Image
            src="/carni-sala.jpg"
            alt="Sale di lavorazione carni climatizzate"
            rounded="xl"
            objectFit="cover"
            h={["220px", "280px", "320px"]}
          />
        </SimpleGrid>

        {/* Tunnel / Abbattimento */}
        <SimpleGrid columns={[1, 2]} spacing={[6, 10]} alignItems="center">
          <Image
            src="/carni-tunnel.jpg"
            alt="Tunnel di raffreddamento e abbattimento per carni"
            rounded="xl"
            objectFit="cover"
            h={["220px", "280px", "320px"]}
          />
          <Box>
            <Heading size="lg" color="nitra.primary" mb={3}>
              Tunnel di raffreddamento e abbattimento rapido
            </Heading>
            <Text color="gray.700">
              Sistemi a ventilazione direzionale e controllo temperatura differenziato per
              garantire tempi di raffreddamento costanti e qualità del prodotto.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
      {/* ================= CTA ================= */}
<Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
  <Container maxW="5xl">
    <Heading mb={4}>
      Soluzioni di refrigerazione su misura per il settore carni
    </Heading>
    <Text mb={8} opacity={0.9}>
      Affidati a Nitra System per impianti efficienti, sicuri e conformi agli standard igienico–sanitari della lavorazione carni.
    </Text>

    <Box
      as={RouterLink}
      to="../contatti"
      bg="nitra.accent"
      color="white"
      px={8}
      py={3}
      rounded="full"
      fontWeight="600"
      display="inline-block"
      _hover={{ bg: "#C85B38" }}
      _active={{ bg: "#9F3A22" }}
    >
      Contattaci ora
    </Box>
  </Container>
</Box>

    </>
  );
}
