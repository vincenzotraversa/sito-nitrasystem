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
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Navbar() {
  const { t, i18n } = useTranslation("common");
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

  // Switch lingua
  const switchLang = () => {
    const lang = i18n.resolvedLanguage;
    i18n.changeLanguage(lang === "it" ? "en" : "it");
  };

  // Link coerente
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
        <ChakraLink as={RouterLink} to="/" display="inline-flex" alignItems="center">
          <img src="/logonitragrande.png" alt="Nitra System" style={{ height: 70 }} />
        </ChakraLink>

        {/* Nav desktop */}
        <HStack spacing={1} ml="auto" display={{ base: "none", md: "flex" }}>
          <NavLink to="/">{t("home")}</NavLink>

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
              {t("whatWeDo")}
            </MenuButton>

            <MenuList minW="360px" p={2} zIndex={100}>
              <MenuGroup title={t("agriFood")}>
                <MenuItem as={RouterLink} to="/settori/agroalimentare/lavorazione-carni" onClick={onClose}>
                  {t("meatProcessing")}
                </MenuItem>
                {/* Panificazione rimossa */}
                <MenuItem as={RouterLink} to="/settori/agroalimentare/lattiero-caseari" onClick={onClose}>
                  {t("dairy")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/agroalimentare/ittico" onClick={onClose}>
                  {t("fish")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/agroalimentare/ortofrutta" onClick={onClose}>
                  {t("fruitVeg")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/agroalimentare/trasformati" onClick={onClose}>
                  {t("navbarprocessed")}
                </MenuItem>
              </MenuGroup>

              <MenuGroup title={t("industrial")}>
                <MenuItem as={RouterLink} to="/settori/manifatturiero/hydrocooler" onClick={onClose}>
                  {t("navbarhydrocooler")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/manifatturiero/vacuumcooler" onClick={onClose}>
                  {t("navbarvacuumCooler")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/manifatturiero/sanificatore" onClick={onClose}>
                  {t("sanitizer")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/manifatturiero/produttoreghiaccio" onClick={onClose}>
                  {t("iceMaker")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/manifatturiero/logistica-refrigerata" onClick={onClose}>
                  {t("refrigeratedLogistics")}
                </MenuItem>
                <MenuItem as={RouterLink} to="/settori/manifatturiero/logistica-gdo" onClick={onClose}>
                  {t("GDOLogistics")}
                </MenuItem>
              </MenuGroup>

              {/* NUOVO: Life Sciences */}
              <MenuGroup title={t("lifeGroup", { defaultValue: "Pharma & Life Sciences" })}>
                <MenuItem
                  as={RouterLink}
                  to="/camere-bianche"
                  onClick={onClose}
                >
                  {t("cleanrooms", {
                    defaultValue: i18n.resolvedLanguage === "it" ? "Camere bianche" : "Cleanrooms",
                  })}
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>

          {/* Altri link */}
          <NavLink to="/azienda">{t("company")}</NavLink>
          <NavLink to="/partnercollaborazioni">{t("navbarpartners")}</NavLink>
          <NavLink to="/coldsharing">{t("coldsharing")}</NavLink>
          <NavLink to="/contatti">{t("contacts")}</NavLink>

          {/* CTA + lingua */}
          <HStack spacing={2} pl={2}>
            <Button as={RouterLink} to="/contatti" size="sm" variant="accent">
              {t("getAQuote")}
            </Button>
            <Button variant="outline" size="sm" onClick={switchLang}>
              {i18n.resolvedLanguage}
            </Button>
          </HStack>
        </HStack>

        {/* Bottone mobile */}
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
          maxH="70vh"
          overflowY="auto"
        >
          <VStack align="stretch" spacing={1} mt={2}>
            <NavLink to="/">{t("home")}</NavLink>

            {/* Cosa facciamo (mobile) */}
            <Accordion allowToggle reduceMotion>
              <AccordionItem border="none">
                <h3>
                  <AccordionButton px={2} py={2} _hover={{ bg: hover }} borderRadius="md">
                    <Box flex="1" textAlign="left" fontWeight="semibold" fontSize="sm">
                      {t("whatWeDo")}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>

                <AccordionPanel px={2} pt={2} pb={3}>
                  <VStack align="stretch" spacing={1}>
                    <Text fontSize="xs" color="gray.500" mt={1}>
                      {t("agriFood")}
                    </Text>
                    <NavLink to="/settori/agroalimentare/lavorazione-carni">
                      {t("meatProcessing")}
                    </NavLink>
                    {/* Panificazione rimossa */}
                    <NavLink to="/settori/agroalimentare/lattiero-caseari">
                      {t("dairy")}
                    </NavLink>
                    <NavLink to="/settori/agroalimentare/ittico">
                      {t("fish")}
                    </NavLink>
                    <NavLink to="/settori/agroalimentare/ortofrutta">
                      {t("fruitVeg")}
                    </NavLink>
                    <NavLink to="/settori/agroalimentare/trasformati">
                      {t("navbarprocessed")}
                    </NavLink>

                    <Text fontSize="xs" color="gray.500" mt={3}>
                      {t("industrial")}
                    </Text>
                    <NavLink to="/settori/manifatturiero/hydrocooler">
                      {t("navbarhydrocooler")}
                    </NavLink>
                    <NavLink to="/settori/manifatturiero/vacuumcooler">
                      {t("navbarvacuumCooler")}
                    </NavLink>
                    <NavLink to="/settori/manifatturiero/sanificatore">
                      {t("sanitizer")}
                    </NavLink>
                    <NavLink to="/settori/manifatturiero/produttoreghiaccio">
                      {t("iceMaker")}
                    </NavLink>
                    <NavLink to="/settori/manifatturiero/logistica-refrigerata">
                      {t("refrigeratedLogistics")}
                    </NavLink>
                    <NavLink to="/settori/manifatturiero/logistica-gdo">
                      {t("GDOLogistics")}
                    </NavLink>

                    <Text fontSize="xs" color="gray.500" mt={3}>
                      {t("lifeGroup", { defaultValue: "Pharma & Life Sciences" })}
                    </Text>
                    <NavLink to="/camere-bianche">
                      {t("cleanrooms", {
                        defaultValue: i18n.resolvedLanguage === "it" ? "Camere bianche" : "Cleanrooms",
                      })}
                    </NavLink>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <NavLink to="/azienda">{t("company")}</NavLink>
            <NavLink to="/partnercollaborazioni">{t("navbarpartners")}</NavLink>
            <NavLink to="/coldsharing">{t("coldsharing")}</NavLink>
            <NavLink to="/contatti">{t("contacts")}</NavLink>

            <HStack pt={2}>
              <Button as={RouterLink} to="/contatti" size="sm" variant="accent" onClick={onClose}>
                {t("getAQuote")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onClose();
                  switchLang();
                }}
              >
                {i18n.resolvedLanguage}
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}
