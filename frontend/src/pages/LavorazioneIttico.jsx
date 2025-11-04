// src/pages/LavorazioneIttico.jsx
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

export default function LavorazioneIttico() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/ittico-bg.jpg')" // <-- inserisci immagine in /public
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
            Impianti frigoriferi per la lavorazione del pesce e prodotti ittici
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Soluzioni di refrigerazione su misura per mantenere la catena del freddo e
            garantire freschezza, qualità e sicurezza alimentare nei processi di
            lavorazione e stoccaggio del pesce.
          </Text>
        </Container>
      </Box>

      {/* ================= DESCRIZIONE ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading
                as="h2"
                size="lg"
                color="nitra.primary"
                mb={4}
                fontWeight="700"
              >
                Sistemi per la conservazione e lavorazione del pesce
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Nitra System realizza impianti frigoriferi specifici per il settore
                ittico, studiati per mantenere le proprietà organolettiche del prodotto
                durante tutte le fasi di lavorazione, dal pescato allo stoccaggio
                e fino alla distribuzione.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Celle frigorifere per lo stoccaggio del pesce fresco o surgelato.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Tunnel di raffreddamento rapido e abbattitori di temperatura.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Impianti per la lavorazione, filettatura e confezionamento in atmosfera controllata.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Sistemi automatizzati per la gestione di temperatura, umidità e ventilazione.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/ittico.jpg" // <-- aggiungi immagine in /public
                alt="Impianto frigorifero settore ittico"
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
            Vantaggi per l’industria ittica
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Freschezza costante
              </Heading>
              <Text color="gray.600">
                Temperatura stabile in ogni fase della lavorazione per garantire la
                massima qualità e sicurezza del prodotto.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Igiene e sicurezza alimentare
              </Heading>
              <Text color="gray.600">
                Tutti gli impianti rispettano gli standard HACCP e sono realizzati con
                materiali anticorrosione per ambienti marini.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza e sostenibilità
              </Heading>
              <Text color="gray.600">
                Utilizzo di tecnologie a basso impatto ambientale e refrigeranti naturali
                per ridurre i consumi energetici.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>
            Tecnologia del freddo per la qualità del tuo pescato
          </Heading>
          <Text mb={8} opacity={0.9}>
            Affidati a Nitra System per progettare un impianto frigorifero su misura,
            efficiente e conforme alle normative del settore ittico.
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
