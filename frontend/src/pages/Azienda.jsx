// src/pages/Azienda.jsx
import React, { useEffect } from "react";
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
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

// helpers SEO semplici
function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name='${name}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Azienda() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "it";

  useEffect(() => {
    document.title = t("pages.azienda.seoTitle");
    setMeta("description", t("pages.azienda.seoDescription"));
    setMeta("keywords", t("pages.azienda.seoKeywords"));
  }, [lang, t]);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        h={{ base: "40vh", md: "55vh" }}
        backgroundImage="url('/ponte.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        mt={{ base: "72px", md: "80px" }}
        role="img"
        aria-label={t("pages.azienda.hero.aria")}
      >
        <Box
          position="absolute"
          inset="0"
          bg="rgba(0,0,0,0.45)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          textAlign="center"
          px={4}
        >
          <MotionBox
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading fontSize={["2xl", "3xl", "4xl"]}>
              {t("pages.azienda.hero.title")}
            </Heading>
            <Text mt={4} fontSize={["md", "lg"]} maxW="3xl" mx="auto" color="whiteAlpha.900">
              {t("pages.azienda.hero.subtitle")}
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ================= CHI SIAMO ================= */}
      <Container maxW="7xl" py={{ base: 10, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Image
              src="/logonitra.png"
              alt={t("pages.azienda.about.imageAlt")}
              rounded="lg"
              shadow="md"
              w="100%"
              h="auto"
            />
          </Box>
          <Box>
            <Heading color="nitra.primary" mb={4}>
              {t("pages.azienda.about.title")}
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={6}>
              {t("pages.azienda.about.p1")}
            </Text>
            <Text fontSize="lg" color="gray.700">
              {t("pages.azienda.about.p2")}
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* ================= SOLUZIONI CUSTOM ================= */}
      <Box
        position="relative"
        bgGradient="linear(to-r, nitra.primary 0%, #0E4A67 50%, #B04125 100%)"
        color="white"
        py={{ base: 12, md: 16 }}
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset="0"
          opacity={0.08}
          bgImage="radial-gradient(circle at 20% 50%, white 1px, transparent 1px)"
          bgSize="24px 24px"
        />

        <Container maxW="7xl" position="relative">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h2" size="lg" mb={4} textTransform="uppercase" letterSpacing="wide">
                {t("pages.azienda.custom.title")}
              </Heading>

              <Text mb={6} color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                {t("pages.azienda.custom.body")}
              </Text>

              <List spacing={3} fontSize="md">
                {t("pages.azienda.custom.bullets", { returnObjects: true }).map((item, idx) => (
                  <ListItem key={idx}>
                    <ListIcon as={FaCheckCircle} color="nitra.accent" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* elemento “ponte” visivo */}
            <Box
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              justifyContent="center"
              h="100%"
              position="relative"
            >
              <Box
                w="100%"
                h="220px"
                bgGradient="linear(to-r, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1))"
                borderRadius="full"
                transform="rotate(-3deg)"
                boxShadow="0 0 40px rgba(0,0,0,0.2)"
              />
              <Text
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="whiteAlpha.700"
                fontSize="xl"
                fontWeight="semibold"
                letterSpacing="wider"
                textAlign="center"
                userSelect="none"
              >
                {t("pages.azienda.custom.ribbon")}
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box bg="gray.50" py={{ base: 10, md: 16 }} textAlign="center">
        <Heading size="md" color="nitra.primary" mb={3}>
          {t("pages.azienda.cta.title")}
        </Heading>
        <Text color="gray.700" mb={6}>
          {t("pages.azienda.cta.desc")}
        </Text>
        <Button as={RouterLink} to="../contatti" colorScheme="teal" size="lg">
          {t("pages.azienda.cta.button")}
        </Button>
      </Box>
    </>
  );
}
