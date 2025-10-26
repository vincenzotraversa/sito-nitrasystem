// src/components/ui/Footer.jsx
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  Divider,
  Image,
  Link,
  VStack,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.200" py={12} mt={10}>
      <Container maxW="7xl">
        <SimpleGrid columns={[1, 2, 4]} spacing={10} mb={8}>
          {/* LOGO + DESCRIZIONE */}
          <VStack align="flex-start" spacing={4}>
            <Image
              src="/Logotrasparentemarvincla.png"
              alt="Logo Marvincla"
              w="160px"
            />
            <Text fontSize="sm" color="gray.400" maxW="260px">
              Marvincla è una startup innovativa che unisce tecnologia, dati e strategia per connettere la filiera agroalimentare.
            </Text>
          </VStack>

          {/* CONTATTI */}
          <Box>
            <Heading size="sm" mb={4} color="white">
              Contatti
            </Heading>
            <Text>Email: <Link href="mailto:marvinclasrl@gmail.com" color="teal.300">marvinclasrl@gmail.com</Link></Text>
            <Text>Tel: +39 111 222 3333</Text>
            <Text>P.IVA: 08760160724</Text>
            <Text mt={2}>Via Giuseppe Semerari, 7<br />70132 Bari (BA), Italia</Text>
          </Box>

          {/* LINK UTILI */}
          <Box>
            <Heading size="sm" mb={4} color="white">
              Link utili
            </Heading>
            <Stack spacing={2}>
              <Link href="/" _hover={{ color: "teal.300" }}>Home</Link>
              <Link href="/chisiamo" _hover={{ color: "teal.300" }}>Chi siamo</Link>
              <Link href="/cosafacciamo" _hover={{ color: "teal.300" }}>Cosa facciamo</Link>
              <Link href="/coldsharing" _hover={{ color: "teal.300" }}>ColdSharing</Link>
              <Link href="/partnercollaborazioni" _hover={{ color: "teal.300" }}>Partner & Collaborazioni</Link>
              <Link href="/contatti" _hover={{ color: "teal.300" }}>Contatti</Link>
            </Stack>
          </Box>

          {/* PARTNER + SOCIAL */}
          <Box>
            <Heading size="sm" mb={4} color="white">
              Partner e collaborazioni
            </Heading>
            <Stack spacing={1} mb={4}>
              <Link
                href="https://www.refromitalia.it/"
                color="teal.300"
                _hover={{ textDecoration: "underline" }}
                isExternal
              >
                Refrom Italia Srl
              </Link>
              {/* ATTENZIONE: modificare tutto sotto e fare una pagina nascosta per nitra system*/}
              <Link
                href="https://www.refromitalia.it/" 
                color="teal.300"
                _hover={{ textDecoration: "underline" }}
                isExternal
              >
                Nitra System Ltd
              </Link>
            </Stack>

          {/* RICONOSCIMENTI */}
          <Box>
            <Heading size="sm" mb={4} color="white">
              Riconoscimenti
            </Heading>
            <Stack spacing={1} mb={4}>
              Finalista Start Cup Puglia 2023 —{" "}
                <Link
                  href="https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce"
                  color="teal.600"
                  isExternal
                  >
                  leggi l’articolo
                </Link>
            </Stack>
          </Box>

            <HStack spacing={3}>
              <IconButton
                as="a"
                href="mailto:marvinclasrl@gmail.com"
                aria-label="Email"
                icon={<FaEnvelope />}
                variant="ghost"
                colorScheme="teal"
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                icon={<FaLinkedinIn />}
                variant="ghost"
                colorScheme="teal"
              />
              <IconButton
                as="a"
                href="https://www.instagram.com"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme="teal"
              />
              <IconButton
                as="a"
                href="https://www.facebook.com"
                aria-label="Facebook"
                icon={<FaFacebookF />}
                variant="ghost"
                colorScheme="teal"
              />
            </HStack>
          </Box>
        </SimpleGrid>

        <Text textAlign="center" fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} <b>Marvincla S.r.l</b> — Tutti i diritti riservati.  
          <br /> Innovazione al servizio della filiera agroalimentare.
          <br /> REA BA - 648160 – C. S. €10.000 i.v.
          <br /><Link href="/cookies" _hover={{ color: "teal.300" }}>Cookies Policy</Link> -  <Link href="/Privacy" _hover={{ color: "teal.300" }}> Privacy</Link>
        </Text>
      </Container>
    </Box>
  );
}
