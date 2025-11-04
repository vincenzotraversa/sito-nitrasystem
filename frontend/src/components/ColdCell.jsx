// src/components/ColdCell.jsx
import React from "react";
import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ColdCell({ title, subtitle, to, href, children, p = 4, ...rest }) {
  const Wrapper = to || href ? (props) =>
    <ChakraLink as={to ? Link : "a"} to={to} href={href} _hover={{ textDecoration: "none" }} {...props} />
    : React.Fragment;

  return (
    <Wrapper>
      <Box
        position="relative"
        bg="white"
        rounded="2xl"
        borderWidth="2px"
        borderColor="gray.200"
        boxShadow="sm"
        p={p}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          rounded: "2xl",
          boxShadow: "inset 0 0 0 6px rgba(240,242,246,1)",
          pointerEvents: "none",
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "14px",
          roundedTop: "2xl",
          bgGradient: "linear(to-r, gray.100, gray.200, gray.100)",
          pointerEvents: "none",
        }}
        transition="transform 120ms ease, box-shadow 120ms ease"
        _hover={{ transform: to || href ? "translateY(-2px)" : undefined, boxShadow: "md" }}
        {...rest}
      >
        {/* cerniere */}
        <Box position="absolute" left="-6px" top="28px" w="12px" h="18px" bg="gray.300" rounded="sm" boxShadow="base" />
        <Box position="absolute" left="-6px" top="64px" w="12px" h="18px" bg="gray.300" rounded="sm" boxShadow="base" />
        {/* maniglia */}
        <Box position="absolute" right="-4px" top="46px" w="8px" h="36px" bg="gray.500" rounded="full" boxShadow="md" />
        {/* fuga porta */}
        <Box position="absolute" top="14px" bottom="0" left="54%" w="2px" bg="gray.200" />

        {title && <Heading size="sm" mb={1}>{title}</Heading>}
        {subtitle && <Text fontSize="sm" color="gray.500" mb={2}>{subtitle}</Text>}
        {children}
      </Box>
    </Wrapper>
  );
}
