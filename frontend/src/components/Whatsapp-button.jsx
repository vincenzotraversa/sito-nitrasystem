import { Box } from "@chakra-ui/react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes } from "@emotion/react";
const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(72,187,120, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 15px rgba(72,187,120, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(72,187,120, 0); }
`;

export default function WhatsAppButton() {
  return (
    <Box
      as="a"
      href="https://wa.me/393331234567" // 🔗 Sostituisci con il tuo numero in formato internazionale
      target="_blank"
      rel="noopener noreferrer"
      position="fixed"
      bottom="25px"
      right="25px"
      bg="#25D366" // colore verde ufficiale WhatsApp
      color="white"
      borderRadius={"50%"}
      boxShadow="0 4px 10px rgba(0,0,0,0.3)"
      p={4}
      zIndex="2000"
      animation={`${pulse} 2.5s infinite`}
      _hover={{
        bg: "#1EBE5B",
        transform: "scale(1.1)",
        transition: "0.3s",
      }}
      title="Chatta con noi su WhatsApp"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="60px"
      h="60px"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="xl" />
    </Box>
  );
}
