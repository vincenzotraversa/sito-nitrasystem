import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contatti from "./pages/Contatti";
import ChiSiamo from "./pages/ChiSiamo";
import Cosafacciamo from "./pages/Cosafacciamo";
import Partnercollaborazioni from "./pages/Partnercollaborazioni";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/Privacy";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import WhatsAppButton from "./components/Whatsapp-button";
import "./App.css";
import Coldsharing from "./pages/Coldsharing";
const theme = extendTheme({});
function App() {
  return (
    <div style={{ width: "100%" }}>
      <WhatsAppButton />
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coldsharing" element={<Coldsharing />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/cosafacciamo" element={<Cosafacciamo />} />
          <Route path="/partnercollaborazioni" element={<Partnercollaborazioni/>} />
          <Route path="/cookies" element={<Cookies/>} />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
        {/* Footer sempre visibile */}
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
