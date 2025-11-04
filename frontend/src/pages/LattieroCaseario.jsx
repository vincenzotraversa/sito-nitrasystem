// src/pages/LattieroCaseario.jsx
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

export default function LattieroCaseario() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/lattiero-bg.jpg')" // <-- immagine da inserire in /public
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
            Impianti frigoriferi per il settore lattiero-caseario
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Sistemi di refrigerazione avanzati per garantire la qualità del latte e dei
            suoi derivati lungo tutto il processo produttivo: dalla mungitura allo stoccaggio,
            fino alla distribuzione.
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
                Soluzioni su misura per la catena del freddo nel settore latte e formaggi
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Nitra System progetta e realizza impianti frigoriferi dedicati alla
                produzione e conservazione dei prodotti lattiero-caseari, con l’obiettivo
                di preservare le proprietà organolettiche del latte e di ottimizzare
                il consumo energetico dell’impianto.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Celle frigorifere per stoccaggio latte e derivati a temperatura controllata.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Impianti per la maturazione e stagionatura di formaggi e latticini freschi.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Sistemi di raffreddamento rapido post-pastorizzazione o post-mungitura.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Gestione automatizzata di temperatura e umidità per processi di fermentazione e conservazione.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/lattiero.jpg" // immagine impianto o lavorazione
                alt="Impianto frigorifero settore lattiero-caseario"
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
            Vantaggi per l’industria lattiero-casearia
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Controllo preciso delle temperature
              </Heading>
              <Text color="gray.600">
                Ogni fase, dalla raccolta alla stagionatura, è gestita con sistemi di
                regolazione automatica per garantire qualità e sicurezza alimentare.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza energetica
              </Heading>
              <Text color="gray.600">
                Utilizzo di compressori inverter e gas ecologici per ridurre i consumi e
                ottimizzare i costi operativi dell’impianto.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Igiene e affidabilità
              </Heading>
              <Text color="gray.600">
                Tutti i sistemi rispettano gli standard HACCP e assicurano un
                ambiente controllato, facile da sanificare e costantemente monitorato.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>
            Progettiamo il freddo su misura per il tuo caseificio
          </Heading>
          <Text mb={8} opacity={0.9}>
            Affidati a Nitra System per impianti efficienti, sostenibili e
            conformi agli standard di qualità del settore lattiero-caseario.
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
    </Box>
  );
}
