// src/App.jsx
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import "./i18n"; // << inizializza i18n una volta

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp-button";

import Home from "./pages/Home";
import Coldsharing from "./pages/Coldsharing";
import Contatti from "./pages/Contatti";
import Azienda from "./pages/Azienda";
import Partnercollaborazioni from "./pages/Partnercollaborazioni";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/Privacy";
import LavorazioneCarni from "./pages/LavorazioneCarni";
import Panificazione from "./pages/Panificazione";
import LattieroCaseario from "./pages/LattieroCaseario";
import LavorazioneIttico from "./pages/LavorazioneIttico.jsx";
import FruttaVerdura from "./pages/FruttaVerdura.jsx";
import ProdottiTransformati from "./pages/ProdottiTrasformati.jsx";
import LogisticaRefrigerata from "./pages/LogisticaRefrigerata.jsx";
import LogisticaGDO from "./pages/LogisticaGDO.jsx";
import Hydrocooler from "./pages/Hydrocooler.jsx";
import VacuumCooler from "./pages/VacuumCooler.jsx";
import Sanificatore from "./pages/Sanificatore.jsx";
import ProduttoreGhiaccio from "./pages/ProduttoreGhiaccio.jsx";

/* Tema */
const theme = extendTheme({
  colors: {
    nitra: {
      primary: "#0E4A67",
      accent: "#B04125",
      bg: "#F3F7FA",
      dark: "#0B394F",
    },
  },
  components: {
    Button: {
      baseStyle: { rounded: "xl", fontWeight: "semibold" },
      variants: {
        accent: {
          bg: "nitra.accent",
          color: "white",
          _hover: { bg: "#C85B38" },
          _active: { bg: "#9F3A22" },
        },
        outline: {
          borderColor: "nitra.accent",
          color: "nitra.accent",
          _hover: { bg: "nitra.accent", color: "white" },
        },
        ghost: {
          color: "nitra.accent",
          _hover: { bg: "rgba(176,65,37,0.08)" },
        },
      },
      defaultProps: { variant: "accent", size: "md" },
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/** Mantiene <html lang/dir> in sync con i18n */
function HtmlLangDir() {
  const { i18n } = useTranslation();
  React.useEffect(() => {
    const update = () => {
      const lng = (i18n.resolvedLanguage || "it").slice(0, 2);
      document.documentElement.setAttribute("lang", lng);
      document.documentElement.setAttribute("dir", i18n.dir());
      localStorage.setItem("i18nextLng", lng);
    };
    update();
    i18n.on("languageChanged", update);
    return () => {
      i18n.off("languageChanged", update);
    };
  }, [i18n]);
  return null;
}

function StripLegacyLangPrefix() {
  const { pathname } = useLocation();
  if (/^\/(it|en)(?=\/|$)/.test(pathname)) {
    const clean = pathname.replace(/^\/(it|en)(?=\/|$)/, "") || "/";
    return <Navigate to={clean} replace />;
  }
  return null;
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <HtmlLangDir />
      <StripLegacyLangPrefix />
      <Navbar />
      <ScrollToTop />

      <Box as="main" w="100%" px={{ base: 0, md: 0 }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="coldsharing" element={<Coldsharing />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="azienda" element={<Azienda />} />
          <Route
            path="partnercollaborazioni"
            element={<Partnercollaborazioni />}
          />

          {/* Agroalimentare */}
          <Route
            path="settori/agroalimentare/lavorazione-carni"
            element={<LavorazioneCarni />}
          />
          <Route
            path="settori/agroalimentare/panificazione"
            element={<Panificazione />}
          />
          <Route
            path="settori/agroalimentare/lattiero-caseari"
            element={<LattieroCaseario />}
          />
          <Route
            path="settori/agroalimentare/ittico"
            element={<LavorazioneIttico />}
          />
          <Route
            path="settori/agroalimentare/ortofrutta"
            element={<FruttaVerdura />}
          />
          <Route
            path="settori/agroalimentare/trasformati"
            element={<ProdottiTransformati />}
          />

          {/* Industriale */}
          <Route
            path="settori/manifatturiero/logistica-refrigerata"
            element={<LogisticaRefrigerata />}
          />
          <Route
            path="settori/manifatturiero/logistica-gdo"
            element={<LogisticaGDO />}
          />
          <Route
            path="settori/manifatturiero/hydrocooler"
            element={<Hydrocooler />}
          />
          <Route
            path="settori/manifatturiero/vacuumcooler"
            element={<VacuumCooler />}
          />
          <Route
            path="settori/manifatturiero/sanificatore"
            element={<Sanificatore />}
          />
          <Route
            path="settori/manifatturiero/produttoreghiaccio"
            element={<ProduttoreGhiaccio />}
          />

          {/* extra */}
          <Route path="cookies" element={<Cookies />} />
          <Route path="privacy" element={<Privacy />} />

          {/* 404 -> Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>

      <Footer />
      <WhatsAppButton />
    </ChakraProvider>
  );
}
