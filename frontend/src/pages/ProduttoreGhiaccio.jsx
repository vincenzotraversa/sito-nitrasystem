// src/pages/ProduttoreGhiaccio.jsx
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

export default function ProduttoreGhiaccio() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/ghiaccio-bg.jpg')" // <-- aggiungi immagine in /public
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
            Produttore di Ghiaccio
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Soluzioni professionali per la produzione di ghiaccio granulare e a scaglie,
            ideali per il settore alimentare, della ristorazione e industriale.
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
                A cosa serve un produttore di ghiaccio?
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Il <b>produttore di ghiaccio</b> è una macchina indispensabile per garantire
                la corretta conservazione e presentazione di alimenti e bevande. 
                Oltre al settore <b>Ho.Re.Ca.</b>, trova impiego in ambito <b>industriale</b> e
                <b> agroalimentare</b> per il raffreddamento controllato di prodotti sensibili.
              </Text>
              <Text mb={6} fontSize="md" color="gray.700">
                Dalle esposizioni di pesce e frutta alla lavorazione di impasti o miscele alimentari,
                il ghiaccio prodotto mantiene costante la temperatura e l’umidità del prodotto,
                evitando shock termici e migliorando la qualità di conservazione.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Ideale per banchi pesce, frutta, verdura e bevande.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Supporta processi industriali di raffreddamento e miscelazione.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Igiene garantita e produzione continua di ghiaccio cristallino.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/ghiaccio-lavorazione.jpg" // <-- aggiungi immagine in /public
                alt="Produttore di ghiaccio industriale per alimenti e bevande"
                rounded="xl"
                shadow="xl"
                mx="auto"
                maxW="90%"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= TIPOLOGIE DI GHIACCIO ================= */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            mb={{ base: 8, md: 12 }}
            color="nitra.primary"
          >
            Tipologie di ghiaccio disponibili
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Ghiaccio granulare e supergranulare
              </Heading>
              <Text color="gray.600">
                Il ghiaccio <b>granulare</b> e <b>supergranulare</b> è la scelta ideale per
                esposizioni di pesce, bevande e prodotti ortofrutticoli.
                <br />
                Il granulare, più friabile e umido, garantisce un effetto refrigerante immediato;
                il supergranulare, più compatto, mantiene a lungo la temperatura e l’umidità
                ottimali del prodotto esposto.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Ghiaccio a scaglie
              </Heading>
              <Text color="gray.600">
                Il ghiaccio <b>a scaglie</b> è il più freddo e asciutto, prodotto a temperature
                comprese tra <b>-6 °C e -12 °C</b> con spessore di 1,5–3 mm.
                <br />
                Con solo il 2% di acqua residua, è ideale per la conservazione prolungata di
                alimenti sensibili e la lavorazione in ambienti a temperatura controllata.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= VANTAGGI ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            mb={{ base: 8, md: 12 }}
            color="nitra.primary"
          >
            Vantaggi dei produttori di ghiaccio Nitra System
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza e continuità
              </Heading>
              <Text color="gray.600">
                Produzione costante di ghiaccio anche in condizioni ambientali difficili,
                con sistemi ad alta efficienza energetica e ciclo automatico.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Igiene garantita
              </Heading>
              <Text color="gray.600">
                Tutte le parti a contatto con l’acqua sono realizzate in <b>acciaio inox</b>
                o materiali anticorrosione per assicurare igiene e durata nel tempo.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Versatilità d’uso
              </Heading>
              <Text color="gray.600">
                Adatti a diversi settori: alimentare, industriale, sanitario e logistico.
                Personalizzabili per volume di produzione e tipologia di ghiaccio.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>Produzione di ghiaccio su misura per ogni esigenza</Heading>
          <Text mb={8} opacity={0.9}>
            Nitra System progetta e installa impianti per la produzione di ghiaccio
            granulare, supergranulare e a scaglie. Soluzioni efficienti e igieniche per
            il settore alimentare e industriale.
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
