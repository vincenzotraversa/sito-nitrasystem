// src/pages/Contatti.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Stack,
  Link as ChakraLink,
  Button,
  AspectRatio,
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function setMeta(name, content) {
  let el = document.querySelector(`meta[name='${name}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setProperty(property, content) {
  let el = document.querySelector(`meta[property='${property}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel='${rel}']`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJSONLD(id, json) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

export default function Contatti() {
  useEffect(() => {
    /* ---------- SEO BASICS ---------- */
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://www.nitrasystem.example";
    const pageUrl = `${baseUrl}/contatti`;
    const title = "Contatti | Nitra System Ltd – Impianti frigoriferi industriali";
    const description =
      "Contatta Nitra System: consulenza e progettazione di impianti frigoriferi industriali e commerciali. Sedi a Sliven (BG) e Bari (IT). Risposta entro 24 ore.";

    document.title = title;
    setMeta("description", description);
    setMeta("keywords", "contatti, impianti frigoriferi industriali, refrigerazione, celle frigo, chiller, Bulgaria, Italia, Bari, Sliven, consulenza, manutenzione");
    setMeta("robots", "index,follow");
    setLink("canonical", pageUrl);

    /* ---------- OPEN GRAPH / TWITTER ---------- */
    setProperty("og:type", "website");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", pageUrl);
    setProperty("og:image", `${baseUrl}/contattaci.webp`);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${baseUrl}/contattaci.webp`);

    /* ---------- JSON-LD: ContactPage + Organization + Breadcrumb ---------- */
    setJSONLD(
      "ld-contactpage",
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contatti - Nitra System Ltd",
        "url": pageUrl,
        "description": description,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
            { "@type": "ListItem", "position": 2, "name": "Contatti", "item": pageUrl }
          ]
        },
        "about": {
          "@type": "Organization",
          "name": "Nitra System Ltd",
          "url": baseUrl,
          "email": "mailto:nitrasystem@gmail.com",
          "telephone": ["+359894482526", "+393356179483"],
          "logo": `${baseUrl}/logonitra.png`,
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Road Baba Tonca 5A",
              "addressLocality": "Sliven",
              "postalCode": "8800",
              "addressCountry": "BG"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "Via Emanuele Melisurgo 5",
              "addressLocality": "Bari",
              "postalCode": "70132",
              "addressCountry": "IT"
            }
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+359894482526",
              "contactType": "customer support",
              "areaServed": ["BG","IT","EU"],
              "availableLanguage": ["it","en","bg"]
            }
          ]
        }
      }
    );

    setJSONLD(
      "ld-breadcrumb",
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Contatti", "item": pageUrl }
        ]
      }
    );

    /* ---------- FACOLTATIVO: FAQ per rich snippet ---------- */
    setJSONLD(
      "ld-faq",
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "In quanto tempo rispondete?",
            "acceptedAnswer": { "@type": "Answer", "text": "Generalmente entro 24 ore lavorative." }
          },
          {
            "@type": "Question",
            "name": "In quali paesi operate?",
            "acceptedAnswer": { "@type": "Answer", "text": "Operiamo in Italia, Bulgaria e in tutta l’Unione Europea." }
          },
          {
            "@type": "Question",
            "name": "Quali settori servite?",
            "acceptedAnswer": { "@type": "Answer", "text": "Agroalimentare, farmaceutico e manifatturiero, con impianti su misura." }
          }
        ]
      }
    );
  }, []);

  /* ---------- Analytics helper opzionale ---------- */
  const track = (event, payload = {}) => {
    if (window.dataLayer) {
      window.dataLayer.push({ event, ...payload });
    }
  };

  return (
    <>
      {/* HERO */}
      <Box
        position="relative"
        h={["40vh", "50vh", "60vh"]}
        backgroundImage="url('/contattaci.webp')"
        backgroundSize="cover"
        backgroundPosition="center"
        mt={{ base: "72px", md: "80px" }}
        role="img"
        aria-label="Contatta Nitra System per impianti frigoriferi industriali"
      >
        <Box
          position="absolute"
          inset="0"
          bg="rgba(14,74,103,0.55)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          color="white"
          px={4}
        >
          <VStack spacing={4}>
            <Heading as="h1" size={["xl", "2xl", "3xl"]}>
              Raccontaci il tuo progetto!
            </Heading>
          </VStack>
        </Box>
      </Box>

      {/* INFORMAZIONI CONTATTO */}
      <Container maxW="7xl" py={[12, 16]}>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          {/* Sinistra: testo motivazionale */}
          <Box>
            <Heading color="#0E4A67" mb={4}>
              Siamo qui per te
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              Ogni progetto ha una storia, ogni operazione un obiettivo: garantire performance, efficienza e continuità per il tuo impianto frigorifero. Contattarci significa trovare un partner che ascolta, progetta e realizza con esperienza internazionale.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Ti risponderemo entro 24 ore e ti guideremo passo dopo passo — dalla richiesta iniziale fino al collaudo e alla manutenzione.
            </Text>
          </Box>

          {/* Destra: dati contatto */}
          <Box>
            <Heading color="#0E4A67" mb={4}>
              Dati azienda
            </Heading>
            <Stack spacing={2} fontSize="md" color="gray.700">
              <Text><b>Sede centrale:</b> 8800 Sliven – Bulgaria, Road Baba Tonca n. 5A</Text>
              <Text mt={4}><b>Tel.:</b> 00359 894 482 526 / (+39) 335 617 9483</Text>
              <Text>
                <b>Email:</b>{" "}
                <ChakraLink
                  href="mailto:nitrasystem@gmail.com"
                  color="nitra.accent"
                  onClick={() => track("contact_click", { method: "email" })}
                >
                  nitrasystem@gmail.com
                </ChakraLink>
              </Text>
              <Text><b>P.IVA:</b> BG 2046612801</Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* SEDI OPERATIVE: MAPPE */}
      <Box bg="white" py={[8, 12]}>
        <Container maxW="7xl">
          <Box
            border="1px solid"
            borderColor="gray.200"
            rounded="xl"
            p={[5, 8]}
            boxShadow="sm"
          >
            <Heading size="lg" color="#0E4A67" mb={1}>
              Sedi operative
            </Heading>
            <Text color="#0E4A67" mb={6}>
              Le nostre due sedi operative con mappa interattiva.
            </Text>

            <SimpleGrid columns={[1, 2]} spacing={[6, 8]}>
              {/* Bulgaria */}
              <Box>
                <Heading size="md" color="#0E4A67" mb={2}>
                  Bulgaria
                </Heading>
                <Text color="gray.700" mb={3}>
                  8800 Sliven – Road Baba Tonca n. 5A
                </Text>
                <AspectRatio ratio={16 / 9} rounded="lg" overflow="hidden" border="1px solid" borderColor="gray.200">
                  <iframe
                    title="Mappa Sede Operativa Bulgaria"
                    src="https://www.google.com/maps?q=8800+Sliven+Road+Baba+Tonca+5A&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </AspectRatio>
                <ChakraLink
                  mt={3}
                  display="inline-block"
                  href="https://www.google.com/maps/search/?api=1&query=8800+Sliven+Road+Baba+Tonca+5A"
                  isExternal
                  color="nitra.accent"
                  onClick={() => track("map_click", { location: "BG" })}
                >
                  Apri su Google Maps →
                </ChakraLink>
              </Box>

              {/* Italia */}
              <Box>
                <Heading size="md" color="#0E4A67" mb={2}>
                  Italia
                </Heading>
                <Text color="gray.700" mb={3}>
                  70132 Bari – Via Emanuele Melisurgo n. 5
                </Text>
                <AspectRatio ratio={16 / 9} rounded="lg" overflow="hidden" border="1px solid" borderColor="gray.200">
                  <iframe
                    title="Mappa Sede Operativa Italia"
                    src="https://www.google.com/maps?q=Via+Emanuele+Melisurgo+5+Bari+Italy&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </AspectRatio>
                <ChakraLink
                  mt={3}
                  display="inline-block"
                  href="https://www.google.com/maps/search/?api=1&query=Via+Emanuele+Melisurgo+5+Bari+Italy"
                  isExternal
                  color="nitra.accent"
                  onClick={() => track("map_click", { location: "IT" })}
                >
                  Apri su Google Maps →
                </ChakraLink>
              </Box>
            </SimpleGrid>

            <Divider my={6} />
            <Text fontSize="sm" color="gray.500">
              Le mappe sono a scopo informativo; per appuntamenti contattaci via email o telefono.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* FORM DI CONTATTO (accessibile + antispam + analytics) */}
      <Box bg="nitra.bg" py={[10, 16]}>
        <Container maxW="6xl">
          <Heading textAlign="center" color="nitra.primary" mb={6}>
            Richiedi una consulenza gratuita
          </Heading>

          <Box
            as="form"
            method="post"
            action="/api/contact"
            autoComplete="off"
            onSubmit={() => track("lead_submit", { form: "contact" })}
          >
            {/* honeypot antispam */}
            <input
              type="text"
              name="_hp"
              tabIndex="-1"
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px" }}
              aria-hidden="true"
            />

            <SimpleGrid columns={[1, 2]} spacing={6} mb={6}>
              {/* Nome */}
              <label style={{ width: "100%" }}>
                <span className="sr-only">Nome</span>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome*"
                  required
                  aria-required="true"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </label>

              {/* Azienda */}
              <label style={{ width: "100%" }}>
                <span className="sr-only">Azienda</span>
                <input
                  type="text"
                  name="azienda"
                  placeholder="Azienda"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </label>

              {/* Email */}
              <label style={{ width: "100%" }}>
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  aria-required="true"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </label>

              {/* Telefono */}
              <label style={{ width: "100%" }}>
                <span className="sr-only">Telefono</span>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Telefono"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </label>
            </SimpleGrid>

            {/* Settore e Origine */}
            <SimpleGrid columns={[1, 2]} spacing={6} mb={6}>
              {/* Settore */}
              <label style={{ width: "100%" }}>
                <span className="sr-only">Settore aziendale</span>
                <select
                  name="settore"
                  defaultValue=""
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    color: "#333",
                  }}
                >
                  <option value="" disabled>
                    Seleziona il tuo settore
                  </option>
                  <option value="agroalimentare">Agroalimentare</option>
                  <option value="farmaceutico">Farmaceutico</option>
                  <option value="manifatturiero">Manifatturiero</option>
                  <option value="logistica">Logistica / Distribuzione</option>
                  <option value="altro">Altro</option>
                </select>
              </label>

              {/* Come ci hai trovato */}
              <label style={{ width: "100%" }}>
                <span className="sr-only">Come ci hai trovato</span>
                <select
                  name="origine"
                  defaultValue=""
                  required
                  aria-required="true"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    color: "#333",
                  }}
                >
                  <option value="" disabled>
                    Come ci hai trovato?*
                  </option>
                  <option value="google">Ricerca su Google</option>
                  <option value="social">Social network (LinkedIn, Facebook, Instagram)</option>
                  <option value="passaparola">Passaparola o conoscenza personale</option>
                  <option value="fiera">Evento o fiera di settore</option>
                  <option value="altro">Altro</option>
                </select>
              </label>
            </SimpleGrid>

            {/* Quando vuoi essere ricontattato */}
            <label style={{ width: "100%", display: "block", marginBottom: "24px" }}>
              <span className="sr-only">Quando vuoi essere ricontattato</span>
              <select
                name="richiamo"
                defaultValue=""
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  color: "#333",
                }}
              >
                <option value="" disabled>
                  Quando preferisci essere ricontattato?
                </option>
                <option value="mattina">Mattina</option>
                <option value="pomeriggio">Pomeriggio</option>
                <option value="sera">Sera</option>
                <option value="qualsiasi">Qualsiasi momento</option>
              </select>
            </label>

            {/* Messaggio */}
            <label style={{ width: "100%" }}>
              <span className="sr-only">Messaggio</span>
              <textarea
                name="messaggio"
                placeholder="Descrivi il tuo progetto"
                required
                aria-required="true"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minHeight: "120px",
                }}
              />
            </label>

            <Box textAlign="center" mt={6}>
              <Button
                type="submit"
                variant="solid"
                size="lg"
                onClick={() => track("cta_click", { where: "form_submit" })}
              >
                Invia richiesta →
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>


      {/* FOOT CTA */}
      <Box py={[8, 12]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3} color="nitra.primary">
            Contattaci senza impegno
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={4}>
            Parliamo del tuo prossimo impianto frigorifero: insieme realizziamo soluzioni efficienti, sostenibili e su misura.
          </Text>
          <Button
            as={RouterLink}
            to="/azienda"
            variant="outline"
            size="lg"
            onClick={() => track("cta_click", { where: "to_azienda" })}
          >
            Scopri chi siamo →
          </Button>
        </Container>
      </Box>
    </>
  );
}
