// src/components/SectorTemplate.jsx
import React, { useEffect } from "react";
import { Box, Container, Heading, Text, SimpleGrid, List, ListItem, ListIcon, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function SectorTemplate({ baseKey, img, seoFallback, titleFallback, introFallback }) {
  const { t } = useTranslation();

  // Helper i18n sicuri
  const arr = (key) => {
    const v = t(key, { returnObjects: true, defaultValue: [] });
    return Array.isArray(v) ? v : [];
  };
  const txt = (key, fallback = "") => {
    const v = t(key);
    return typeof v === "string" ? v : fallback;
  };

  useEffect(() => {
    document.title = txt(`${baseKey}.seoTitle`, seoFallback || "Nitra System");
  }, [t, baseKey, seoFallback]);

  return (
    <Box bg="white">
      <Box position="relative" h={{ base: "30vh", md: "40vh" }}>
        <Image src={img || "/sfondohome.png"} alt="" objectFit="cover" w="100%" h="100%" />
      </Box>

      <Container maxW="6xl" py={{ base: 10, md: 14 }} color="gray.800">
        <Heading size="lg" mb={4}>{txt(`${baseKey}.title`, titleFallback || "")}</Heading>
        <Text mb={6}>{txt(`${baseKey}.intro`, introFallback || "")}</Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading size="md" mb={3}>{txt(`${baseKey}.sol.title`, "Soluzioni")}</Heading>
            <List spacing={3}>
              {arr(`${baseKey}.sol.points`).map((p, i) => (
                <ListItem key={i}><ListIcon as={FaCheckCircle} color="nitra.accent" />{p}</ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Heading size="md" mb={3}>{txt(`${baseKey}.benefits.title`, "Benefici")}</Heading>
            <List spacing={3}>
              {arr(`${baseKey}.benefits.points`).map((p, i) => (
                <ListItem key={i}><ListIcon as={FaCheckCircle} color="nitra.accent" />{p}</ListItem>
              ))}
            </List>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
