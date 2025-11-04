// src/pages/LogisticaRefrigerata.jsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function LogisticaRefrigerata() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/logistica-refrigerata-bg.jpg')" // <-- inserisci immagine in /public
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "rgba(0,0,0,0.45)",
        }}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        color="white"
      >
        <Container maxW="6xl" position="relative">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            mb={4}
            fontWeight="800"
          >
            Logistica refrigerata
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            opacity={0.9}
            maxW="3xl"
            mx="auto"
          >
            Soluzioni complete per il trasporto e la conservazione dei prodotti
            deperibili, con tecnologie che garantiscono la continuità della catena del
            freddo in ogni fase logistica.
          </Text>
        </Container>
      </Box>

      {/* ================= DESCRIZIONE ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            alignItems="center"
          >
            <Box>
              <Heading
                as="h2"
                size="lg"
                color="nitra.primary"
                mb={4}
                fontWeight="700"
              >
                Efficienza e controllo per la catena del freddo
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Nitra System progetta impianti frigoriferi e soluzioni per la logistica
                refrigerata, assicurando che i prodotti mantengano la temperatura ideale
                dal magazzino al punto vendita. Ogni sistema è sviluppato per ottimizzare
                i consumi e garantire la sicurezza alimentare.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Impianti di refrigerazione per magazzini, depositi e celle di carico/scarico.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Integrazione con mezzi di trasporto refrigerati e sistemi di tracciabilità.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Monitoraggio digitale delle temperature con allarmi in tempo reale.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Soluzioni modulari per piattaforme logistiche multi-temperatura.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/logisticarefrigerata.jpg" // <-- aggiungi immagine in /public
                alt="Impianto frigorifero per logistica refrigerata"
                rounded="xl"
                shadow="xl"
                mx="auto"
                maxW="90%"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= VANTAGGI ================= */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            mb={{ base: 8, md: 12 }}
            color="nitra.primary"
          >
            Vantaggi per la logistica refrigerata
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Catena del freddo garantita
              </Heading>
              <Text color="gray.600">
                Temperature costanti e controllate in ogni fase della logistica, con
                sistemi di monitoraggio e controllo remoto.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza energetica
              </Heading>
              <Text color="gray.600">
                Utilizzo di compressori inverter, refrigeranti naturali e sistemi di
                recupero del calore per ridurre i costi operativi.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Conformità normativa
              </Heading>
              <Text color="gray.600">
                Tutti gli impianti rispettano gli standard europei e le normative HACCP,
                assicurando qualità e tracciabilità lungo la filiera.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box
        bg="nitra.primary"
        color="white"
        py={{ base: 12, md: 16 }}
        textAlign="center"
      >
        <Container maxW="5xl">
          <Heading mb={4}>
            Soluzioni per una logistica del freddo affidabile e sostenibile
          </Heading>
          <Text mb={8} opacity={0.9}>
            Nitra System supporta aziende di logistica e distribuzione con impianti
            performanti, sicuri e ad alta efficienza energetica.
          </Text>
          <Box
            as={RouterLink}
            to="../contatti"
            bg="orange.500"
            color="white"
            px={8}
            py={3}
            rounded="full"
            fontWeight="600"
            _hover={{ bg: "orange.400" }}
          >
            Contattaci ora
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
