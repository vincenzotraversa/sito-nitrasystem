// src/components/SidebarLayout.jsx
import React from "react";
import ColdCell from "./ColdCell";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  Text,
  VStack,
  HStack,
  Link as ChakraLink,
  useDisclosure,
  useColorModeValue,
  Divider,
  Badge,
  Spacer,
  Collapse,
  Image,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiChevronDown,
  FiChevronRight,
  FiHome,
} from "react-icons/fi";

/**
 * Sidebar Layout — versione “chiara”
 * - Niente griglia densa: liste verticali, più spaziatura, divider
 * - “Cosa facciamo” -> 2 sezioni collassabili (Agroalimentare / Industriale)
 * - Auto-open se sei dentro una sezione o un figlio
 * - Hover arancione (nitra.accent), bordo attivo a sinistra
 * - Evidenzia il titolo del gruppo quando un figlio è attivo
 */
export default function SidebarLayout({ brand, links = [], headerRight, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const sidebarBg = useColorModeValue("white", "gray.800");
  const borderCol = useColorModeValue("gray.200", "gray.700");
  const pageBg    = useColorModeValue("gray.50", "gray.900");
  const textMuted = useColorModeValue("gray.500", "gray.400");

  const SidebarContent = () => (
    <Flex direction="column" h="100%" p={4} overflow="hidden">

        {/* Brand solo logo grande */}
        <Flex direction="column" align="center" mb={6}>
        {brand?.logoSrc && (
            <Image
            src={brand.logoSrc}
            alt="Logo"
            boxSize="180px"          // 👈 puoi aumentare/diminuire
            objectFit="contain"
            />
        )}
        </Flex>
        <Divider mb={4} />

      {/* Nav (scroll soft, barra nascosta) */}
      <VStack
        align="stretch"
        spacing={2}
        flex={1}
        pr={1}
        overflowY="auto"
        sx={{ scrollbarWidth: "none", "::-webkit-scrollbar": { width: "0px", height: "0px" } }}
      >
        {links.map((node, idx) =>
          isGroup(node) ? (
            <NavGroup
              key={`group-${idx}`}
              node={node}
              locationPath={location.pathname}
              onItemClick={onClose}
            />
          ) : (
            <NavItem
              key={`${node.to}-${idx}`}
              to={node.to}
              icon={node.icon}
              label={node.label}
              isActive={isActive(location.pathname, node.to)}
              onClick={onClose}
            />
          )
        )}
      </VStack>

      <Box mt={4}>
        <Divider mb={2} />
        <Text fontSize="xs" color={textMuted}>© {new Date().getFullYear()} Nitra System - Tecnologia che mantiene la freschezza.</Text>
      </Box>
    </Flex>
  );

  return (
    <Flex minH="100vh" bg={pageBg}>
      {/* Sidebar desktop */}
      <Box
        as="nav"
        display={{ base: "none", md: "block" }}
        w="270px"
        flexShrink={0}
        bg={sidebarBg}
        borderRightWidth="1px"
        borderRightColor={borderCol}
        position="sticky"
        top={0}
        h="100vh"
      >
        <SidebarContent />
      </Box>

      {/* Main */}
      <Flex direction="column" flex={1} minW={0}>
        <Flex
          as="header"
          align="center"
          px={4}
          h="60px"
          borderBottomWidth="1px"
          borderBottomColor={borderCol}
          bg={useColorModeValue("white", "gray.800")}
          position="sticky"
          top={0}
          zIndex={10}
        >
          <IconButton
            aria-label="Apri menu"
            icon={<FiMenu />}
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            variant="ghost"
          />
          <Heading size="sm" ml={{ base: 2, md: 0 }}>{brand?.title ?? "App"}</Heading>
          <Spacer />
          {headerRight}
        </Flex>

        <Box as="main" p={{ base: 4, md: 6 }}>
          {children}
        </Box>
      </Flex>

      {/* Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={sidebarBg}>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack spacing={3} align="center">
              {brand?.logoSrc && <Image src={brand.logoSrc} alt="logo" boxSize="24px" objectFit="contain" />}
              <span>{brand?.title ?? "Menu"}</span>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

/* ================= helpers ================= */
function isGroup(node) {
  return Array.isArray(node?.children);
}
function isActive(path, to) {
  return path === to || path.startsWith(to);
}
function anyDescendantActive(node, path) {
  if (!isGroup(node)) return false;
  for (const c of node.children) {
    if (isGroup(c)) {
      if (anyDescendantActive(c, path)) return true;
    } else if (isActive(path, c.to)) {
      return true;
    }
  }
  return false;
}

/* ================= components ================= */

/** Link singolo */
function NavItem({ to, icon, label, isActive, onClick }) {
  const accent = "nitra.accent";
  const activeBg = useColorModeValue("gray.100", "gray.700");
  const activeBorder = "#B04125";

  const hoverStyles = { bg: accent, color: "white", svg: { color: "white" } };
  const Icon = icon || FiHome;

  return (
    <ChakraLink as={Link} to={to} onClick={onClick} _hover={{ textDecoration: "none" }}>
      <HStack
        spacing={3}
        p={3}
        rounded="md"
        bg={isActive ? activeBg : "transparent"}
        borderLeftWidth={isActive ? "3px" : "0"}
        borderLeftColor={isActive ? activeBorder : "transparent"}
        transition="background 120ms, border-color 120ms, color 120ms"
        _hover={hoverStyles}
      >
        <Box as={Icon} boxSize={5} />
        <Text fontWeight={isActive ? "semibold" : "medium"} noOfLines={1}>{label}</Text>
      </HStack>
    </ChakraLink>
  );
}

/**
 * NavGroup:
 * - Se riceve children con altre children => rende 2 SEZIONI collassabili (stile card)
 * - Altrimenti lista semplice
 */
function NavGroup({ node, locationPath, onItemClick }) {
  const accent = "nitra.accent";
  const [open, setOpen] = React.useState(anyDescendantActive(node, locationPath));
  React.useEffect(() => {
    if (anyDescendantActive(node, locationPath)) setOpen(true);
  }, [locationPath, node]);

  const parentActive = anyDescendantActive(node, locationPath);
  const parentHover = { bg: accent, color: "white", svg: { color: "white" } };

  const hasSections = node.children.some(isGroup);

  return (
    <Box>
      {/* Header gruppo */}
      <HStack
        as="button"
        type="button"
        onClick={() => setOpen(o => !o)}
        w="100%"
        spacing={3}
        p={3}
        rounded="md"
        justify="space-between"
        transition="background 120ms, color 120ms"
        _hover={parentHover}
        bg={parentActive ? useColorModeValue("gray.100", "gray.700") : "transparent"}
        borderLeftWidth={parentActive ? "3px" : "0"}
        borderLeftColor={parentActive ? "#B04125" : "transparent"}
      >
        <HStack spacing={3}>
          {node.icon ? <Box as={node.icon} boxSize={5} /> : <Box boxSize={5} />}
          <Text fontWeight="semibold">{node.label}</Text>
        </HStack>
        <Box as={open ? FiChevronDown : FiChevronRight} boxSize={5} />
      </HStack>

      <Collapse in={open} animateOpacity>
        <VStack align="stretch" spacing={3} mt={2} pl={2}>
          {hasSections
            ? node.children.map((section, idx) => (
                <SectionBox
                  key={`section-${idx}`}
                  title={section.label}
                  items={section.children}
                  locationPath={locationPath}
                  onItemClick={onItemClick}
                />
              ))
            : node.children.map((child, i) => (
                <NavItem
                  key={`${child.to}-${i}`}
                  to={child.to}
                  icon={child.icon}
                  label={child.label}
                  isActive={isActive(locationPath, child.to)}
                  onClick={onItemClick}
                />
              ))}
        </VStack>
      </Collapse>
    </Box>
  );
}

// in cima al file:
// import ColdCell from "./ColdCell";  // percorso relativo: se SidebarLayout è in /components, va bene così

function SectionBox({ title, items, locationPath, onItemClick }) {
  return (
    <ColdCell title={title} p={2}>
      <VStack align="stretch" spacing={1} pt={1}>
        {items.map((it, idx) => (
          <NavItem
            key={`${it.to}-${idx}`}
            to={it.to}
            icon={it.icon}
            label={it.label}
            isActive={isActive(locationPath, it.to)}
            onClick={onItemClick}
          />
        ))}
      </VStack>
    </ColdCell>
  );
}

