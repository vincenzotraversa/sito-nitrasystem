import { Box, Flex, HStack, Link, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      w="100%"
      zIndex="1000"
      transition="all 0.3s ease"
      bg={isScrolled ? "whiteAlpha.900" : "transparent"}
      color={isScrolled ? "gray.800" : "white"}
      boxShadow={isScrolled ? "md" : "none"}
      py={4}
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="7xl"
        mx="auto"
        px={[4, 8]}
      >
        <Box fontWeight="bold" fontSize="xl">
          <Image
            src="./Logotrasparentemarvincla.png"
            alt="logo"
            w="180px"
            h="90px"
            textColor="white"
            color={"white"}
            bgColor={"white"}
          />
        </Box>

        <HStack spacing={6}>
          {[
            { to: "/", label: "Home" },
            { to: "/chisiamo", label: "Chi Siamo" },
            { to: "/cosafacciamo", label: "Cosa facciamo" },
            { to: "/coldsharing", label: "Coldsharing" },
            { to: "/partnercollaborazioni", label: "Partner & Collaborazioni" },
            { to: "/contatti", label: "Contatti" },
          ].map((link) => (
            <NavLink key={link.to} to={link.to}>
              <Link
                fontWeight="semibold"
                _hover={{
                  color: isScrolled ? "teal.500" : "teal.200",
                }}
              >
                {link.label}
              </Link>
            </NavLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
