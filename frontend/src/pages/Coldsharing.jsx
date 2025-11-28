// src/pages/Coldsharing.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  Stack,
  SimpleGrid,
  Icon,
  Badge,
  chakra,
  Image,
  keyframes,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { useTranslation } from "react-i18next";

/* Motion wrappers */
const MBox = motion(Box);
const MHeading = motion(Heading);
const MText = motion(Text);

/* Brand color (fallback) */
const ORANGE = "nitra.accent";
const ORANGE_FALLBACK = "#E76F51";

/* ============================ PAGE ============================ */
export default function Coldsharing() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "it";

  useEffect(() => {
    document.title = t("pages.coldsharing.seoTitle");
  }, [lang, t]);

  return (
    <>
      <HeroSequence />
      <ColdsharingStory />
      <IdeaSection />
      <ReasonsShowcase />
      <ColdRoomsFillAnimation />
      <CTA />
    </>
  );
}

/* ============================ HERO (CSS keyframes) ============================ */
function HeroSequence() {
  const { t } = useTranslation();

  // keyframes
  const fadeSlide = keyframes`
    0%   { opacity: 0; transform: translateY(16px) scale(.98); }
    20%  { opacity: 1; transform: translateY(0)    scale(1); }
    60%  { opacity: 1; transform: translateY(0)    scale(1); }
    100% { opacity: 0; transform: translateY(-16px) scale(.98); }
  `;
  const fadeHold = keyframes`
    0%   { opacity: 0; transform: translateY(12px) scale(.98); }
    100% { opacity: 1; transform: translateY(0)    scale(1); }
  `;
  const appear = keyframes`
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  `;

  // tempi
  const T1 = 1.6;
  const T2 = 1.6;
  const GAP = 0.1;
  const DELAY2 = T1 + GAP;
  const DELAY3 = T1 + GAP + T2;
  const CTA_DELAY = DELAY3 + 0.6;

  return (
    <Box position="relative" minH="100vh" bg="black" overflow="hidden">
      <Container maxW="7xl" h="100vh" position="relative" px={{ base: 6, md: 8 }}>
        <Box
          position="absolute"
          inset={0}
          display="grid"
          placeItems="center"
          textAlign="center"
          color="white"
          pointerEvents="none"
        >
          {/* 1) Collaborazione */}
          <Heading
            position="absolute"
            left="20%"
            top="30%"
            transform="translate(-50%, -50%)"
            lineHeight="1.05"
            fontWeight={800}
            fontSize={["7.2vw", "6.4vw", "5.2vw"]}
            textShadow="0 12px 36px rgba(0,0,0,.55)"
            sx={{ animation: `${fadeSlide} ${T1}s ease-out 0s both` }}
          >
            {t("pages.coldsharing.hero.step1.line1")}
            <br />
            {t("pages.coldsharing.hero.step1.line2")}
          </Heading>

          {/* 2) Nasce */}
          <Heading
            position="absolute"
            left="40%"
            top="35%"
            transform="translate(-50%, -50%)"
            lineHeight="1.05"
            fontWeight={800}
            fontSize={["9vw", "7.2vw", "6vw"]}
            textShadow="0 12px 36px rgba(0,0,0,.55)"
            sx={{ animation: `${fadeSlide} ${T2}s ease-out ${DELAY2}s both` }}
          >
            {t("pages.coldsharing.hero.step2")}
          </Heading>

          {/* 3) COLDSHARING */}
          <Heading
            position="absolute"
            left={{ base: "10%", md: "10%" }}
            top={{ base: "38%", md: "31%" }}
            transform="translate(-50%, -50%)"
            lineHeight="1.0"
            fontWeight={900}
            letterSpacing="-0.01em"
            fontSize={{ base: "11vw", md: "13vw", lg: "10.5vw" }}
            textShadow="0 14px 40px rgba(0,0,0,.6)"
            sx={{ animation: `${fadeHold} .65s ease-out ${DELAY3}s both` }}
          >
            {t("pages.coldsharing.hero.logo")}
          </Heading>

          {/* Sottotitolo + CTA */}
          <Text
            mt={{ base: 28, md: 32 }}
            color="whiteAlpha.900"
            fontSize={{ base: "md", md: "xl" }}
            pointerEvents="auto"
            sx={{ animation: `${appear} .45s ease-out ${CTA_DELAY}s both` }}
          >
            {t("pages.coldsharing.hero.subtitle")}
          </Text>

          <Box
            mt={6}
            pointerEvents="auto"
            sx={{ animation: `${appear} .45s ease-out ${CTA_DELAY + 0.1}s both` }}
          >
            <Button
              as="a"
              href="https://cellefrigo.net"
              target="_blank"
              rel="noreferrer"
              size="lg"
              rightIcon={<FaArrowRight />}
              bg={ORANGE}
              _hover={{ bg: ORANGE, boxShadow: "0 12px 28px rgba(176,65,37,.35)" }}
              sx={{ "--chakra-colors-nitra-accent": ORANGE_FALLBACK }}
            >
              {t("pages.coldsharing.hero.cta")}
            </Button>
          </Box>

          <Text
            mt={8}
            color="whiteAlpha.700"
            sx={{ animation: `${appear} .45s ease-out ${CTA_DELAY + 0.2}s both` }}
          >
            {t("pages.coldsharing.hero.scroll")}
          </Text>
        </Box>
      </Container>

      {/* separatore */}
      <Box position="absolute" bottom="-1px" left={0} right={0}>
        <Box as="svg" viewBox="0 0 1440 80" w="100%" h={{ base: 12, md: 16 }}>
          <path d="M0,32 C240,64 480,64 720,32 C960,0 1200,0 1440,32 L1440,80 L0,80 Z" fill="#fff" />
        </Box>
      </Box>
    </Box>
  );
}

/* ====================== STORY + PROBLEMI (uniti) ====================== */
function ColdsharingStory() {
  const { t } = useTranslation();
  const top3 = t("pages.coldsharing.story.top3", { returnObjects: true });
  const bottom2 = t("pages.coldsharing.story.bottom2", { returnObjects: true });

  return (
    <Box bg="white" py={{ base: 14, md: 22 }} position="relative" overflow="hidden">
      {/* glow */}
      <Box position="absolute" top="5%" left="10%" w="900px" h="900px" rounded="full" bg="rgba(0,160,255,0.08)" filter="blur(180px)" />
      <Box position="absolute" bottom="-10%" right="-10%" w="1000px" h="1000px" rounded="full" bg="rgba(255,140,80,0.08)" filter="blur(200px)" />

      <Container maxW="7xl" position="relative">
        <MHeading
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="800"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("pages.coldsharing.story.title")}
        </MHeading>

        <MText
          mt={4}
          maxW="3xl"
          mx="auto"
          textAlign="center"
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("pages.coldsharing.story.lead")}
        </MText>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }} mt={{ base: 8, md: 12 }}>
          {top3.map((x, i) => (
            <PrettyProblemCard key={i} emoji={x.emoji} title={x.title} desc={x.desc} />
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6 }} maxW="5xl" mx="auto" mt={{ base: 6, md: 8 }}>
          {bottom2.map((x, i) => (
            <PrettyProblemCard key={i} emoji={x.emoji} title={x.title} desc={x.desc} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function PrettyProblemCard({ emoji, title, desc }) {
  return (
    <MBox
      bg="white"
      border="1px solid"
      borderColor="blackAlpha.100"
      rounded="xl"
      p={{ base: 5, md: 6 }}
      shadow="lg"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45 }}
      _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
    >
      <HStack align="start" spacing={3} mb={1}>
        <Box fontSize="xl">{emoji}</Box>
        <Heading size="md">{title}</Heading>
      </HStack>
      <Text color="gray.600">{desc}</Text>
    </MBox>
  );
}

/* ============================= IDEA ============================= */
function IdeaSection() {
  const { t } = useTranslation();

  return (
    <Box position="relative" bg="black" color="white" py={{ base: 16, md: 24 }} overflow="hidden">
      <Box position="absolute" top="-20%" left="-10%" w="60vw" h="60vw" rounded="full" bg="rgba(14,74,103,0.25)" filter="blur(90px)" />
      <Box position="absolute" bottom="-30%" right="-15%" w="70vw" h="70vw" rounded="full" bg="rgba(176,65,37,0.25)" filter="blur(110px)" />

      <Container maxW="7xl" position="relative">
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 10, md: 12 }} alignItems="center">
          <Box gridColumn={{ md: "1 / span 2" }} display="grid" placeItems="center">
            <LampSVG />
          </Box>

          <Box gridColumn={{ md: "3 / span 3" }}>
            <Heading as="h2" lineHeight={1.05} mb={{ base: 2, md: 3 }} textAlign="left" letterSpacing="-0.02em">
              <chakra.span
                display="block"
                fontWeight="900"
                fontSize={{ base: "8vw", md: "5.2vw", lg: "4.2vw" }}
                color="white"
                textShadow="0 10px 30px rgba(0,0,0,.35)"
              >
                {t("pages.ccold", { defaultValue: t("pages.coldsharing.idea.brand") })}
              </chakra.span>

              <chakra.span
                display="inline"
                fontWeight="900"
                bgGradient="linear(to-r, nitra.accent, #FF8A5C)"
                bgClip="text"
                fontSize={{ base: "5.6vw", md: "2.6vw", lg: "2.2vw" }}
              >
                {t("pages.coldsharing.idea.marketplace")}
              </chakra.span>{" "}
              <chakra.span display="inline" fontWeight="800" color="white" fontSize={{ base: "5.6vw", md: "2.6vw", lg: "2.2vw" }}>
                {t("pages.coldsharing.idea.pitch")}
              </chakra.span>
            </Heading>

            <Box w={{ base: "140px", md: "180px" }} h="3px" bg="nitra.accent" rounded="full" mb={{ base: 4, md: 5 }} opacity={0.9} />

            <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} maxW="42rem" opacity={0.92}>
              {t("pages.coldsharing.idea.text")}
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function LampSVG() {
  return (
    <Box as="svg" viewBox="0 0 160 200" w={{ base: "180px", md: "240px" }} style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id="bulb" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#FFE066" />
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="80" cy="72" r="64" fill="#FFD24A" opacity="0.25" filter="url(#softGlow)" />
      <path
        d="M80 16c-30 0-54 22-54 50 0 16 8 30 20 39 7 5 10 12 10 18h48c0-6 3-13 10-18 12-9 20-23 20-39 0-28-24-50-54-50z"
        fill="url(#bulb)"
        stroke="#FFE066"
        strokeWidth="2"
      />
      <rect x="60" y="124" width="40" height="14" rx="5" fill="#6C7A86" />
      <rect x="56" y="138" width="48" height="12" rx="5" fill="#6C7A86" />
      <rect x="60" y="150" width="40" height="10" rx="5" fill="#6C7A86" />
    </Box>
  );
}

/* ===================== VANTAGGI / SHOWCASE ===================== */
function ReasonsShowcase() {
  const { t } = useTranslation();

  const cards = t("pages.coldsharing.reasons.items", { returnObjects: true });
  const previews = t("pages.coldsharing.reasons.previews", { returnObjects: true });

  return (
    <Box bgGradient="linear(to-b, gray.50, white)" py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 16 }} alignItems="center">
          {/* Colonna sinistra: elenco motivi */}
          <Box>
            <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={6} lineHeight="1.2">
              {t("pages.coldsharing.reasons.title")}
            </Heading>
            <Stack spacing={4}>
              {cards.map((c, idx) => (
                <ReasonItem key={idx} emoji={c.emoji} title={c.title} desc={c.desc} />
              ))}
            </Stack>
            <HStack mt={8} spacing={3}>
              <Button
                as="a"
                href="https://cellefrigo.net"
                target="_blank"
                size="lg"
                rightIcon={<FaArrowRight />}
                bg={ORANGE}
                _hover={{ bg: ORANGE, boxShadow: "0 12px 28px rgba(176,65,37,.35)" }}
                sx={{ "--chakra-colors-nitra-accent": ORANGE_FALLBACK }}
              >
                {t("pages.coldsharing.reasons.cta")}
              </Button>
              <Text color="gray.600">{t("pages.coldsharing.reasons.note")}</Text>
            </HStack>
          </Box>

          {/* Colonna destra: mockup carte sovrapposte con immagine */}
          <Box position="relative" minH={{ base: "360px", md: "480px" }}>
            {previews.map((p, idx) => (
              <PreviewCard
                key={idx}
                z={3 - idx}
                top={p.top}
                left={p.left}
                w={p.w}
                title={p.title}
                subtitle={p.subtitle}
                img={p.img}
              />
            ))}
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function ReasonItem({ emoji, title, desc }) {
  return (
    <HStack
      align="start"
      spacing={3}
      bg="white"
      border="1px solid"
      borderColor="blackAlpha.100"
      rounded="xl"
      px={4}
      py={3}
      shadow="lg"
    >
      <Box fontSize="xl">{emoji}</Box>
      <Box>
        <Text fontWeight="700">{title}</Text>
        <Text color="gray.600">{desc}</Text>
      </Box>
    </HStack>
  );
}

/* ======= CARDS CON IMMAGINE (mockup ColdSharing) ======= */
function PreviewCard({ z = 1, top, left, w, title, subtitle, img }) {
  const { t } = useTranslation();
  return (
    <MBox
      position="absolute"
      top={top}
      left={left}
      w={w}
      zIndex={z}
      rounded="2xl"
      bg="white"
      border="1px solid #eaeaea"
      shadow="xl"
      p={4}
      display="flex"
      flexDirection="column"
      gap={3}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Badge colorScheme="blue" variant="subtle" fontSize="0.7rem" px={2} py={0.5} width="fit-content">
        🔍 {t("pages.coldsharing.reasons.badge")}
      </Badge>

      <Box>
        <Heading size="sm">{title}</Heading>
        <Text fontSize="sm" color="gray.600">
          {subtitle}
        </Text>
      </Box>

      {/* Area immagine */}
      <Box h="140px" rounded="lg" overflow="hidden" bg="gray.100" border="1px dashed #ddd">
        <Image src={img} alt={title} w="100%" h="100%" objectFit="cover" />
      </Box>
    </MBox>
  );
}

/* ================== ANIMAZIONE BARRE SEQUENZIALI ================== */
function ColdRoomsFillAnimation() {
  const { t } = useTranslation();
  const c1 = useAnimation();
  const c2 = useAnimation();
  const c3 = useAnimation();

  const D1 = 2.2, D2 = 2.0, D3 = 2.0, PAUSA = 1.0;

  useEffect(() => {
    let alive = true;
    (async function run() {
      while (alive) {
        await Promise.all([
          c1.start({ width: "0%", transition: { duration: 0 } }),
          c2.start({ width: "0%", transition: { duration: 0 } }),
          c3.start({ width: "0%", transition: { duration: 0 } }),
        ]);
        await c1.start({ width: "100%", transition: { duration: D1, ease: "easeInOut" } });
        await c2.start({ width: "100%", transition: { duration: D2, ease: "easeInOut" } });
        await c3.start({ width: "100%", transition: { duration: D3, ease: "easeInOut" } });
        await new Promise(r => setTimeout(r, PAUSA * 1000));
      }
    })();
    return () => { alive = false; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box bg="white" py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <Heading textAlign="center" size="lg" mb={8}>{t("pages.coldsharing.how.title")}</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <BarCard title={t("pages.coldsharing.how.steps.0.title")} desc={t("pages.coldsharing.how.steps.0.desc")} variant="blue" ctrl={c1}/>
          <BarCard title={t("pages.coldsharing.how.steps.1.title")} desc={t("pages.coldsharing.how.steps.1.desc")} variant="blend" ctrl={c2}/>
          <BarCard title={t("pages.coldsharing.how.steps.2.title")} desc={t("pages.coldsharing.how.steps.2.desc")} variant="orange" ctrl={c3}/>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function BarCard({ title, desc, variant, ctrl }) {
  // ✅ Colori brand
  const BLUE = "#0B394F";
  const ORANGE = "#B04125";

  // ✅ Sfumatura blu → arancione
  const fillBg =
    variant === "blue"
      ? BLUE
      : variant === "orange"
      ? ORANGE
      : `linear-gradient(90deg, ${BLUE} 0%, ${ORANGE} 100%)`;

  return (
    <MBox
      p={5}
      rounded="xl"
      border="1px solid"
      borderColor="blackAlpha.100"
      shadow="lg"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <HStack justify="space-between" mb={3}>
        <Heading size="md">{title}</Heading>
        <Icon as={FiServer} color="gray.500" />
      </HStack>

      {/* Track + progress fill */}
      <Box h="12px" bg="gray.100" rounded="full" overflow="hidden">
        <MBox
          h="100%"
          rounded="full"
          initial={{ width: "0%" }}
          animate={ctrl}
          style={{
            background: fillBg,
          }}
        />
      </Box>

      <Text mt={3} color="gray.600">
        {desc}
      </Text>
    </MBox>
  );
}

/* =============================== CTA =============================== */
function CTA() {
  const { t } = useTranslation();
  return (
    <Box bg="nitra.primary" color="white" textAlign="center" py={{ base: 14, md: 20 }}>
      <Container maxW="6xl">
        <Heading mb={3}>{t("pages.coldsharing.cta.title")}</Heading>
        <Text mb={6} color="whiteAlpha.900">{t("pages.coldsharing.cta.subtitle")}</Text>
        <HStack spacing={4} justify="center" wrap="wrap">
          <Button
            as="a"
            href="https://cellefrigo.net"
            target="_blank"
            rel="noreferrer"
            size="lg"
            bg={ORANGE}
            _hover={{ bg: ORANGE, boxShadow: "0 12px 28px rgba(176,65,37,.35)" }}
            sx={{ "--chakra-colors-nitra-accent": ORANGE_FALLBACK }}
          >
            {t("pages.coldsharing.cta.primary")}
          </Button>
          <Button
            as="a"
            href="contatti"
            size="lg"
            variant="outline"
            color="white"
            borderColor="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            {t("pages.coldsharing.cta.secondary")}
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
