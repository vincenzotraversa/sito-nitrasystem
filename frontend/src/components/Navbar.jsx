// src/components/Navbar.jsx
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Link as ChakraLink,
  useDisclosure,
  Collapse,
  Text,
  VStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiX,
  FiChevronDown
} from "react-icons/fi";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

export default function Navbar() {
  const { lang } = useParams(); // "it" | "en"
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");
  const hover = useColorModeValue("gray.50", "gray.700");

  // Ombra navbar quando si scrolla
  const [elevate, setElevate] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setElevate(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Switch lingua mantenendo path
  const switchLang = () => {
    const newLang = lang === "it" ? "en" : "it";
    const parts = location.pathname.split("/");
    parts[1] = newLang;
    navigate(parts.join("/") || `/${newLang}`);
  };

  // NavLink coerente
  const NavLink = ({ to, children }) => (
    <ChakraLink
      as={RouterLink}
      to={to}
      px={3}
      py={2}
      rounded="md"
      fontSize="sm"
      fontWeight="medium"
      _hover={{ bg: hover, color: "nitra.accent", textDecoration: "none" }}
      onClick={() => onClose()}
    >
      {children}
    </ChakraLink>
  );

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={50}
      bg={bg}
      borderBottomWidth="1px"
      borderBottomColor={border}
      boxShadow={elevate ? "sm" : "none"}
    >
      {/* Barra principale */}
      <Flex align="center" gap={6} px={{ base: 4, md: 8 }} py={3}>
        {/* Logo */}
        <ChakraLink as={RouterLink} to={`/${lang}`} display="inline-flex" alignItems="center">
          <img src="/logonitragrande.png" alt="Nitra System" style={{ height: 70 }} />
        </ChakraLink>

        {/* Nav desktop */}
        <HStack spacing={1} ml="auto" display={{ base: "none", md: "flex" }}>
          <NavLink to={`/${lang}`}>{lang === "it" ? "Home" : "Home"}</NavLink>

          {/* --- Cosa facciamo (Dropdown) --- */}
          <Menu isLazy closeOnSelect closeOnBlur placement="bottom-start">
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              variant="ghost"
              px={3}
              fontSize="sm"
              _hover={{ bg: hover, color: "nitra.accent" }}
            >
              {lang === "it" ? "Cosa facciamo" : "What we do"}
            </MenuButton>
            <MenuList minW="340px" p={2} zIndex={100}>
              <MenuGroup title={lang === "it" ? "Agroalimentare" : "Agri-food"}>
                <MenuItem as={RouterLink} to={`/${lang}/settori/agroalimentare/lavorazione-carni`} onClick={onClose}>
                  {lang === "it" ? "Lavorazione Carni" : "Meat Processing"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/agroalimentare/panificazione`} onClick={onClose}>
                  {lang === "it" ? "Panificazione" : "Bakery"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/agroalimentare/lattiero-caseari`} onClick={onClose}>
                  {lang === "it" ? "Prodotti Lattiero-Caseari" : "Dairy"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/agroalimentare/ittico`} onClick={onClose}>
                  {lang === "it" ? "Lavorazione Ittico-Pesce" : "Fish"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/agroalimentare/ortofrutta`} onClick={onClose}>
                  {lang === "it" ? "Frutta e Verdura" : "Fruit & Veg"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/agroalimentare/trasformati`} onClick={onClose}>
                  {lang === "it" ? "Prodotti alimentati trasformati" : "Processed"}
                </MenuItem>
              </MenuGroup>

              <MenuGroup title={lang === "it" ? "Industriale" : "Industrial"}>
                <MenuItem as={RouterLink} to={`/${lang}/settori/manifatturiero/hydrocooler`} onClick={onClose}>
                  Hydrocooler
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/manifatturiero/vacuumcooler`} onClick={onClose}>
                  Vacuum Cooler
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/manifatturiero/sanificatore`} onClick={onClose}>
                  {lang === "it" ? "Sanificatore" : "Sanitizer"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/manifatturiero/produttoreghiaccio`} onClick={onClose}>
                  {lang === "it" ? "Produttore Ghiaccio" : "Ice Maker"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/manifatturiero/logistica-refrigerata`} onClick={onClose}>
                  {lang === "it" ? "Logistica Refrigerata" : "Refrigerated Logistics"}
                </MenuItem>
                <MenuItem as={RouterLink} to={`/${lang}/settori/manifatturiero/logistica-gdo`} onClick={onClose}>
                  GDO Logistics
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>

          {/* Altri link */}
          <NavLink to={`/${lang}/azienda`}>{lang === "it" ? "Azienda" : "Company"}</NavLink>
          <NavLink to={`/${lang}/partnercollaborazioni`}>
            {lang === "it" ? "Partner & Collaborazioni" : "Partners"}
          </NavLink>
          <NavLink to={`/${lang}/coldsharing`}>Coldsharing</NavLink>
          <NavLink to={`/${lang}/contatti`}>{lang === "it" ? "Contatti" : "Contacts"}</NavLink>

          {/* CTA + lingua */}
          <HStack spacing={2} pl={2}>
            <Button as={RouterLink} to={`/${lang}/contatti`} size="sm" variant="accent">
              {lang === "it" ? "Richiedi preventivo" : "Get a quote"}
            </Button>
            <Button variant="outline" size="sm" onClick={switchLang}>
              {lang === "it" ? "EN" : "IT"}
            </Button>
          </HStack>
        </HStack>

        {/* Mobile menu button */}
        <Button
          aria-label="Apri menu"
          leftIcon={isOpen ? <FiX /> : <FiMenu />}
          variant="outline"
          size="sm"
          display={{ base: "inline-flex", md: "none" }}
          ml="auto"
          onClick={onToggle}
        >
          Menu
        </Button>
      </Flex>

      {/* Menu Mobile */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg={bg}
          borderTopWidth="1px"
          borderTopColor={border}
          display={{ md: "none" }}
          px={4}
          pb={4}
        >
          <VStack align="stretch" spacing={1} mt={2}>
            <NavLink to={`/${lang}`}>{lang === "it" ? "Home" : "Home"}</NavLink>

            {/* Sezione mobile cosa facciamo */}
            <Box bg={useColorModeValue("gray.50", "gray.700")} rounded="md" p={2}>
              <Text fontSize="sm" fontWeight="semibold" mb={1}>
                {lang === "it" ? "Cosa facciamo" : "What we do"}
              </Text>

              <VStack align="stretch" spacing={1}>
                <Text fontSize="xs" color="gray.500" mt={2}>
                  {lang === "it" ? "Agroalimentare" : "Agri-food"}
                </Text>
                <NavLink to={`/${lang}/settori/agroalimentare/lavorazione-carni`}>
                  {lang === "it" ? "Lavorazione Carni" : "Meat Processing"}
                </NavLink>
                <NavLink to={`/${lang}/settori/agroalimentare/panificazione`}>
                  {lang === "it" ? "Panificazione" : "Bakery"}
                </NavLink>
                <NavLink to={`/${lang}/settori/agroalimentare/lattiero-caseari`}>
                  {lang === "it" ? "Prodotti Lattiero-Caseari" : "Dairy"}
                </NavLink>
                <NavLink to={`/${lang}/settori/agroalimentare/ittico`}>
                  {lang === "it" ? "Lavorazione Ittico - Pesce" : "Fish"}
                </NavLink>
                <NavLink to={`/${lang}/settori/agroalimentare/ortofrutta`}>
                  {lang === "it" ? "Frutta e Verdura" : "Fruit & Veg"}
                </NavLink>
                <NavLink to={`/${lang}/settori/agroalimentare/trasformati`}>
                  {lang === "it" ? "Prodotti alimentari trasformati" : "Processed"}
                </NavLink>

                <Text fontSize="xs" color="gray.500" mt={3}>
                  {lang === "it" ? "Industriale" : "Industrial"}
                </Text>
                <NavLink to={`/${lang}/settori/manifatturiero/hydrocooler`}>Hydrocooler</NavLink>
                <NavLink to={`/${lang}/settori/manifatturiero/vacuumcooler`}>Vacuum Cooler</NavLink>
                <NavLink to={`/${lang}/settori/manifatturiero/sanificatore`}>
                  {lang === "it" ? "Sanificatore" : "Sanitizer"}
                </NavLink>
                <NavLink to={`/${lang}/settori/manifatturiero/produttoreghiaccio`}>
                  {lang === "it" ? "Produttore Ghiaccio" : "Ice Maker"}
                </NavLink>
                <NavLink to={`/${lang}/settori/manifatturiero/logistica-refrigerata`}>
                  {lang === "it" ? "Logistica Refrigerata" : "Refrigerated Logistics"}
                </NavLink>
                <NavLink to={`/${lang}/settori/manifatturiero/logistica-gdo`}>GDO Logistics</NavLink>
              </VStack>
            </Box>

            <NavLink to={`/${lang}/azienda`}>{lang === "it" ? "Azienda" : "Company"}</NavLink>
            <NavLink to={`/${lang}/partnercollaborazioni`}>
              {lang === "it" ? "Partner & Collaborazioni" : "Partners"}
            </NavLink>
            <NavLink to={`/${lang}/coldsharing`}>Coldsharing</NavLink>
            <NavLink to={`/${lang}/contatti`}>{lang === "it" ? "Contatti" : "Contacts"}</NavLink>

            <HStack pt={2}>
              <Button as={RouterLink} to={`/${lang}/contatti`} size="sm" variant="accent" onClick={onClose}>
                {lang === "it" ? "Richiedi preventivo" : "Get a quote"}
              </Button>
              <Button variant="outline" size="sm" onClick={() => { onClose(); switchLang(); }}>
                {lang === "it" ? "EN" : "IT"}
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}
