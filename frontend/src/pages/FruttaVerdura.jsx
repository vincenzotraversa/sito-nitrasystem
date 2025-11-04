// src/pages/FruttaVerdura.jsx
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


export default function FruttaVerdura() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/frutta-bg.jpg')" // <-- inserisci immagine in /public
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
            Impianti frigoriferi per la conservazione di frutta e verdura
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Sistemi di refrigerazione e controllo dell’umidità per mantenere freschezza,
            qualità e valore nutritivo dei prodotti ortofrutticoli durante tutte le fasi di
            lavorazione e distribuzione.
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
                Soluzioni su misura per il settore ortofrutticolo
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Nitra System progetta impianti frigoriferi avanzati per la conservazione
                e la lavorazione di frutta e verdura, assicurando una gestione ottimale
                della temperatura e dell’umidità. Ogni impianto è progettato per ridurre
                gli sprechi e prolungare la shelf life del prodotto.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Celle frigorifere per conservazione a temperatura controllata.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Sistemi di refrigerazione rapida post-raccolta per mantenere la freschezza.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Impianti con controllo automatico di umidità e ventilazione.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Soluzioni personalizzate per celle di stagionatura, essiccazione e pre-raffreddamento.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/frutta.jpg" // <-- aggiungi immagine in /public
                alt="Impianto frigorifero per frutta e verdura"
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
            Vantaggi per il settore ortofrutticolo
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Conservazione prolungata
              </Heading>
              <Text color="gray.600">
                I sistemi di refrigerazione Nitra mantengono il prodotto fresco più a lungo,
                riducendo perdite e scarti post-raccolta.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Gestione intelligente del clima
              </Heading>
              <Text color="gray.600">
                Controllo automatico di temperatura, umidità e circolazione dell’aria
                per adattarsi ai diversi tipi di prodotto.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza energetica
              </Heading>
              <Text color="gray.600">
                Impianti progettati per minimizzare i consumi e utilizzare refrigeranti
                naturali a basso impatto ambientale.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>
            Soluzioni refrigerate per valorizzare i tuoi prodotti ortofrutticoli
          </Heading>
          <Text mb={8} opacity={0.9}>
            Dalla raccolta alla distribuzione, Nitra System garantisce impianti efficienti
            e affidabili per ogni esigenza di conservazione nel settore frutta e verdura.
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
