// src/pages/LogisticaGDO.jsx
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

export default function LogisticaGDO() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/logistica-bg.jpg')" // <-- inserisci immagine in /public
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
            Logistica refrigerata e distribuzione GDO
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Impianti frigoriferi e soluzioni di cold chain per magazzini, piattaforme
            distributive e veicoli refrigerati destinati alla logistica e alla grande distribuzione.
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
                Soluzioni integrate per la logistica del freddo
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Nitra System progetta e realizza impianti frigoriferi per centri logistici,
                magazzini e depositi a temperatura controllata, garantendo il rispetto
                della catena del freddo in ogni fase del trasporto e della distribuzione.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Celle frigorifere e ambienti multi-temperatura per piattaforme logistiche.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Sistemi per carico/scarico rapido con porte isotermiche e dock shelter.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Monitoraggio continuo di temperatura e umidità con controllo remoto.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Integrazione con sistemi di gestione del magazzino (WMS) e automazione.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/logisticagdo.webp" // <-- aggiungi immagine in /public
                alt="Impianto frigorifero per logistica e GDO"
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
            Vantaggi per la logistica e la GDO
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Continuità della catena del freddo
              </Heading>
              <Text color="gray.600">
                Temperature costanti lungo tutto il processo logistico, dal magazzino
                al punto vendita, con controllo in tempo reale.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza e risparmio energetico
              </Heading>
              <Text color="gray.600">
                Impianti ottimizzati con inverter, recupero termico e refrigeranti a basso impatto ambientale.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Affidabilità operativa
              </Heading>
              <Text color="gray.600">
                Sistemi di backup, gestione predittiva e manutenzione programmata
                per ridurre al minimo i fermi impianto.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>
            Soluzioni per una logistica del freddo efficiente e sicura
          </Heading>
          <Text mb={8} opacity={0.9}>
            Dalla progettazione alla realizzazione, Nitra System assicura impianti
            affidabili e performanti per magazzini, depositi e distribuzione refrigerata.
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
