// src/components/Footer.jsx
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  HStack,
  Link,
  Icon,
  Divider,
  Button,
  Flex,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.resolvedLanguage || "it";
  const currentYear = new Date().getFullYear();

  // ---- routing helpers
  const routes = {
    home: "",
    azienda: "azienda",
    cosa: "cosafacciamo",
    cold: "coldsharing",
    partner: "partnercollaborazioni",
    privacy: "privacy",
    cookies: "cookies",
    contatti: "contatti",
  };
  const make = (key) => `/${routes[key]}`.replace(/\/$/, "");

  // ---- switch lingua
  const switchLang = () => i18n.changeLanguage(lang.startsWith("it") ? "en" : "it");

  // ---- JSON-LD Organization (SEO)
  useEffect(() => {
    const id = "ld-org-nitra";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nitra System Ltd",
      email: "nitrasystem@gmail.com",
      url: typeof window !== "undefined" ? window.location.origin : "",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Road Baba Tonca n. 5A",
        addressLocality: "Sliven",
        addressCountry: "BG",
        postalCode: "8800",
      },
      telephone: ["+359 894 482 526", "+39 335 617 9483"],
      sameAs: [],
    });
  }, []);

  return (
    <Box as="footer" bg="nitra.dark" color="white" mt={16} pt={10} pb={6}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 8, md: 10, lg: 12 }}>
          {/* Col 1 - Intro breve */}
          <Stack spacing={3} pr={{ lg: 8 }}>
            <Heading as="h2" size="md">
              {t("brand")}
            </Heading>
            <Text fontSize="sm" opacity={0.9}>
              {t("footer.aboutText")}
            </Text>
          </Stack>

          {/* Col 2 - Link utili */}
          <Stack spacing={2}>
            <Heading as="h3" size="sm" color="nitra.accent">
              {t("footer.usefulLinks")}
            </Heading>
            {[
              { key: "home", label: t("nav.home") },
              { key: "azienda", label: t("nav.company") },
              { key: "cosa", label: t("nav.whatWeDo") },
              { key: "cold", label: t("nav.coldsharing") },
              { key: "partner", label: t("nav.partners") },
              { key: "contatti", label: t("nav.contacts") },
            ].map((it) => (
              <Link
                key={it.key}
                as={RouterLink}
                to={make(it.key)}
                fontSize="sm"
                _hover={{ color: "nitra.accent" }}
              >
                {it.label}
              </Link>
            ))}
          </Stack>

          {/* Col 3 - Legale */}
          <Stack spacing={2}>
            <Heading as="h3" size="sm" color="nitra.accent">
              {t("footer.legal")}
            </Heading>
            <Link
              as={RouterLink}
              to={`/privacy`}
              fontSize="sm"
              _hover={{ color: "nitra.accent" }}
            >
              {t("footer.privacy")}
            </Link>
            <Link
              as={RouterLink}
              to={`/cookies`}
              fontSize="sm"
              _hover={{ color: "nitra.accent" }}
            >
              {t("footer.cookies")}
            </Link>
          </Stack>

          {/* Col 4 - Contatti */}
          <Stack spacing={3}>
            <Heading as="h3" size="sm" color="nitra.accent">
              {t("footer.contacts")}
            </Heading>

            <HStack align="start" spacing={3}>
              <Icon as={FaMapMarkerAlt} boxSize={4} mt={1} color="nitra.accent" />
              <Link
                href="https://maps.google.com/?q=Road+Baba+Tonca+5A,+Sliven,+Bulgaria"
                isExternal
                fontSize="sm"
                _hover={{ color: "nitra.accent" }}
                aria-label={t("footer.openMaps")}
              >
                {t("footer.addressBG.line1")}
                <br />
                {t("footer.addressBG.line2")}
              </Link>
            </HStack>

            <HStack align="start" spacing={3}>
              <Icon as={FaMapMarkerAlt} boxSize={4} mt={1} color="nitra.accent" />
              <Link
                href="https://www.google.com/maps?q=Via+Emanuele+Melisurgo+5+Bari+Italy&output=embed"
                isExternal
                fontSize="sm"
                _hover={{ color: "nitra.accent" }}
                aria-label={t("footer.openMaps")}
              >
                {t("footer.addressIT.line1")}
                <br />
                {t("footer.addressIT.line2")}
              </Link>
            </HStack>

            <HStack spacing={3} align="start">
              <Icon as={FaPhone} boxSize={4} mt={1} color="nitra.accent" />
              <Stack spacing={1} fontSize="sm">
                <Link href="tel:+359894482526" _hover={{ color: "nitra.accent" }}>
                  +359 894 482 526
                  <br />
                  +39 335 617 9483
                </Link>
              </Stack>
            </HStack>

            <HStack spacing={3}>
              <Icon as={FaEnvelope} boxSize={4} color="nitra.accent" />
              <Link href="mailto:nitrasystem@gmail.com" fontSize="sm" _hover={{ color: "nitra.accent" }}>
                nitrasystem@gmail.com
              </Link>
            </HStack>
          </Stack>
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.300" my={6} />

        {/* Bottom bar */}
        <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }} gap={3}>
          <Text fontSize="xs" opacity={0.8}>
            © {currentYear} Nitra System Ltd · P.IVA BG 2046612801 — {t("footer.rights")}
          </Text>
          <Text fontSize="xs" opacity={0.8}>
            {t("footer.madeBy")}
          </Text>

          {/* Switch lingua */}
          <HStack spacing={2}>
            <VisuallyHidden>{t("footer.languageSwitch")}</VisuallyHidden>
            <Button
              size="xs"
              variant="outline"
              borderColor="nitra.accent"
              color="white"
              _hover={{ bg: "nitra.accent", color: "white" }}
              onClick={switchLang}
            >
              {t(`footer.langButton.${lang.startsWith("it") ? "en" : "it"}`)}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
