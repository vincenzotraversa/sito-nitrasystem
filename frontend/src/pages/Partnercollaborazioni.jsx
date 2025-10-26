// src/pages/Partnercollaborazioni.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
  Divider,
  Stack,
  Link,
  Tag,
  Wrap,
  WrapItem,
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaCogs,
  FaBullseye,
  FaPhoneAlt,
  FaGlobe,
  FaPlusCircle,
  FaProjectDiagram,
  FaTools,
  FaWarehouse,
  FaLeaf,
  FaBullhorn,
  FaCheckCircle,
} from "react-icons/fa";

const MotionBox = motion(Box);

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 },
};

export default function PartnerCollaborazioni() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    nome: "",
    email: "",
    azienda: "",
    messaggio: "",
  });
  const [touched, setTouched] = useState({});

  const errors = {
    nome: !values.nome ? "Inserisci il tuo nome" : "",
    email: !values.email
      ? "Inserisci la tua email"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
      ? "Email non valida"
      : "",
    messaggio: values.messaggio.length < 10 ? "Scrivi almeno 10 caratteri" : "",
  };
  const isInvalid = (field) => touched[field] && errors[field];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ nome: true, email: true, messaggio: true });
    if (errors.nome || errors.email || errors.messaggio) {
      toast({
        title: "Compila tutti i campi obbligatori.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      setLoading(true);
      // 👉 qui puoi sostituire con la tua logica di invio (API o EmailJS)
      console.log("Richiesta partner:", values);
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo entro 48 ore.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setValues({ nome: "", email: "", azienda: "", messaggio: "" });
      setTouched({});
    } catch (err) {
      toast({
        title: "Errore durante l’invio.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // ==== SEO + Schema (abbreviato per leggibilità) ====
  useEffect(() => {
    document.title =
      "Partner & Collaborazioni | Marvincla — Unico interlocutore, network di specialisti";
  }, []);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/network-bg.jpg"
          alt="Rete partner e collaborazioni Marvincla"
          w="100%"
          h={{ base: "45vh", md: "55vh", lg: "64vh" }}
          objectFit="cover"
          filter="brightness(0.6)"
          loading="eager"
        />
        <Box
          position="absolute"
          inset="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="black"
          px={{ base: 6, md: 10, lg: 16 }}
          textAlign="center"
        >
          <MotionBox {...fade} maxW="5xl">
            <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
              Unico interlocutore. Network di specialisti al tuo servizio.
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
              Con Marvincla hai la regia del progetto e l’accesso a partner qualificati lungo tutta
              la filiera: tecnica, impiantistica, logistica del freddo, digitale e marketing.
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ====================== 1. VALORE DELLA RETE ====================== */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack {...fade} p={6} borderWidth="1px" rounded="2xl" align="start">
            <Icon as={FaCogs} boxSize={8} color="teal.500" />
            <Heading size="md">Dove non arriviamo noi, arrivano i partner</Heading>
            <Text color="gray.700">
              Attiviamo le competenze dei nostri partner per completare ogni progetto con
              professionalità e velocità. Un’unica governance, più valore.
            </Text>
          </VStack>

          <VStack {...fade} p={6} borderWidth="1px" rounded="2xl" align="start">
            <Icon as={FaBullseye} boxSize={8} color="teal.500" />
            <Heading size="md">Partner strategici per ogni obiettivo</Heading>
            <Text color="gray.700">
              Dalla raccolta del prodotto alla cella frigorifera, fino a web e ADV. Coordiniamo
              chi trasforma la tua idea in risultati concreti.
            </Text>
          </VStack>

          <VStack {...fade} p={6} borderWidth="1px" rounded="2xl" align="start">
            <Icon as={FaHandshake} boxSize={8} color="teal.500" />
            <Heading size="md">Unico interlocutore, meno complessità</Heading>
            <Text color="gray.700">
              Un solo referente per pianificazione, contratti e qualità: risparmi tempo e gestisci
              tutto con un partner unico.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== 2. COPERTURA DI FILIERA ====================== */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <Heading size="lg" mb={3}>
          Dalla produzione alla promozione: copriamo l’intera filiera
        </Heading>
        <Text color="gray.700" mb={8}>
          Attiviamo i partner giusti per ogni fase del tuo business, con un approccio end-to-end.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {[
            { icon: FaLeaf, title: "Raccolta & Origine", text: "Qualità, tracciabilità e consulenza di filiera." },
            { icon: FaWarehouse, title: "Celle & Impianti", text: "Progettazione e realizzazione impianti del freddo." },
            { icon: FaTools, title: "Logistica & Operations", text: "Trasporto, gestione stock e manutenzione." },
            { icon: FaBullhorn, title: "Digitale & Marketing", text: "Siti, SEO/ADV, e-commerce e storytelling." },
          ].map((b, i) => (
            <VStack key={i} {...fade} p={6} borderWidth="1px" rounded="2xl" align="start">
              <Icon as={b.icon} color="teal.500" boxSize={7} />
              <Heading size="sm">{b.title}</Heading>
              <Text color="gray.700">{b.text}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== 3. PARTNER VETRINA ====================== */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <Heading size="lg" textAlign="center" mb={10}>
          Partner che condividono la nostra visione
        </Heading>

        <Card variant="outline" mb={8} rounded="2xl">
          <CardHeader pb={0}>
            <HStack spacing={4} align="center">
              <Image
                src="/refrom-logo.png"
                alt="Refrom Italia"
                boxSize="64px"
                objectFit="contain"
              />
              <Heading size="md">Refrom Italia — Celle frigorifere</Heading>
            </HStack>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Text color="gray.700">
                Specializzata nella progettazione e realizzazione di impianti frigoriferi e celle su
                misura per il settore agroalimentare.
              </Text>
              <Wrap>
                {["Celle frigo", "Impiantistica", "Cold chain"].map((t) => (
                  <WrapItem key={t}>
                    <Tag colorScheme="teal" variant="subtle">
                      {t}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
              <Link href="https://www.refromitalia.it" color="teal.600" isExternal>
                🌐 Visita il sito →
              </Link>
            </Stack>
          </CardBody>
        </Card>

        <Text fontStyle="italic" textAlign="center" color="gray.700" mt={6}>
          Ogni collaborazione è un passo verso un ecosistema più innovativo e sostenibile.
        </Text>
      </Container>

      <Divider />

      {/* ====================== 4. MODULO CONTATTO RAPIDO ====================== */}
      <Container maxW="5xl" py={{ base: 12, md: 16 }}>
        <MotionBox {...fade} textAlign="center" mb={8}>
          <Heading size="lg" mb={2}>
            Vuoi diventare partner o richiedere una collaborazione?
          </Heading>
          <Text color="gray.700">
            Compila il modulo: ti risponderemo entro 48 ore per valutare insieme le opportunità.
          </Text>
        </MotionBox>

        <Box
          as="form"
          onSubmit={handleSubmit}
          p={8}
          borderWidth="1px"
          rounded="2xl"
          shadow="md"
          bg="white"
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isInvalid={!!isInvalid("nome")}>
              <FormLabel>Nome e cognome *</FormLabel>
              <Input
                name="nome"
                placeholder="Es. Mario Rossi"
                value={values.nome}
                onChange={handleChange}
                onBlur={() => setTouched((t) => ({ ...t, nome: true }))}
              />
              <FormErrorMessage>{errors.nome}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!isInvalid("email")}>
              <FormLabel>Email *</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="esempio@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
          </SimpleGrid>

          <FormControl mt={6}>
            <FormLabel>Azienda</FormLabel>
            <Input
              name="azienda"
              placeholder="Nome azienda (facoltativo)"
              value={values.azienda}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={6} isInvalid={!!isInvalid("messaggio")}>
            <FormLabel>Messaggio *</FormLabel>
            <Textarea
              name="messaggio"
              rows={5}
              placeholder="Descrivi brevemente il tipo di collaborazione o partnership desiderata"
              value={values.messaggio}
              onChange={handleChange}
              onBlur={() => setTouched((t) => ({ ...t, messaggio: true }))}
            />
            <FormErrorMessage>{errors.messaggio}</FormErrorMessage>
          </FormControl>

          <Button
            mt={8}
            colorScheme="teal"
            size="lg"
            type="submit"
            isLoading={loading}
            loadingText="Invio..."
            leftIcon={<FaPlusCircle />}
          >
            📩 Invia richiesta
          </Button>
        </Box>
      </Container>

      {/* ====================== CTA FINALE ====================== */}
      <Box bg="gray.900" color="gray.100" py={{ base: 12, md: 16 }} textAlign="center">
        <Container maxW="6xl">
          <Heading size="md" mb={3}>
            Insieme, costruiamo un ecosistema che connette competenze e opportunità.
          </Heading>
          <Text fontSize="lg" mb={6}>
            Marvincla: dove la collaborazione diventa innovazione.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<FaPhoneAlt />}
            onClick={() => (window.location.href = "/contatti")}
          >
            Contattaci ora
          </Button>
        </Container>
      </Box>
    </>
  );
}
