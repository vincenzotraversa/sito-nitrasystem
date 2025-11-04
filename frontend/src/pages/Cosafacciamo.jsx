// src/pages/Cosafacciamo.jsx
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Stack,
  Divider,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Cosafacciamo() {
  return (
    <>
      {/* ================== HERO ================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/impianti-nitra-hero.jpg"
          alt="Impianti frigoriferi industriali Nitra System"
          w="100%"
          h={["50vh", "60vh", "70vh"]}
          objectFit="cover"
        />
        <Box
          position="absolute"
          inset="0"
          bg="rgba(0,0,0,0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          px={4}
        >
          <MotionBox
            color="white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading size={["xl", "2xl", "3xl"]} mb={3}>
              Cosa facciamo
            </Heading>
            <Text fontSize={["lg", "xl"]} maxW="4xl" mx="auto">
              Soluzioni complete per refrigerazione industriale: progettazione, realizzazione, automazione e manutenzione H24.
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ================== SEZIONE DESCRITTIVA ================== */}
      <Container maxW="7xl" py={[12, 16]}>
        <Stack spacing={8}>
          <Heading color="nitra.primary">Specialisti nella refrigerazione industriale</Heading>
          <Text fontSize="lg" color="gray.700">
            Nitra System progetta e realizza impianti frigoriferi per il settore
            agroalimentare, logistico e manifatturiero. Dalla prima analisi energetica
            alla manutenzione predittiva, seguiamo l’intero ciclo di vita dell’impianto
            garantendo prestazioni, efficienza e continuità operativa.
          </Text>

          <Divider borderColor="rgba(14,74,103,0.18)" />

          <Heading size="md" color="nitra.primary">
            I nostri ambiti di intervento
          </Heading>
          <SimpleGrid columns={[1, 2, 4]} spacing={6}>
            <Box>
              <Badge bg="nitra.primary" color="white" mb={2}>01</Badge>
              <Heading size="sm">Progettazione</Heading>
              <Text color="gray.700" mt={2}>
                Analisi termodinamiche, scelta del refrigerante (NH₃, CO₂, HFO), simulazioni
                energetiche e definizione del layout impiantistico.
              </Text>
            </Box>
            <Box>
              <Badge bg="nitra.accent" color="white" mb={2}>02</Badge>
              <Heading size="sm">Realizzazione</Heading>
              <Text color="gray.700" mt={2}>
                Costruzione e montaggio di impianti completi con componentistica certificata,
                test di pressione e collaudo funzionale.
              </Text>
            </Box>
            <Box>
              <Badge bg="nitra.primary" color="white" mb={2}>03</Badge>
              <Heading size="sm">Automazione</Heading>
              <Text color="gray.700" mt={2}>
                PLC, inverter, sistemi SCADA e telemonitoraggio per controllo da remoto,
                sicurezza e ottimizzazione dei consumi.
              </Text>
            </Box>
            <Box>
              <Badge bg="nitra.accent" color="white" mb={2}>04</Badge>
              <Heading size="sm">Assistenza e Service</Heading>
              <Text color="gray.700" mt={2}>
                Interventi di manutenzione preventiva, predittiva e correttiva H24 in tutta
                Europa con squadre specializzate.
              </Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* ================== SEZIONE IMMAGINE + TESTO ================== */}
      <Box bg="nitra.bg" py={[12, 16]}>
        <Container maxW="7xl">
          <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/impianti-refrigerazione.jpg"
                alt="Centrale frigorifera Nitra System"
                rounded="lg"
                shadow="lg"
              />
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Heading color="nitra.primary">Tecnologia e sostenibilità</Heading>
              <Text fontSize="lg" color="gray.700" mt={4}>
                Ogni impianto Nitra è pensato per ridurre l’impatto ambientale e i costi
                energetici. Utilizziamo refrigeranti naturali, sistemi di recupero calore e
                soluzioni integrate per il monitoraggio in tempo reale delle prestazioni.
              </Text>
              <List mt={4} spacing={2} color="gray.700">
                <ListItem>• Refrigeranti naturali NH₃ e CO₂</ListItem>
                <ListItem>• Sistemi HFO a basso GWP</ListItem>
                <ListItem>• Recupero calore e fluidi secondari</ListItem>
                <ListItem>• Telecontrollo e manutenzione predittiva</ListItem>
              </List>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================== CTA ================== */}
      <Box py={[14, 20]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3} color="nitra.primary">
            Scopri le nostre soluzioni personalizzate
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={6}>
            Ogni impianto nasce da una progettazione su misura: performance, sicurezza e affidabilità.
          </Text>
          <Box
            as="a"
            href="/contatti"
            bg="nitra.primary"
            color="white"
            fontWeight="semibold"
            px={8}
            py={4}
            rounded="lg"
            _hover={{ bg: "nitra.accent" }}
            transition="all 0.3s"
          >
            Contattaci →
          </Box>
        </Container>
      </Box>
    </>
  );
}
