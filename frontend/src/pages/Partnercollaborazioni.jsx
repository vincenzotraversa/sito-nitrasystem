// src/pages/Partnercollaborazioni.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Stack,
  Button,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight, FaHandshake, FaLightbulb, FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

export default function Partnercollaborazioni() {
  // ✅ Tutte le chiavi vivono sotto pages.partners
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "pages.partners" });

  useEffect(() => {
    document.title = t("seoTitle");
  }, [i18n.language, t]);

  return (
    <>
      {/* HERO */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/partner2.png"
          alt={t("images.heroAlt")}
          w="100%"
          h={["60vh", "70vh", "80vh"]}
          objectFit="cover"
          filter="brightness(0.6)"
        />
        <Box
          position="absolute"
          inset="0"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          px={[6, 8]}
          color="white"
        >
          <Heading fontSize={["2xl", "4xl", "5xl"]} mb={4} lineHeight="1.2" textShadow="0 2px 10px rgba(0,0,0,0.4)">
            {t("hero.title")}
          </Heading>
          <Text fontSize={["lg", "xl"]} maxW="3xl" color="whiteAlpha.900" mb={6}>
            {t("hero.subtitle")}
          </Text>
          <Button as={RouterLink} to="/contatti" colorScheme="teal" size="lg" rightIcon={<FaArrowRight />}>
            {t("hero.cta")}
          </Button>
        </Box>
      </Box>

      {/* VALORI / CARDS */}
      <Container maxW="6xl" py={[12, 16]}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
          <Box>
            <Heading size="lg" color="nitra.primary" mb={4}>
              {t("values.title")}
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              {t("values.body1")}
            </Text>
            <Text fontSize="lg" color="gray.700">
              {t("values.body2")}
            </Text>
          </Box>

          <VStack align="stretch" spacing={5}>
            {[
              { icon: FaHandshake, tTitle: "cards.longTerm.title", tBody: "cards.longTerm.body" },
              { icon: FaLightbulb, tTitle: "cards.innovation.title", tBody: "cards.innovation.body" },
              { icon: FaHeart, tTitle: "cards.values.title", tBody: "cards.values.body" },
            ].map((c, i) => (
              <MotionBox
                key={i}
                p={6}
                borderWidth="1px"
                borderRadius="2xl"
                bg="white"
                whileHover={{ y: -3 }}
                transition="0.2s"
              >
                <Stack direction="row" align="center" spacing={4}>
                  <Icon as={c.icon} boxSize={8} color="nitra.accent" />
                  <Heading size="sm" color="nitra.primary">
                    {t(c.tTitle)}
                  </Heading>
                </Stack>
                <Text mt={2} color="gray.700">
                  {t(c.tBody)}
                </Text>
              </MotionBox>
            ))}
          </VStack>
        </SimpleGrid>
      </Container>

      {/* CASO DI SUCCESSO */}
      <Box bg="nitra.bg" py={[14, 20]}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Image src="/unione user e owner.png" alt={t("case.alt")} rounded="2xl" shadow="md" />
            <Box>
              <Heading size="lg" color="nitra.primary" mb={4}>
                {t("case.title")}
              </Heading>
              <Text fontSize="lg" color="gray.700" mb={6}>
                {t("case.body1")}
              </Text>
              <Text fontSize="lg" color="gray.700" mb={6}>
                {t("case.body2")}
              </Text>
              <Button as={RouterLink} to="/coldsharing" colorScheme="teal" size="lg" rightIcon={<FaArrowRight />}>
                {t("case.cta")}
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA PARTNER */}
      <Box py={[14, 20]}>
        <Container maxW="6xl" textAlign="center">
          <Heading mb={4} color="nitra.primary">
            {t("cta.title")}
          </Heading>
          <Text color="gray.700" maxW="4xl" mx="auto" mb={6}>
            {t("cta.desc")}
          </Text>
          <Button as={RouterLink} to="/contatti" colorScheme="teal" size="lg" rightIcon={<FaArrowRight />}>
            {t("cta.button")}
          </Button>
        </Container>
      </Box>

      {/* CHIUSURA ISPIRAZIONALE */}
      <Box bg="nitra.primary" color="white" textAlign="center" py={[10, 16]}>
        <Container maxW="6xl">
          <Heading fontSize={["2xl", "3xl"]} mb={4}>
            {t("footer.title")}
          </Heading>
          <Text color="whiteAlpha.900" maxW="3xl" mx="auto" mb={6}>
            {t("footer.desc")}
          </Text>
        </Container>
      </Box>
    </>
  );
}
