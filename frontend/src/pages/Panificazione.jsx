// src/pages/Panificazione.jsx
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
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Flex, // ✅ aggiunto
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink, useParams } from "react-router-dom";

export default function Panificazione() {
  const { lang } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
            {/* HERO COMPATTO */}
      <Box
        position="relative"
        h={["42vh", "46vh", "50vh"]}
        mt={{ base: "72px", md: "80px" }}
      >
        {/* altezza equilibrata / spazio sotto la navbar */}

        <Image
          src="/panificazione.webp"
          alt="Impianti frigoriferi per panificazione"
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
          justify="flex-end"
          pb={{ base: "8vh", md: "10vh" }}
        >
          <Heading size={["xl", "2xl"]} mb={2} textShadow="0 2px 8px rgba(0,0,0,0.5)">
            Panificazione
          </Heading>
          <Text
            maxW="3xl"
            fontSize={["md", "lg"]}
            color="whiteAlpha.900"
            textShadow="0 1px 6px rgba(0,0,0,0.4)"
          >
            Progettiamo e realizziamo impianti per fermalievita, abbattimento, conservazione impasti
            e camere di lievitazione controllata per panifici artigianali e industria bakery.
          </Text>
        </Flex>
      </Box>


      {/* Vantaggi */}
      <Container maxW="7xl" py={[10, 16]}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mb={[10, 14]}>
          <Image
            src="/panificazione-camere.jpg"
            alt="Camere di lievitazione controllata"
            rounded="xl"
            objectFit="cover"
            h={{ base: "220px", md: "320px" }}
          />
          <Box>
            <Heading size="lg" color="nitra.primary" mb={3}>
              Lievitazione costante, qualità ripetibile
            </Heading>
            <Text color="gray.700" mb={4}>
              Regolazione precisa di temperatura, umidità e ventilazione con ricette personalizzate per
              ogni prodotto (pane, focaccia, brioche). Riduzione degli scarti, standardizzazione del processo
              e tracciabilità dei lotti.
            </Text>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="nitra.accent" />
                Controllo U.R. 55–95% e setpoint -30°C / +40°C
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} ccolor="nitra.accent" />
                Cicli programmati: fermalievita, prelievitazione, maturazione
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="nitra.accent" />
                Recupero calore e riduzione consumi
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>

        <Divider my={8} />

        {/* Soluzioni */}
        <Heading size="lg" color="nitra.primary" mb={4}>
          Soluzioni per panifici e industria bakery
        </Heading>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "teal.50" }}>
                <Box as="span" flex="1" textAlign="left">
                  Camere di lievitazione controllata
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Strutture modulari con pannelli isotermici, umidificazione integrata e gestione ricette.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "teal.50" }}>
                Abbattitori e celle di conservazione impasti
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Abbattimento rapido e stoccaggio controllato per ottimizzare i turni di produzione.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "teal.50" }}>
                Quadro elettrico, supervisione e telecontrollo
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              PLC/SCADA, ricette, registrazione dati e assistenza remota per continuità operativa.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <HStack mt={10}>
          <Button as={RouterLink} to={`/${lang}/contatti`} colorScheme="teal" size="lg">
            Richiedi consulenza
          </Button>
          <Button as={RouterLink} to={`/${lang}`} variant="outline">
            Torna alla Home
          </Button>
        </HStack>
      </Container>


      {/* ================= CTA ================= */}
<Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
  <Container maxW="5xl">
    <Heading mb={4}>
      Soluzioni di refrigerazione su misura per panifici e industria bakery
    </Heading>
    <Text mb={8} opacity={0.9}>
      Affidati a Nitra System.
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
