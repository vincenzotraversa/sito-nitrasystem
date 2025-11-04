// src/pages/Azienda.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export default function Azienda() {
  const navigate = useNavigate();

  useEffect(() => {
    // SEO META
    document.title =
      "Nitra System | Impianti frigoriferi industriali tra Italia ed Europa dell’Est";
    const desc =
      "Nitra System, con sede a Sliven (Bulgaria) e competenze italiane, progetta e realizza impianti frigoriferi industriali e commerciali. Partner strategico per aziende italiane che vogliono operare nell’Est Europa.";
    const keywords =
      "impianti frigoriferi industriali, refrigerazione Bulgaria, impianti industriali Europa Est, progettazione, consulenza, Nitra System, celle frigo, CO2, NH3, HFO, logistica freddo, Italia Bulgaria";

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", desc);
    setMeta("keywords", keywords);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        h={{ base: "40vh", md: "55vh" }}
        backgroundImage="url('/ponte.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        mt={{ base: "72px", md: "80px" }}
        role="img"
        aria-label="Ponte simbolico tra Italia ed Europa dell’Est"
      >
        <Box
          position="absolute"
          inset="0"
          bg="rgba(0,0,0,0.45)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          textAlign="center"
          px={4}
        >
          <MotionBox
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading fontSize={["2xl", "3xl", "4xl"]}>
              Refrigerazione industriale e commerciale
            </Heading>
            <Text mt={4} fontSize={["md", "lg"]} maxW="3xl" mx="auto" color="whiteAlpha.900">
              Nitra System è il punto di connessione tra l’esperienza italiana e il potenziale
              produttivo dell’Europa dell’Est.
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ================= CHI SIAMO ================= */}
      <Container maxW="7xl" py={{ base: 10, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Image
              src="/logonitra.png"
              alt="Progettazione impianti frigoriferi industriali in Bulgaria"
              rounded="lg"
              shadow="md"
              w="100%"
              h="auto"
            />
          </Box>
          <Box>
            <Heading color="nitra.primary" mb={4}>
              Storia
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={6}>
              Nitra System nasce a <b>Sliven (Bulgaria)</b>, cuore produttivo dell’Europa orientale,
              e opera con competenze e metodologia <b>interamente italiane</b>. Questa doppia anima
              permette all’azienda di offrire <b>impianti frigoriferi industriali</b> innovativi e
              certificati, combinando precisione tecnica, competitività e know-how italiano.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Grazie alla posizione strategica in Bulgaria, Nitra System è il partner ideale per le
              aziende italiane che vogliono <b>espandere le proprie attività nell’Est Europa</b> o
              ottimizzare la produzione con impianti efficienti, conformi e sostenibili.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* ================= SOLUZIONI CUSTOM ================= */}
      <Box
        position="relative"
        bgGradient="linear(to-r, nitra.primary 0%, #0E4A67 50%, #B04125 100%)"
        color="white"
        py={{ base: 12, md: 16 }}
        overflow="hidden"
      >
        {/* Effetto sfondo geometrico che richiama “connessione” */}
        <Box
          position="absolute"
          inset="0"
          opacity={0.08}
          bgImage="radial-gradient(circle at 20% 50%, white 1px, transparent 1px)"
          bgSize="24px 24px"
        />

        <Container maxW="7xl" position="relative">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            {/* Colonna sinistra: testo */}
            <Box>
              <Heading
                as="h2"
                size="lg"
                mb={4}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Soluzioni custom per l’Italia e l’Est Europa
              </Heading>

              <Text mb={6} color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Nitra System è il <b>ponte tecnologico tra Italia ed Est Europa</b>: ogni impianto
                viene progettato internamente dal nostro team tecnico secondo gli standard europei e
                con attenzione all’efficienza energetica.  
                <br /><br />
                Realizziamo impianti frigoriferi per i settori agroalimentare, farmaceutico e
                manifatturiero, con tempi rapidi e gestione completa dal design al collaudo.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Centrali frigo, celle e chiller industriali
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Supervisione e telecontrollo da remoto 24/7
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Hydrocooler e Vacuumcooler
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Produttore di ghiaccio e sanificatori alimentari
                </ListItem>
              </List>
            </Box>

            {/* Colonna destra: effetto visivo “ponte” */}
            <Box
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              justifyContent="center"
              h="100%"
              position="relative"
            >
              <Box
                w="100%"
                h="220px"
                bgGradient="linear(to-r, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1))"
                borderRadius="full"
                transform="rotate(-3deg)"
                boxShadow="0 0 40px rgba(0,0,0,0.2)"
              />
              <Text
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="whiteAlpha.700"
                fontSize="xl"
                fontWeight="semibold"
                letterSpacing="wider"
                textAlign="center"
                userSelect="none"
              >
                ITALIA • EST EUROPA
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="gray.50" py={{ base: 10, md: 16 }} textAlign="center">
        <Heading size="md" color="nitra.primary" mb={3}>
          Partner strategico per la tua espansione in Europa
        </Heading>
        <Text color="gray.700" mb={6}>
          Nitra System connette l’esperienza italiana con la solidità produttiva dell’Est Europa.  
          Contattaci per sviluppare insieme il tuo prossimo impianto frigorifero industriale.
        </Text>

        {/* Opzione A: Link nativo sul Button */}
        <Button
          as={RouterLink}
          to="../contatti"
          colorScheme="teal"
          size="lg"
        >
          Contattaci →
        </Button>
      </Box>
    </>
  );
}
