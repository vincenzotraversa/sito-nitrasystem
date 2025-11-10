// src/pages/Contatti.jsx
import React, { useEffect, useMemo, useState } from "react";
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
import { useTranslation } from "react-i18next";

/* --------- small helpers for SEO tags --------- */
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
function setProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property='${property}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel='${rel}']`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
function setJSONLD(id, json) {
  if (!json) return;
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
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "it";

  /* ====== NEW: stato per settore e oggetto ====== */
  const [sectorValue, setSectorValue] = useState("");   // value (es. "agroalimentare")
  const sectorOptions = useMemo(
    () => t("pages.contatti.form.fields.sector.options", { returnObjects: true }),
    [t]
  );
  // label leggibile dall'option scelta
  const sectorLabel = useMemo(() => {
    const found = sectorOptions.find(o => o.value === sectorValue);
    return found ? found.label : "";
  }, [sectorValue, sectorOptions]);

  // Oggetto localizzato
  const subjectText = useMemo(() => {
    if (!sectorLabel) return "";
    return lang === "it"
      ? `Richiesta informazioni – Settore ${sectorLabel}`
      : `Information request – Sector ${sectorLabel}`;
  }, [lang, sectorLabel]);

  useEffect(() => {
    const baseUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://www.nitrasystem.example";
    const pageUrl = `${baseUrl}/${lang === "it" ? "contatti" : "contacts"}`;

    const title = t("pages.contatti.seoTitle");
    const description = t("pages.contatti.seoDescription");

    document.title = title;
    setMeta("description", description);
    setMeta("robots", "index,follow");
    setMeta("keywords", t("pages.contatti.seoKeywords"));
    setLink("canonical", pageUrl);

    const altIt = `${baseUrl}/contatti`;
    const altEn = `${baseUrl}/contacts`;
    setLink("alternate", altIt);
    setLink("alternate", altEn);

    setProperty("og:type", "website");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", pageUrl);
    setProperty("og:image", `${baseUrl}/contattaci.webp`);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${baseUrl}/contattaci.webp`);

    setJSONLD("ld-contactpage", {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: title,
      url: pageUrl,
      description,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: baseUrl },
          { "@type": "ListItem", position: 2, name: t("pages.contatti.hero.title"), item: pageUrl }
        ]
      },
      about: {
        "@type": "Organization",
        name: "Nitra System Ltd",
        url: baseUrl,
        email: "mailto:nitrasystem@gmail.com",
        telephone: ["+359894482526", "+393356179483"],
        logo: `${baseUrl}/logonitra.png`,
        address: [
          { "@type": "PostalAddress", streetAddress: "Road Baba Tonca 5A", addressLocality: "Sliven", postalCode: "8800", addressCountry: "BG" },
          { "@type": "PostalAddress", streetAddress: "Via Emanuele Melisurgo 5", addressLocality: "Bari", postalCode: "70132", addressCountry: "IT" }
        ],
        contactPoint: [
          { "@type": "ContactPoint", telephone: "+359894482526", contactType: "customer support", areaServed: ["BG", "IT", "EU"], availableLanguage: ["it", "en", "bg"] }
        ]
      }
    });

    setJSONLD("ld-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("home"), item: baseUrl },
        { "@type": "ListItem", position: 2, name: t("pages.contatti.hero.title"), item: pageUrl }
      ]
    });

    setJSONLD("ld-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: t("pages.contatti.faq.q1"), acceptedAnswer: { "@type": "Answer", text: t("pages.contatti.faq.a1") } },
        { "@type": "Question", name: t("pages.contatti.faq.q2"), acceptedAnswer: { "@type": "Answer", text: t("pages.contatti.faq.a2") } },
        { "@type": "Question", name: t("pages.contatti.faq.q3"), acceptedAnswer: { "@type": "Answer", text: t("pages.contatti.faq.a3") } }
      ]
    });
  }, [lang, t]);

  // analytics helper
  const track = (event, payload = {}) => {
    if (window?.dataLayer) window.dataLayer.push({ event, ...payload });
  };

  /* ====== NEW: gestione submit: sector richiesto + subject ====== */
  const handleSubmit = (e) => {
    // settore obbligatorio
    if (!sectorValue) {
      e.preventDefault();
      alert(
        lang === "it"
          ? "Seleziona il settore aziendale per continuare."
          : "Please select your business sector to continue."
      );
      return;
    }
    track("lead_submit", { form: "contact", sector: sectorValue });
    // nessun preventDefault: lasciamo postare il form
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
        aria-label={t("pages.contatti.hero.aria")}
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
              {t("pages.contatti.hero.title")}
            </Heading>
            {t("pages.contatti.hero.subtitle") && (
              <Text fontSize={["md", "lg"]} opacity={0.95} maxW="3xl">
                {t("pages.contatti.hero.subtitle")}
              </Text>
            )}
          </VStack>
        </Box>
      </Box>

      {/* INFO + DATI AZIENDALI */}
      <Container maxW="7xl" py={[12, 16]}>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          <Box>
            <Heading color="#0E4A67" mb={4}>
              {t("pages.contatti.info.title")}
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              {t("pages.contatti.info.p1")}
            </Text>
            <Text fontSize="lg" color="gray.700">
              {t("pages.contatti.info.p2")}
            </Text>
          </Box>

          <Box>
            <Heading color="#0E4A67" mb={4}>
              {t("pages.contatti.company.title")}
            </Heading>
            <Stack spacing={2} fontSize="md" color="gray.700">
              <Text>
                <b>{t("pages.contatti.company.hq")}</b>{" "}
                {t("pages.contatti.blocks.hq.address")}
              </Text>

              <Text mt={4}>
                <b>{t("pages.contatti.company.tel")}</b>{" "}
                {t("pages.contatti.blocks.info.phone")}
              </Text>

              <Text>
                <b>{t("pages.contatti.company.email")}</b>{" "}
                <ChakraLink
                  href={`mailto:${t("pages.contatti.blocks.info.email")}`}
                  color="nitra.accent"
                  onClick={() => track("contact_click", { method: "email" })}
                >
                  {t("pages.contatti.blocks.info.email")}
                </ChakraLink>
              </Text>

              <Text>
                <b>{t("pages.contatti.company.vat")}</b>{" "}
                {t("pages.contatti.company.vatValue")}
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* SEDI OPERATIVE + MAPPE */}
      <Box bg="white" py={[8, 12]}>
        <Container maxW="7xl">
          <Box border="1px solid" borderColor="gray.200" rounded="xl" p={[5, 8]} boxShadow="sm">
            <Heading size="lg" color="#0E4A67" mb={1}>
              {t("pages.contatti.offices.title")}
            </Heading>
            <Text color="#0E4A67" mb={6}>
              {t("pages.contatti.offices.subtitle")}
            </Text>

            <SimpleGrid columns={[1, 2]} spacing={[6, 8]}>
              {/* Bulgaria */}
              <Box>
                <Heading size="md" color="#0E4A67" mb={2}>
                  {t("pages.contatti.offices.bg.title")}
                </Heading>
                <Text color="gray.700" mb={3}>
                  {t("pages.contatti.blocks.hq.address")}
                </Text>
                <AspectRatio ratio={16 / 9} rounded="lg" overflow="hidden" border="1px solid" borderColor="gray.200">
                  <iframe
                    title={t("pages.contatti.offices.bg.mapTitle")}
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
                  {t("pages.contatti.offices.openMaps")} →
                </ChakraLink>
              </Box>

              {/* Italia */}
              <Box>
                <Heading size="md" color="#0E4A67" mb={2}>
                  {t("pages.contatti.offices.it.title")}
                </Heading>
                <Text color="gray.700" mb={3}>
                  {t("pages.contatti.blocks.it.address")}
                </Text>
                <AspectRatio ratio={16 / 9} rounded="lg" overflow="hidden" border="1px solid" borderColor="gray.200">
                  <iframe
                    title={t("pages.contatti.offices.it.mapTitle")}
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
                  {t("pages.contatti.offices.openMaps")} →
                </ChakraLink>
              </Box>
            </SimpleGrid>

            <Divider my={6} />
            <Text fontSize="sm" color="gray.500">
              {t("pages.contatti.offices.disclaimer")}
            </Text>
          </Box>
        </Container>
      </Box>

      {/* FORM DI CONTATTO */}
      <Box bg="nitra.bg" py={[10, 16]}>
        <Container maxW="6xl">
          <Heading textAlign="center" color="nitra.primary" mb={6}>
            {t("pages.contatti.form.title")}
          </Heading>

          <Box
            as="form"
            method="post"
            action="/api/contact"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/* honeypot */}
            <input
              type="text"
              name="_hp"
              tabIndex="-1"
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px" }}
              aria-hidden="true"
            />

            {/* NEW: oggetto dinamico (hidden) */}
            <input type="hidden" name="oggetto" value={subjectText} />

            <SimpleGrid columns={[1, 2]} spacing={6} mb={6}>
              <label style={{ width: "100%" }}>
                <span className="sr-only">{t("pages.contatti.form.fields.name.label")}</span>
                <input
                  type="text"
                  name="nome"
                  placeholder={t("pages.contatti.form.fields.name.placeholder")}
                  required
                  aria-required="true"
                  style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4 }}
                />
              </label>

              <label style={{ width: "100%" }}>
                <span className="sr-only">{t("pages.contatti.form.fields.company.label")}</span>
                <input
                  type="text"
                  name="azienda"
                  placeholder={t("pages.contatti.form.fields.company.placeholder")}
                  style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4 }}
                />
              </label>

              <label style={{ width: "100%" }}>
                <span className="sr-only">{t("pages.contatti.form.fields.email.label")}</span>
                <input
                  type="email"
                  name="email"
                  placeholder={t("pages.contatti.form.fields.email.placeholder")}
                  required
                  aria-required="true"
                  style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4 }}
                />
              </label>

              <label style={{ width: "100%" }}>
                <span className="sr-only">{t("pages.contatti.form.fields.phone.label")}</span>
                <input
                  type="tel"
                  name="telefono"
                  placeholder={t("pages.contatti.form.fields.phone.placeholder")}
                  style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4 }}
                />
              </label>
            </SimpleGrid>

            <SimpleGrid columns={[1, 2]} spacing={6} mb={6}>
              {/* ===== NEW: Settore OBBLIGATORIO + onChange ===== */}
              <label style={{ width: "100%" }}>
                <span className="sr-only">{t("pages.contatti.form.fields.sector.label")}</span>
                <select
                  name="settore"
                  defaultValue=""
                  required
                  aria-required="true"
                  onChange={(e) => setSectorValue(e.target.value)}
                  style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4, color: "#333" }}
                >
                  <option value="" disabled>
                    {t("pages.contatti.form.fields.sector.placeholder")}
                  </option>
                  {sectorOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label style={{ width: "100%" }}>
                <span className="sr-only">{t("pages.contatti.form.fields.source.label")}</span>
                <select
                  name="origine"
                  defaultValue=""
                  required
                  aria-required="true"
                  style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4, color: "#333" }}
                >
                  <option value="" disabled>
                    {t("pages.contatti.form.fields.source.placeholder")}
                  </option>
                  {t("pages.contatti.form.fields.source.options", { returnObjects: true }).map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            </SimpleGrid>

            <label style={{ width: "100%", display: "block", marginBottom: 24 }}>
              <span className="sr-only">{t("pages.contatti.form.fields.callback.label")}</span>
              <select
                name="richiamo"
                defaultValue=""
                style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4, color: "#333" }}
              >
                <option value="" disabled>
                  {t("pages.contatti.form.fields.callback.placeholder")}
                </option>
                {t("pages.contatti.form.fields.callback.options", { returnObjects: true }).map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ width: "100%" }}>
              <span className="sr-only">{t("pages.contatti.form.fields.message.label")}</span>
              <textarea
                name="messaggio"
                placeholder={t("pages.contatti.form.fields.message.placeholder")}
                required
                aria-required="true"
                style={{ width: "100%", padding: 12, border: "1px solid #ccc", borderRadius: 4, minHeight: 120 }}
              />
            </label>

            <Box textAlign="center" mt={6}>
              <Button type="submit" variant="solid" size="lg" onClick={() => track("cta_click", { where: "form_submit" })}>
                {t("pages.contatti.form.submit")}
              </Button>
            </Box>

            {/* Facoltativo: mostra l’oggetto calcolato (solo debug/QA) */}
            {/* <Box mt={4} textAlign="center" color="gray.600" fontSize="sm">
              {subjectText && (lang === "it" ? "Oggetto:" : "Subject:")} {subjectText}
            </Box> */}
          </Box>
        </Container>
      </Box>

      {/* FOOT CTA */}
      <Box py={[8, 12]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3} color="nitra.primary">
            {t("pages.contatti.footCta.title")}
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={4}>
            {t("pages.contatti.footCta.desc")}
          </Text>
          <Button
            as={RouterLink}
            to="/azienda"
            variant="outline"
            size="lg"
            onClick={() => track("cta_click", { where: "to_azienda" })}
          >
            {t("pages.contatti.footCta.button")}
          </Button>
        </Container>
      </Box>
    </>
  );
}
