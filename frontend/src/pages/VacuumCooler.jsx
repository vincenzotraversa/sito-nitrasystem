// src/pages/VacuumCooler.jsx
import React from "react";
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
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function VacuumCooler() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/vacuumcooler-bg.jpg')" // <-- aggiungi immagine in /public
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
            Vacuum Cooler
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Raffreddamento sottovuoto ad alta efficienza per prodotti ortofrutticoli,
            fiori recisi e prodotti da forno. Massima rapidità, minima perdita di peso.
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
                Raffreddamento rapido e uniforme con tecnologia sottovuoto
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Il sistema <b>Vacuum Cooler</b> utilizza il principio fisico
                dell’evaporazione sotto vuoto per abbassare rapidamente la temperatura
                dei prodotti freschi. L’acqua contenuta naturalmente negli alimenti
                evapora a bassa pressione, assorbendo calore e riducendo la temperatura
                interna del prodotto in pochi minuti.
              </Text>
              <Text mb={6} fontSize="md" color="gray.700">
                È la soluzione ideale per ortaggi a foglia, fiori recisi e panificati:
                garantisce una <b>distribuzione uniforme del freddo</b>, riduce la
                condensa e mantiene la qualità visiva e nutrizionale dei prodotti lungo
                tutta la catena del freddo.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Raffreddamento fino a 1–3 °C in meno di 30 minuti.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Riduzione drastica della disidratazione rispetto ai sistemi ad aria forzata.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Controllo digitale di pressione, umidità e cicli di raffreddamento.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Struttura in acciaio inox e porta a tenuta ermetica con isolamento termico.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/vacuumcooler.jpg" // <-- aggiungi immagine in /public
                alt="Impianto vacuum cooler per ortaggi freschi"
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
            Vantaggi del Vacuum Cooling
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Velocità di raffreddamento
              </Heading>
              <Text color="gray.600">
                Raffreddamento fino a 10 volte più rapido rispetto ai sistemi tradizionali,
                perfetto per produzioni su larga scala e riduzione dei tempi post-raccolta.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Conservazione della qualità
              </Heading>
              <Text color="gray.600">
                Mantiene colore, consistenza e contenuto vitaminico, riducendo le perdite
                dovute a shock termici o stress meccanici.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza energetica e sostenibilità
              </Heading>
              <Text color="gray.600">
                Consumi ridotti, minor impiego di refrigerante e ciclo chiuso che
                minimizza sprechi d’acqua e impatto ambientale.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>
            Tecnologia sottovuoto per un raffreddamento rapido e sicuro
          </Heading>
          <Text mb={8} opacity={0.9}>
            Nitra System progetta e installa impianti Vacuum Cooler su misura per
            ortofrutta, fiori e prodotti da forno, garantendo qualità costante e
            riduzione dei costi energetici.
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
