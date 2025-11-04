// src/pages/Sanificatore.jsx
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

export default function Sanificatore() {
  return (
    <Box bg="white" color="gray.800">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        bgImage="url('/sanificatore-bg.jpg')" // <-- aggiungi immagine in /public
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
            Sanificatore ad Ionizzazione
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="3xl" mx="auto">
            Sistema avanzato per la purificazione e sanificazione dell’aria in ambienti
            alimentari e industriali. Riduce batteri, muffe, odori e composti organici
            volatili (V.O.C.) con tecnologia ad alta efficienza.
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
                Sanificazione tramite ionizzazione dell’aria
              </Heading>
              <Text mb={6} fontSize="md" color="gray.700">
                Il sistema di <b>sanificazione ad alta efficienza</b>, sviluppato con la
                collaborazione di istituti di ricerca, rappresenta una tecnologia
                innovativa per la purificazione dell’aria in ambienti alimentari e
                industriali.
              </Text>
              <Text mb={6} fontSize="md" color="gray.700">
                Il principio di funzionamento si basa sulla <b>ionizzazione dell’aria</b>:
                un processo che impiega alti voltaggi per caricare elettricamente atomi e
                molecole, generando <b>ioni positivi e negativi</b> in grado di abbattere
                batteri, funghi e agenti inquinanti presenti nell’atmosfera confinata.
              </Text>
              <Text mb={6} fontSize="md" color="gray.700">
                Durante il processo vengono prodotti <b>radicali ossigenati reattivi (R.O.S.)</b>,
                che ossidano ed eliminano composti organici volatili (V.O.C.), odori
                indesiderati e particolato fine (P.M.), migliorando la qualità dell’aria e
                l’igiene ambientale.
              </Text>

              <List spacing={3} fontSize="md">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Riduzione significativa di cariche batteriche e fungine.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Neutralizzazione di odori e V.O.C. presenti nell’ambiente.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Miglior filtrazione del particolato fine (P.M.) e aria più pulita.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="nitra.accent" />
                  Bassi consumi energetici e costi di manutenzione ridotti.
                </ListItem>
              </List>
            </Box>

            <Box textAlign="center">
              <Image
                src="/sanificatore.webp" // <-- aggiungi immagine in /public
                alt="Sanificatore per ambienti alimentari e industriali"
                rounded="xl"
                shadow="xl"
                mx="auto"
                maxW="90%"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= PRINCIPIO DI FUNZIONAMENTO ================= */}
      <Box bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            mb={{ base: 8, md: 12 }}
            color="nitra.primary"
          >
            Principio di funzionamento
          </Heading>

          <Text mb={8} fontSize="md" color="gray.700" maxW="5xl" mx="auto" textAlign="center">
            Il sistema opera secondo il principio di <b>Barrier Discharge</b> o
            <b> scarico a barriera dielettrica</b>: una tecnologia ad alta efficienza che
            permette la generazione controllata di ioni e radicali ossigenati reattivi
            (R.O.S.), garantendo una sanificazione costante e sicura.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Alta efficienza
              </Heading>
              <Text color="gray.600">
                Sanificazione continua anche in ambienti ampi, con consumo energetico minimo
                e nessun residuo chimico.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Sicurezza e affidabilità
              </Heading>
              <Text color="gray.600">
                Sistema stabile e automatizzato che non produce ozono in eccesso e rispetta
                le normative europee sulla sicurezza alimentare.
              </Text>
            </Box>

            <Box p={6} bg="white" rounded="xl" shadow="md">
              <Heading as="h4" size="md" mb={3}>
                Bassa manutenzione
              </Heading>
              <Text color="gray.600">
                Componenti a lunga durata, con ridotte esigenze di sostituzione o pulizia,
                ideale per utilizzo continuo in linea di produzione.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= SETTORI DI APPLICAZIONE ================= */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            mb={{ base: 8, md: 12 }}
            color="nitra.primary"
          >
            Settori di applicazione
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Heading as="h4" size="md" mb={3} color="nitra.primary">
                Settore agroalimentare
              </Heading>
              <List spacing={2} fontSize="md" color="gray.700">
                <ListItem>• Celle di conservazione frutta e verdura.</ListItem>
                <ListItem>• Riduzione dell’etilene e rallentamento dei processi di senescenza.</ListItem>
                <ListItem>• Sale di lavorazione e confezionamento di ortofrutta, carne e salumi.</ListItem>
                <ListItem>• Stagionatura di formaggi e insaccati (eliminazione muffe e acari).</ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h4" size="md" mb={3} color="nitra.primary">
                Settore industriale
              </Heading>
              <List spacing={2} fontSize="md" color="gray.700">
                <ListItem>• Impianti di smaltimento rifiuti e trattamento aria.</ListItem>
                <ListItem>• Centri commerciali e aree ad alta affluenza pubblica.</ListItem>
                <ListItem>• Ambienti sanitari, laboratori, cleanroom e palestre.</ListItem>
                <ListItem>• Trattamento V.O.C., odori e cariche microbiche in ambienti industriali.</ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="nitra.primary" color="white" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="5xl">
          <Heading mb={4}>Sanificazione continua e sostenibile</Heading>
          <Text mb={8} opacity={0.9}>
            Scopri la linea di sanificatori Nitra System per ambienti alimentari e
            industriali. Efficienza, sicurezza e igiene garantite 24 ore su 24.
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
