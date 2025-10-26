// src/pages/Contatti.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  VStack,
  HStack,
  Icon,
  useToast,
  FormErrorMessage,
  Divider,
  Link,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaNewspaper,
  FaAward,
} from "react-icons/fa";

const MotionBox = motion(Box);

// ===== util =====
const getParam = (name) => new URLSearchParams(window.location.search).get(name) || "";

export default function Contatti() {
  const toast = useToast();

  // ======= ADV / Attribution: leggo UTM e GCLID una volta sola =======
  const attribution = useMemo(
    () => ({
      utm_source: getParam("utm_source"),
      utm_medium: getParam("utm_medium"),
      utm_campaign: getParam("utm_campaign"),
      utm_term: getParam("utm_term"),
      utm_content: getParam("utm_content"),
      gclid: getParam("gclid"),
      referrer: document.referrer || "",
      landing_path: window.location.pathname + window.location.search,
    }),
    []
  );

  // ======= SEO senza librerie =======
  useEffect(() => {
    const setMeta = (selector, attr, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("name=")) {
          el.setAttribute("name", selector.match(/name='([^']+)'/)?.[1] || "");
        } else if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property='([^']+)'/)?.[1] || "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel='${rel}']`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    document.title = "Contatti | Marvincla — Parla con noi";
    setMeta(
      "meta[name='description']",
      "content",
      "Parla con Marvincla: strategia, sviluppo software, AI e piattaforme per l’agroalimentare. Compila il form: rispondiamo entro 1–2 giorni lavorativi."
    );
    setMeta("meta[property='og:title']", "content", "Contatti — Marvincla");
    setMeta(
      "meta[property='og:description']",
      "content",
      "Chiedi una consulenza o una demo. Ti aiutiamo a trasformare i processi in risultati misurabili."
    );
    setMeta("meta[property='og:type']", "content", "website");
    setMeta("meta[property='og:image']", "content", "/og-contatti.jpg");
    setLink("canonical", "https://marvincla.it/contatti");

    // JSON-LD ContactPage + Organization (aiuta PR/authoritativeness)
    const ldId = "ld-contactpage";
    let ld = document.getElementById(ldId);
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contatti Marvincla",
      url: "https://marvincla.it/contatti",
      description:
        "Contatta Marvincla: consulenza digitale, Business Intelligence, AI e piattaforme per la filiera agroalimentare.",
      publisher: {
        "@type": "Organization",
        name: "Marvincla",
        url: "https://marvincla.it",
        logo: "https://marvincla.it/logo-marvincla.png",
        sameAs: [
          "https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce",
          "https://www.corrieredelmezzogiorno.it/",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via Giuseppe Semerari, 7",
          addressLocality: "Bari",
          postalCode: "70132",
          addressCountry: "IT",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "info@marvincla.it",
            telephone: "+39 000 000 0000",
            areaServed: "IT",
            availableLanguage: ["it"],
          },
        ],
      },
    });

    // FAQ JSON-LD (consigliato per rich results)
    const faqId = "ld-faq";
    let faq = document.getElementById(faqId);
    if (!faq) {
      faq = document.createElement("script");
      faq.type = "application/ld+json";
      faq.id = faqId;
      document.head.appendChild(faq);
    }
    faq.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "In quanto tempo rispondete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Di norma entro 1–2 giorni lavorativi. Per richieste urgenti indicalo nel form.",
          },
        },
        {
          "@type": "Question",
          name: "Offrite demo o call iniziale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì, possiamo organizzare una call esplorativa gratuita di 30 minuti.",
          },
        },
        {
          "@type": "Question",
          name: "Lavorate solo nell’agroalimentare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La specializzazione è l’agroalimentare, ma collaboriamo anche su progetti data-driven affini.",
          },
        },
      ],
    });
  }, []);

  // ======= Form State =======
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    nome: "",
    email: "",
    azienda: "",
    telefono: "",
    motivo: "",
    budget: "",
    timing: "",
    source: "",
    messaggio: "",
    newsletter: false,
    privacy: false,
    botField: "", // honeypot
  });
  const [touched, setTouched] = useState({});

  const errors = {
    nome: !values.nome ? "Inserisci il tuo nome" : "",
    email: !values.email
      ? "Inserisci la tua email"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
      ? "Email non valida"
      : "",
    motivo: !values.motivo ? "Seleziona un motivo" : "",
    messaggio: values.messaggio.length < 10 ? "Scrivi almeno 10 caratteri" : "",
    privacy: !values.privacy ? "Devi accettare l’informativa privacy" : "",
  };
  const isInvalid = (field) => touched[field] && errors[field];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  // ======= Submit =======
  async function handleSubmit(e) {
    e.preventDefault();

    // honeypot
    if (values.botField) return;

    setTouched({
      nome: true,
      email: true,
      motivo: true,
      messaggio: true,
      privacy: true,
    });

    if (errors.nome || errors.email || errors.motivo || errors.messaggio || errors.privacy) {
      toast({ title: "Controlla i campi richiesti.", status: "warning", duration: 3000, isClosable: true });
      return;
    }

    try {
      setLoading(true);

      // Payload completo per CRM / backend
      const payload = {
        ...values,
        attribution,
        submitted_at: new Date().toISOString(),
        page: window.location.href,
      };

      // TODO: invia al tuo endpoint/EmailJS/Formspark/Netlify ecc.
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });

      console.log("Form inviato:", payload);

      // Tracking: GTM & gtag se presenti
      if (window.dataLayer) {
        window.dataLayer.push({ event: "lead_submit", lead_type: "contact", ...attribution });
      }
      if (window.gtag) {
        window.gtag("event", "generate_lead", { value: 1 });
      }

      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo al più presto.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setValues({
        nome: "",
        email: "",
        azienda: "",
        telefono: "",
        motivo: "",
        budget: "",
        timing: "",
        source: "",
        messaggio: "",
        newsletter: false,
        privacy: false,
        botField: "",
      });
      setTouched({});
    } catch (err) {
      toast({
        title: "Errore durante l’invio.",
        description: "Riprova tra pochi minuti.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <Box bg="teal.700" color="white" py={{ base: 12, md: 14, lg: 16 }}>
        <Container maxW="7xl">
          <Heading size="2xl" mb={4}>Contattaci</Heading>
          <Text fontSize="lg" opacity={0.9} maxW="3xl">
            Raccontaci il tuo progetto: trasformiamo obiettivi e vincoli in un percorso digitale
            concreto e misurabile. Rispondiamo entro 1–2 giorni lavorativi.
          </Text>
        </Container>
      </Box>

      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12, lg: 16 }} alignItems="start">
          {/* ===== FORM ===== */}
          <MotionBox initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Heading size="lg" mb={6}>Richiedi una consulenza</Heading>

            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={5} align="stretch">
                {/* honeypot antispam invisibile */}
                <Input
                  name="botField"
                  value={values.botField}
                  onChange={handleChange}
                  position="absolute"
                  left="-9999px"
                  aria-hidden="true"
                  tabIndex={-1}
                />

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
                    type="email"
                    name="email"
                    placeholder="esempio@email.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <HStack spacing={4} align="start">
                  <FormControl>
                    <FormLabel>Azienda</FormLabel>
                    <Input name="azienda" placeholder="Nome azienda" value={values.azienda} onChange={handleChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Telefono</FormLabel>
                    <Input name="telefono" placeholder="+39 ..." value={values.telefono} onChange={handleChange} />
                  </FormControl>
                </HStack>

                <FormControl isInvalid={!!isInvalid("motivo")}>
                  <FormLabel>Motivo del contatto *</FormLabel>
                  <Select
                    name="motivo"
                    placeholder="Seleziona"
                    value={values.motivo}
                    onChange={handleChange}
                    onBlur={() => setTouched((t) => ({ ...t, motivo: true }))}
                  >
                    <option value="demo-coldsharing">Demo / ColdSharing</option>
                    <option value="sviluppo-software">Sviluppo software / integrazioni</option>
                    <option value="business-intelligence">Dati & Business Intelligence</option>
                    <option value="ai">Intelligenza Artificiale</option>
                    <option value="partnership">Partnership / PR</option>
                    <option value="altro">Altro</option>
                  </Select>
                  <FormErrorMessage>{errors.motivo}</FormErrorMessage>
                </FormControl>

                <HStack spacing={4}>
                  <FormControl>
                    <FormLabel>Budget indicativo</FormLabel>
                    <Select name="budget" placeholder="Seleziona" value={values.budget} onChange={handleChange}>
                      <option value="<10k">Fino a €10k</option>
                      <option value="10-30k">€10k–30k</option>
                      <option value="30-60k">€30k–60k</option>
                      <option value=">60k">Oltre €60k</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tempistiche</FormLabel>
                    <Select name="timing" placeholder="Seleziona" value={values.timing} onChange={handleChange}>
                      <option value="immediato">Immediato</option>
                      <option value="1-3 mesi">1–3 mesi</option>
                      <option value="3-6 mesi">3–6 mesi</option>
                      <option value="da valutare">Da valutare</option>
                    </Select>
                  </FormControl>
                </HStack>

                <FormControl>
                  <FormLabel>Come ci hai trovati?</FormLabel>
                  <Select name="source" placeholder="Seleziona" value={values.source} onChange={handleChange}>
                    <option value="google-adv">Google Ads</option>
                    <option value="linkedin-adv">LinkedIn Ads</option>
                    <option value="ricerca-organica">Ricerca organica</option>
                    <option value="pr-media">PR / Media</option>
                    <option value="passaparola">Passaparola</option>
                    <option value="evento">Evento / Fiera</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={!!isInvalid("messaggio")}>
                  <FormLabel>Messaggio *</FormLabel>
                  <Textarea
                    name="messaggio"
                    rows={6}
                    placeholder="Raccontaci obiettivi, contesto e vincoli principali…"
                    value={values.messaggio}
                    onChange={handleChange}
                    onBlur={() => setTouched((t) => ({ ...t, messaggio: true }))}
                  />
                  <FormErrorMessage>{errors.messaggio}</FormErrorMessage>
                </FormControl>

                <HStack align="start" spacing={6}>
                  <Checkbox name="newsletter" isChecked={values.newsletter} onChange={handleChange}>
                    Voglio ricevere aggiornamenti su progetti, casi studio e eventi.
                  </Checkbox>
                </HStack>

                <FormControl isInvalid={!!isInvalid("privacy")}>
                  <Checkbox name="privacy" isChecked={values.privacy} onChange={handleChange}>
                    Acconsento al trattamento dei dati secondo l’{" "}
                    <Link href="/privacy" color="teal.600" textDecoration="underline">
                      informativa privacy
                    </Link>.
                  </Checkbox>
                  <FormErrorMessage>{errors.privacy}</FormErrorMessage>
                </FormControl>

                {/* Campi nascosti per UTM/GCLID (ADV attribution) */}
                <input type="hidden" name="utm_source" value={attribution.utm_source} />
                <input type="hidden" name="utm_medium" value={attribution.utm_medium} />
                <input type="hidden" name="utm_campaign" value={attribution.utm_campaign} />
                <input type="hidden" name="utm_term" value={attribution.utm_term} />
                <input type="hidden" name="utm_content" value={attribution.utm_content} />
                <input type="hidden" name="gclid" value={attribution.gclid} />
                <input type="hidden" name="referrer" value={attribution.referrer} />
                <input type="hidden" name="landing_path" value={attribution.landing_path} />

                <Button type="submit" colorScheme="teal" rightIcon={<FaArrowRight />} isLoading={loading} alignSelf="flex-start">
                  Invia richiesta
                </Button>
              </VStack>
            </Box>
          </MotionBox>

          {/* ===== INFO / TRUST ===== */}
          <MotionBox initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <Heading size="lg" mb={6}>I nostri contatti</Heading>

            <Card mb={6} variant="outline">
              <CardHeader pb={0}>
                <Heading size="sm" color="teal.700">Marvincla S.R.L. — Polo digitale per l’agroalimentare</Heading>
              </CardHeader>
              <CardBody>
                <VStack align="stretch" spacing={3}>
                  <HStack><Icon as={FaEnvelope} color="teal.500" /><Text><Link href="mailto:info@marvincla.it">info@marvincla.it</Link></Text></HStack>
                  <HStack><Icon as={FaPhoneAlt} color="teal.500" /><Text><Link href="tel:+39000000000">+39 000 000 0000</Link></Text></HStack>
                  <HStack align="start"><Icon as={FaMapMarkerAlt} color="teal.500" mt="2px" /><Text>Via Giuseppe Semerari, 7, 70132 Bari (BA) - Italia</Text></HStack>
                  <HStack><Icon as={FaClock} color="teal.500" /><Text>Lun–Ven 09:00/13:00 – 14:00/18:00</Text></HStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Trust: PR & Riconoscimenti */}
            <Card mb={6} variant="outline">
              <CardHeader pb={0}>
                <Heading size="sm">Rassegna stampa e riconoscimenti</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={3}>
                  <HStack>
                    <Icon as={FaAward} color="teal.500" />
                    <Text>
                      Finalisti <b>Start Cup Puglia 2023</b> —{" "}
                      <Link
                        href="https://www.regione.puglia.it/web/competitivita-e-innovazione/-/start-cup-puglia-2023-il-18-ottobre-la-finale-a-lecce"
                        isExternal
                        rel="noreferrer"
                        color="teal.600"
                        textDecoration="underline"
                      >
                        articolo ufficiale
                      </Link>
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaNewspaper} color="teal.500" />
                    <Text>Uscite su <b>La Repubblica</b> — rassegna stampa 2023</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Tag colorScheme="teal" variant="subtle">PR</Tag>
                    <Tag colorScheme="teal" variant="subtle">Sostenibilità</Tag>
                    <Tag colorScheme="teal" variant="subtle">Logistica del freddo</Tag>
                  </HStack>
                  <Button as={Link} href="/media-kit.pdf" isExternal colorScheme="teal" variant="outline" size="sm">
                    Scarica Media Kit
                  </Button>
                </Stack>
              </CardBody>
            </Card>

            <Box rounded="2xl" overflow="hidden" borderWidth="1px">
              <Box
                as="iframe"
                title="Mappa Marvincla"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12213.969112447854!2d16.8073638!3d41.1373499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347ef4ee9d66a15%3A0x14ac839c9d4e9814!2sVia%20Giuseppe%20Semerari%2C%207%2C%2070132%20Bari%20BA!5e0!3m2!1sit!2sit!4v1698062399000!5m2!1sit!2sit"
                w="100%"
                h="300px"
                border={0}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </MotionBox>
        </SimpleGrid>

        <Divider my={14} />

        {/* ===== FAQ (aiuta SEO + riduce frizione) ===== */}
        <MotionBox initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Heading size="lg" textAlign="center" mb={6}>Domande frequenti</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box borderWidth="1px" rounded="xl" p={5}>
              <Heading size="sm" mb={2}>In quanto tempo rispondete?</Heading>
              <Text color="gray.700">Di solito entro 1–2 giorni lavorativi. Se è urgente, segnalalo nel messaggio.</Text>
            </Box>
            <Box borderWidth="1px" rounded="xl" p={5}>
              <Heading size="sm" mb={2}>Possiamo fare una call di 30 minuti?</Heading>
              <Text color="gray.700">Sì, organizziamo una call esplorativa gratuita per capire obiettivi e contesto.</Text>
            </Box>
            <Box borderWidth="1px" rounded="xl" p={5}>
              <Heading size="sm" mb={2}>Lavorate solo nell’agroalimentare?</Heading>
              <Text color="gray.700">È la nostra specializzazione, ma valutiamo progetti data-driven anche in settori contigui.</Text>
            </Box>
          </SimpleGrid>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          textAlign="center"
          mt={14}
        >
          <Heading mb={3}>Pronti a parlarne?</Heading>
          <Text color="gray.600" mb={6}>Più dettagli ci dai, più rapidamente potremo aiutarti.</Text>
          <Button colorScheme="teal" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Torna al form
          </Button>
        </MotionBox>
      </Container>
    </>
  );
}
