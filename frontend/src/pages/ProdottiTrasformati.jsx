// src/pages/ProdottiTrasformati.jsx
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

export default function ProdottiTrasformati() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/trasformati-bg.jpg')" // <-- inserisci immagine in /public
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
            Impianti frigoriferi per prodotti alimentari trasformati
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Soluzioni di refrigerazione e conservazione per l’industria dei prodotti alimentari trasformati:
            sicurezza, qualità e tracciabilità lungo tutta la filiera produttiva.
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
                Soluzioni integrate per la refrigerazione industriale
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Nitra System progetta impianti frigoriferi destinati alla lavorazione e
                conservazione di alimenti trasformati, come sughi, conserve, piatti pronti
                e prodotti confezionati. Ogni impianto è studiato per garantire la massima
                efficienza energetica, il controllo della temperatura e la sicurezza alimentare.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Celle e impianti di stoccaggio per prodotti confezionati o semilavorati.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Sistemi di raffreddamento rapido per linee di produzione alimentare.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Soluzioni personalizzate per tunnel di surgelazione e abbattimento termico.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Gestione automatica di temperatura e tracciabilità dei lotti produttivi.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/processoalimentare.jpg" // <-- aggiungi immagine in /public
                alt="Impianto frigorifero per prodotti alimentari trasformati"
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
            Vantaggi per l’industria alimentare
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Sicurezza alimentare
              </Heading>
              <Text color="gray.600">
                Tutti gli impianti rispettano gli standard HACCP e garantiscono
                condizioni ottimali di igiene, controllo e conservazione del prodotto.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza produttiva
              </Heading>
              <Text color="gray.600">
                Ottimizzazione dei tempi di raffreddamento e riduzione dei consumi grazie
                all’uso di tecnologie inverter e refrigeranti naturali.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Flessibilità operativa
              </Heading>
              <Text color="gray.600">
                Soluzioni modulabili per linee di produzione diverse: da piccole realtà
                artigianali a grandi stabilimenti industriali.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>
            Impianti efficienti per alimenti pronti e trasformati
          </Heading>
          <Text mb={8} opacity={0.9}>
            Affidati a Nitra System per soluzioni complete e personalizzate: dal
            raffreddamento rapido alla conservazione a lungo termine dei tuoi prodotti.
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
