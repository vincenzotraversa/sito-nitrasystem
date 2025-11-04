// src/pages/Partnercollaborazioni.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Stack,
  Button,
  Divider,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight, FaHandshake, FaLightbulb, FaHeart } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Partnercollaborazioni() {
  useEffect(() => {
    document.title =
      "Partner & Collaborazioni | Nitra System – Crescere insieme, innovare insieme";
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/partner2.png"
          alt="Collaborazioni Nitra System"
          w="100%"
          h={["60vh", "70vh", "80vh"]}
          objectFit="cover"
          filter="brightness(0.6)"
        />
        <Box
          position="absolute"
          inset="0"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          px={[6, 8]}
          color="white"
        >
          <Heading
            fontSize={["2xl", "4xl", "5xl"]}
            mb={4}
            lineHeight="1.2"
            textShadow="0 2px 10px rgba(0,0,0,0.4)"
          >
            Insieme ai nostri partner, costruiamo innovazione
          </Heading>
          <Text
            fontSize={["lg", "xl"]}
            maxW="3xl"
            color="whiteAlpha.900"
            mb={6}
          >
            Ogni collaborazione è un valore condiviso.  
            I nostri partner non sono fornitori: sono parte del nostro successo.
          </Text>
          <Button
            as={RouterLink}
            to="../contatti"
            colorScheme="teal"
            size="lg"
            rightIcon={<FaArrowRight />}
          >
            Diventa partner di Nitra System
          </Button>
        </Box>
      </Box>

      {/* ================= VISIONE PARTNERSHIP ================= */}
      <Container maxW="6xl" py={[12, 16]}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
          <Box>
            <Heading size="lg" color="nitra.primary" mb={4}>
              I partner come leva strategica
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              In Nitra System crediamo che l’innovazione non nasca da soli.  
              Le nostre collaborazioni sono alleanze basate su fiducia, competenza e visione comune.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Ogni partner contribuisce a rafforzare la catena del valore: dalla progettazione
              degli impianti frigoriferi alla digitalizzazione dei processi.  
              Crescere insieme significa costruire un futuro sostenibile per l’intero settore.
            </Text>
          </Box>

          <VStack align="stretch" spacing={5}>
            <MotionBox
              p={6}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              whileHover={{ y: -3 }}
              transition="0.2s"
            >
              <Stack direction="row" align="center" spacing={4}>
                <Icon as={FaHandshake} boxSize={8} color="nitra.accent" />
                <Heading size="sm" color="nitra.primary">
                  Collaborazione a lungo termine
                </Heading>
              </Stack>
              <Text mt={2} color="gray.700">
                Non cerchiamo partner occasionali, ma relazioni solide che crescano nel tempo.
              </Text>
            </MotionBox>

            <MotionBox
              p={6}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              whileHover={{ y: -3 }}
              transition="0.2s"
            >
              <Stack direction="row" align="center" spacing={4}>
                <Icon as={FaLightbulb} boxSize={8} color="nitra.accent" />
                <Heading size="sm" color="nitra.primary">
                  Innovazione condivisa
                </Heading>
              </Stack>
              <Text mt={2} color="gray.700">
                Ogni partner porta competenze uniche, che si fondono per creare soluzioni più
                intelligenti e sostenibili.
              </Text>
            </MotionBox>

            <MotionBox
              p={6}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              whileHover={{ y: -3 }}
              transition="0.2s"
            >
              <Stack direction="row" align="center" spacing={4}>
                <Icon as={FaHeart} boxSize={8} color="nitra.accent" />
                <Heading size="sm" color="nitra.primary">
                  Valori condivisi
                </Heading>
              </Stack>
              <Text mt={2} color="gray.700">
                Rispetto, trasparenza e responsabilità: i valori che ci guidano in ogni collaborazione.
              </Text>
            </MotionBox>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* ================= ESEMPIO: COLLABORAZIONE COLD SHARING ================= */}
      <Box bg="nitra.bg" py={[14, 20]}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Image
              src="/coldsharinglogo.png"
              alt="Collaborazione Nitra System e Marvincla"
              rounded="2xl"
              shadow="md"
            />
            <Box>
              <Heading size="lg" color="nitra.primary" mb={4}>
                Caso di successo: ColdSharing
              </Heading>
              <Text fontSize="lg" color="gray.700" mb={6}>
                La collaborazione con <b>Marvincla</b> ha dato vita a <b>ColdSharing</b>,
                il primo marketplace B2B dedicato alla condivisione del freddo.
              </Text>
              <Text fontSize="lg" color="gray.700" mb={6}>
                In questo progetto Nitra System ha messo in campo la propria esperienza
                nella refrigerazione industriale e nella logistica del freddo, mentre Marvincla
                ha sviluppato la piattaforma digitale, l’interfaccia e l’infrastruttura tecnologica.
              </Text>
              <Button
                as={RouterLink}
                to="../coldsharing"     // ⇒ /:lang/coldsharing
                colorScheme="teal"
                size="lg"
                rightIcon={<FaArrowRight />}>
                Scopri ColdSharing
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA PARTNER ================= */}
      <Box py={[14, 20]}>
        <Container maxW="6xl" textAlign="center">
          <Heading mb={4} color="nitra.primary">
            Cresci con noi
          </Heading>
          <Text color="gray.700" maxW="4xl" mx="auto" mb={6}>
            Se condividi la nostra visione e desideri portare valore al settore della refrigerazione,
            diventa parte del nostro network di partner strategici.  
            Insieme, possiamo trasformare la logistica del freddo in un ecosistema più efficiente e sostenibile.
          </Text>
              <Button
                as={RouterLink}
                to="../contatti"
                colorScheme="teal"
                size="lg"
                rightIcon={<FaArrowRight />}>
                Contattaci
              </Button>
        </Container>
      </Box>

      {/* ================= FONDO ISPIRAZIONALE ================= */}
      <Box bg="nitra.primary" color="white" textAlign="center" py={[10, 16]}>
        <Container maxW="6xl">
          <Heading fontSize={["2xl", "3xl"]} mb={4}>
            Le grandi idee nascono dall’unione di grandi persone
          </Heading>
          <Text color="whiteAlpha.900" maxW="3xl" mx="auto" mb={6}>
            Ogni partnership è una storia di fiducia, innovazione e rispetto reciproco.
            E il futuro della refrigerazione lo scriviamo insieme.
          </Text>
        </Container>
      </Box>
    </>
  );
}
