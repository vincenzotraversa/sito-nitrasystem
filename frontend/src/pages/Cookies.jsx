import {
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  List,
  ListItem,
  Box,
  Alert,
  AlertIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  HStack,
  Link
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Cookies() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language?.startsWith("it") ? "it-IT" : "en-GB";
  const today = new Date().toLocaleDateString(locale);
  const gaPolicyUrl = `https://policies.google.com/technologies/cookies?hl=${
    i18n.language?.startsWith("it") ? "it" : "en"
  }`;

  return (
    <Container maxW="6xl" py={[10, 16]}>
      <VStack align="start" spacing={6}>
        <Heading size="lg" color="nitra.primary">
          {t("pages.cookies.hero.title")}
        </Heading>

        <Text fontSize="md" color="gray.700">
          {t("pages.cookies.intro")}
        </Text>

        <Alert status="info" variant="subtle" borderRadius="lg" bg="nitra.bg">
          <AlertIcon color="nitra.primary" />
          {t("pages.cookies.notice")}
        </Alert>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        {/* Tipologie */}
        <Heading size="md" color="nitra.primary">
          {t("pages.cookies.types.title")}
        </Heading>

        <VStack align="start" spacing={4} fontSize="md" color="gray.700">
          <Box p={4} bg="nitra.bg" borderRadius="lg" borderWidth="1px" borderColor="rgba(14,74,103,0.18)">
            <HStack spacing={3} mb={1}>
              <Badge bg="nitra.primary" color="white">{t("pages.cookies.types.badges.essential")}</Badge>
              <Text as="b">{t("pages.cookies.types.blocks.technical.title")}</Text>
            </HStack>
            <Text>{t("pages.cookies.types.blocks.technical.text")}</Text>
          </Box>

          <Box p={4} bg="nitra.bg" borderRadius="lg" borderWidth="1px" borderColor="rgba(14,74,103,0.18)">
            <HStack spacing={3} mb={1}>
              <Badge bg="nitra.accent" color="white">{t("pages.cookies.types.badges.functional")}</Badge>
              <Text as="b">{t("pages.cookies.types.blocks.functional.title")}</Text>
            </HStack>
            <Text>{t("pages.cookies.types.blocks.functional.text")}</Text>
          </Box>

          <Box p={4} bg="nitra.bg" borderRadius="lg" borderWidth="1px" borderColor="rgba(14,74,103,0.18)">
            <HStack spacing={3} mb={1}>
              <Badge bg="nitra.warn" color="white">{t("pages.cookies.types.badges.third")}</Badge>
              <Text as="b">{t("pages.cookies.types.blocks.third.title")}</Text>
            </HStack>
            <Text>{t("pages.cookies.types.blocks.third.text")}</Text>
          </Box>
        </VStack>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        {/* Approfondimenti */}
        <Heading size="md" color="nitra.primary">
          {t("pages.cookies.deep.title")}
        </Heading>

        <Accordion allowToggle borderWidth="1px" borderRadius="lg" borderColor="rgba(14,74,103,0.18)">
          <AccordionItem>
            <h3>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                  {t("pages.cookies.deep.ga.title")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} fontSize="md" color="gray.700">
              <Text mb={3}>{t("pages.cookies.deep.ga.p1")}</Text>
              <Text mb={3}>{t("pages.cookies.deep.ga.p2")}</Text>
              <Text>{t("pages.cookies.deep.ga.p3")}</Text>
              <Text mt={3} fontSize="sm" color="gray.600">
                {t("pages.cookies.deep.ga.more")}{" "}
                <Link href={gaPolicyUrl} isExternal color="nitra.accent" textDecoration="underline">
                  policies.google.com
                </Link>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                  {t("pages.cookies.deep.social.title")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} fontSize="md" color="gray.700">
              <Text mb={3}>{t("pages.cookies.deep.social.p1")}</Text>
              <Text>{t("pages.cookies.deep.social.p2")}</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        {/* Gestione preferenze */}
        <Heading size="md" color="nitra.primary">
          {t("pages.cookies.manage.title")}
        </Heading>
        <Text fontSize="md" color="gray.700">
          {t("pages.cookies.manage.lead")}
        </Text>
        <List spacing={1} fontSize="sm" color="nitra.primary">
          <ListItem>• <Link href="https://support.google.com/chrome/answer/95647" isExternal>Chrome</Link></ListItem>
          <ListItem>• <Link href="https://support.apple.com/guide/safari/sfri11471/mac" isExternal>Safari</Link></ListItem>
          <ListItem>• <Link href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox" isExternal>Firefox</Link></ListItem>
          <ListItem>• <Link href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" isExternal>Edge</Link></ListItem>
        </List>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        {/* Contatti + update */}
        <Text fontSize="sm" color="gray.600">
          {t("pages.cookies.contact")}{" "}
          <Link href="mailto:nitrasystem@gmail.com" color="nitra.accent">
            nitrasystem@gmail.com
          </Link>
        </Text>
        <Text fontSize="sm" color="gray.500">
          {t("pages.cookies.updatedAt", { date: today })}
        </Text>
      </VStack>
    </Container>
  );
}
