// src/pages/Hydrocooler.jsx
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

export default function Hydrocooler() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/hydrocooler-bg.jpg')" // <-- aggiungi immagine in /public
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
            Hydrocooler
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Soluzioni per il raffreddamento rapido di frutta e verdura appena raccolta
            attraverso immersione o docciatura con acqua refrigerata.
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
                Tecnologia di raffreddamento ad alta efficienza
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                L’<b>Hydrocooler</b> è un sistema progettato per abbassare rapidamente la
                temperatura di frutta e verdura tramite l’utilizzo di acqua refrigerata.
                Questo processo consente di ridurre drasticamente la temperatura interna
                dei prodotti dopo la raccolta, preservando freschezza, consistenza e
                durata di conservazione.
              </Text>
              <Text mb={6} fontSize="md" color="gray.700">
                Ideale per ciliegie, albicocche, pesche, mais dolce, meloni, cetrioli e
                altre colture sensibili, il sistema può essere configurato per funzionare
                a immersione, a pioggia o a tunnel continuo, in base alle esigenze
                produttive e al tipo di prodotto trattato.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent"/>
                  Raffreddamento uniforme e controllato di grandi volumi di prodotto.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Ciclo continuo con regolazione automatica della temperatura dell’acqua.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Costruzione in acciaio inox e materiali anticorrosione per ambienti umidi.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Possibilità di integrazione con impianti di lavaggio, asciugatura e celle frigorifere.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/hydrocooler.jpg" // <-- aggiungi immagine in /public
                alt="Hydrocooler per raffreddamento rapido di frutta e verdura"
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
            Vantaggi del sistema Hydrocooler
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Maggiore shelf life
              </Heading>
              <Text color="gray.600">
                Il rapido abbassamento della temperatura rallenta i processi enzimatici
                e prolunga la durata del prodotto fresco.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Qualità visiva e nutrizionale
              </Heading>
              <Text color="gray.600">
                Mantiene colore, consistenza e contenuto vitaminico dei prodotti
                ortofrutticoli, migliorando la presentazione sul mercato.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Efficienza energetica
              </Heading>
              <Text color="gray.600">
                Sistema di ricircolo dell’acqua e gestione automatica dei cicli di
                refrigerazione per un consumo ridotto.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>Raffredda in modo rapido, sicuro ed efficiente</Heading>
          <Text mb={8} opacity={0.9}>
            Scopri le soluzioni Nitra System per il raffreddamento post-raccolta con
            Hydrocooler. Tecnologia personalizzabile per ogni tipo di prodotto fresco.
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
