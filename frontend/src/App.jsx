// src/App.jsx
import React from "react";
import { Routes, Route, Navigate, useParams, useLocation, useNavigate } from "react-router-dom";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";

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

/* Tema con arancione brand */
const theme = extendTheme({
  colors: {
    nitra: {
      primary: "#0E4A67",
      accent:  "#B04125",
      bg:      "#F3F7FA",
      dark:    "#0B394F",
    },
  },
  components: {
    Button: {
      baseStyle: { rounded: "xl", fontWeight: "semibold" },
      variants: {
        accent:  { bg: "nitra.accent", color: "white", _hover: { bg: "#C85B38" }, _active: { bg: "#9F3A22" } },
        outline: { borderColor: "nitra.accent", color: "nitra.accent", _hover: { bg: "nitra.accent", color: "white" } },
        ghost:   { color: "nitra.accent", _hover: { bg: "rgba(176,65,37,0.08)" } },
      },
      defaultProps: { variant: "accent", size: "md" },
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

function LangLayout() {
  const { lang } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!["it", "en"].includes(lang)) {
      const stored = (localStorage.getItem("i18nextLng") || "it").slice(0,2);
      navigate(`/${["it","en"].includes(stored) ? stored : "it"}`, { replace: true });
      return;
    }
    document.documentElement.lang = lang;
    localStorage.setItem("i18nextLng", lang);
  }, [lang, navigate]);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* FULL WIDTH: niente Container, padding minimo */}
      <Box as="main" w="100%" px={{ base: 0, md: 0 }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="coldsharing" element={<Coldsharing />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="azienda" element={<Azienda />} />
          <Route path="partnercollaborazioni" element={<Partnercollaborazioni />} />

          {/* Agroalimentare */}
          <Route path="settori/agroalimentare/lavorazione-carni" element={<LavorazioneCarni />} />
          <Route path="settori/agroalimentare/panificazione" element={<Panificazione />} />
          <Route path="settori/agroalimentare/lattiero-caseari" element={<LattieroCaseario />} />
          <Route path="settori/agroalimentare/ittico" element={<LavorazioneIttico />} />
          <Route path="settori/agroalimentare/ortofrutta" element={<FruttaVerdura />} />
          <Route path="settori/agroalimentare/trasformati" element={<ProdottiTransformati />} />

          {/* Industriale */}
          <Route path="settori/manifatturiero/logistica-refrigerata" element={<LogisticaRefrigerata />} />
          <Route path="settori/manifatturiero/logistica-gdo" element={<LogisticaGDO />} />
          <Route path="settori/manifatturiero/hydrocooler" element={<Hydrocooler />} />
          <Route path="settori/manifatturiero/vacuumcooler" element={<VacuumCooler />} />
          <Route path="settori/manifatturiero/sanificatore" element={<Sanificatore />} />
          <Route path="settori/manifatturiero/produttoreghiaccio" element={<ProduttoreGhiaccio />} />

          {/* nascoste */}
          <Route path="cookies" element={<Cookies />} />
          <Route path="privacy" element={<Privacy />} />

          <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
        </Routes>
      </Box>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  const guess = (localStorage.getItem("i18nextLng") || navigator.language || "it").slice(0,2);
  const initial = ["it","en"].includes(guess) ? guess : "it";
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to={`/${initial}`} replace />} />
        <Route path="/:lang/*" element={<LangLayout />} />
        <Route path="*" element={<Navigate to={`/${initial}`} replace />} />
      </Routes>
    </ChakraProvider>
  );
}
