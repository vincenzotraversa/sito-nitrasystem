import React, { useEffect } from "react";
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
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

export default function Cosafacciamo() {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "pages.what" });

  useEffect(() => {
    document.title = t("seoTitle");
  }, [i18n.language, t]);

  const areas = t("areas.items", { returnObjects: true });
  const techBullets = t("technology.points", { returnObjects: true });

  return (
    <>
      {/* ================== HERO ================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/impianti-nitra-hero.jpg"
          alt={t("images.heroAlt")}
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
          color="white"
        >
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading size={["xl", "2xl", "3xl"]} mb={3}>
              {t("hero.title")}
            </Heading>
            <Text fontSize={["lg", "xl"]} maxW="4xl" mx="auto">
              {t("hero.subtitle")}
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ================== SEZIONE DESCRITTIVA ================== */}
      <Container maxW="7xl" py={[12, 16]}>
        <Stack spacing={8}>
          <Heading color="nitra.primary">{t("section1.title")}</Heading>
          <Text fontSize="lg" color="gray.700">
            {t("section1.body")}
          </Text>

          <Divider borderColor="rgba(14,74,103,0.18)" />

          <Heading size="md" color="nitra.primary">
            {t("areas.title")}
          </Heading>

          <SimpleGrid columns={[1, 2, 4]} spacing={6}>
            {areas.map((a, i) => (
              <Box key={i}>
                <Badge bg={i % 2 === 0 ? "nitra.primary" : "nitra.accent"} color="white" mb={2}>
                  {String(i + 1).padStart(2, "0")}
                </Badge>
                <Heading size="sm">{a.title}</Heading>
                <Text color="gray.700" mt={2}>{a.body}</Text>
              </Box>
            ))}
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
                alt={t("images.secondaryAlt")}
                rounded="lg"
                shadow="lg"
              />
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Heading color="nitra.primary">{t("technology.title")}</Heading>
              <Text fontSize="lg" color="gray.700" mt={4}>
                {t("technology.body")}
              </Text>
              <List mt={4} spacing={2} color="gray.700">
                {techBullets.map((p, i) => (
                  <ListItem key={i}>• {p}</ListItem>
                ))}
              </List>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ================== CTA ================== */}
      <Box py={[14, 20]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3} color="nitra.primary">
            {t("cta.title")}
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={6}>
            {t("cta.desc")}
          </Text>
          <Button
            as={RouterLink}
            to="/contatti"
            bg="nitra.primary"
            color="white"
            fontWeight="semibold"
            px={8}
            py={6}
            rounded="lg"
            _hover={{ bg: "nitra.accent" }}
            transition="all 0.3s"
          >
            {t("cta.button")}
          </Button>
        </Container>
      </Box>
    </>
  );
}
