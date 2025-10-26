import {
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  List,
  ListItem,
  Box,
  Alert,
  AlertIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function Cookies() {
  return (
    <Container maxW="6xl" py={[10, 16]}>
      <VStack align="start" spacing={6}>
        <Heading size="lg" color="teal.700">
          Cookie Policy
        </Heading>

        <Text fontSize="md" color="gray.700">
          Questo sito utilizza <b>cookie tecnici</b> e, previo consenso, cookie
          <b> analitici</b> o <b>di terze parti</b> per migliorare l’esperienza di
          navigazione, analizzare il traffico e offrire funzionalità aggiuntive.
        </Text>

        <Alert status="info" variant="subtle" borderRadius="lg">
          <AlertIcon />
          Puoi modificare le tue preferenze in qualunque momento dal banner cookie (se presente)
          o dalle impostazioni del browser.
        </Alert>

        <Divider />

        {/* Tipologie */}
        <Heading size="md" color="teal.600">
          Tipologie di cookie utilizzati
        </Heading>
        <VStack align="start" spacing={4} fontSize="md" color="gray.700">
          <Box p={4} bg="gray.50" borderRadius="lg" borderWidth="1px">
            <HStack spacing={3} mb={1}>
              <Badge colorScheme="green">Indispensabili</Badge>
              <Text as="b">Cookie tecnici</Text>
            </HStack>
            <Text>
            Questi cookies sono essenziali al fine di consentire di spostarsi in tutto il sito ed utilizzare appieno le sue caratteristiche, come ad esempio accedere alle varie aree protette del sito. Senza questi cookies alcuni servizi necessari, come la compilazione di un form, non possono essere fruiti. Utilizzando il nostro sito, accetti che tali cookies possano essere installati sul tuo dispositivo.
            </Text>
          </Box>

          <Box p={4} bg="gray.50" borderRadius="lg" borderWidth="1px">
            <HStack spacing={3} mb={1}>
              <Badge colorScheme="blue">Funzionali</Badge>
              <Text as="b">Cookie funzionali</Text>
            </HStack>
            <Text>
            Questi cookie consentono di offrire funzionalità avanzate, nonché maggiori informazioni e funzioni dedicate, come potrebbe essere guardare un video di YouTube, condividere contenuti attraverso i social network o fruire di componenti aggiuntivi del browser.
            </Text>
          </Box>

          <Box p={4} bg="gray.50" borderRadius="lg" borderWidth="1px">
            <HStack spacing={3} mb={1}>
              <Badge colorScheme="purple">Terze parti</Badge>
              <Text as="b">Cookie di terze parti</Text>
            </HStack>
            <Text>
            Attraverso la navigazione del nostro sito potresti ricevere anche cookies di terze parti come quelli usati per Google Analytics, un servizio di analisi web fornito da Google, Inc. ("Google"). Google Analytics utilizza i cookies per analizzare come gli utenti utilizzano il sito. Le informazioni generate dai cookies sull'utilizzo del sito web (compreso il tuo indirizzo IP anonimo) verranno trasmesse e depositate presso i server di Google negli Stati Uniti. Google utilizzerà queste informazioni allo scopo di esaminare il tuo utilizzo del sito web, compilare report sulle attività del sito per gli operatori dello stesso e fornire altri servizi relativi alle attività del sito web e all'utilizzo di internet. Google può anche trasferire queste informazioni a terzi ove ciò sia imposto dalla legge o laddove tali terzi trattino le suddette informazioni per conto di Google. Google non assocerà il tuo indirizzo IP a nessun altro dato posseduto da Google. Puoi rifiutarti di usare i cookies selezionando l'impostazione appropriata sul tuo browser, ma ti ricordiamo che in questo caso è possibile che non si riesca ad utilizzare tutte le funzionalità di questo sito web. Questo sito potrebbe anche utilizzare alcuni "social-plugin" per la condivisione e comunicazione di contenuti: il loro utilizzo è facoltativo. Quando utilizzi uno dei plugin il sito si metterà in contatto, attraverso il tuo browser, con i server presso cui vengono gestiti i servizi di social sharing richiamati, comunicando loro i dati che intendi pubblicare e condividere attraverso il tuo profilo social (di cui rimani l'unico responsabile) ed informandoli (i server) delle pagine che hai visitato. Ricorda che per escludere questa possibilità, puoi solamente evitare di condividere contenuti con l'utilizzo dei pulsanti di social share. Per ulteriori dettagli riguardo l´utilizzo e la raccolta di dati attraverso i seguenti plugin e per sapere come vengono trattati (e per quali finalità) i dati così raccolti e trasmessi, ti preghiamo di consultare l´informativa privacy e legale rilasciata dai Titolari dei servizi in questione.
            </Text>
          </Box>
        </VStack>

        <Divider />

        {/* Approfondimenti: GA + Social */}
        <Heading size="md" color="teal.600">
          Approfondimenti
        </Heading>
        <Accordion allowToggle borderWidth="1px" borderRadius="lg">
          <AccordionItem>
            <h3>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                  Google Analytics (terza parte)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} fontSize="md" color="gray.700">
              <Text mb={3}>
                Attraverso la navigazione del nostro sito potresti ricevere anche cookie di terze parti
                come quelli usati per <b>Google Analytics</b>, un servizio di analisi web fornito da
                Google LLC (“Google”). Google Analytics utilizza i cookie per analizzare come gli utenti
                utilizzano il sito.
              </Text>
              <Text mb={3}>
                Le informazioni generate dai cookie sull&apos;utilizzo del sito (incluso il tuo indirizzo IP
                <i> anonimizzato</i>) vengono trasmesse e depositate presso i server di Google negli Stati Uniti.
                Google utilizza tali informazioni per esaminare l&apos;uso del sito, compilare report sulle
                attività per gli operatori e fornire altri servizi relativi all&apos;utilizzo di Internet.
                Google può trasferire queste informazioni a terzi ove imposto dalla legge o laddove tali terzi
                trattino le informazioni per conto di Google. Google non assocerà il tuo indirizzo IP ad altri
                dati in suo possesso.
              </Text>
              <Text>
                Puoi rifiutare l’uso dei cookie selezionando le impostazioni appropriate del browser; in tal caso
                alcune funzionalità del sito potrebbero essere limitate.
              </Text>
              <Text mt={3} fontSize="sm" color="gray.600">
                Maggiori info:{" "}
                <Link
                  href="https://policies.google.com/technologies/cookies?hl=it"
                  isExternal
                  color="teal.600"
                  textDecoration="underline"
                >
                  policies.google.com
                </Link>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                  Social plugin (condivisione e comunicazione)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} fontSize="md" color="gray.700">
              <Text mb={3}>
                Il sito potrebbe utilizzare alcuni <b>social-plugin</b> per la condivisione di contenuti (uso
                facoltativo). Quando utilizzi un plugin, attraverso il browser viene stabilito un contatto con i
                server del relativo servizio di social sharing, comunicando i dati che intendi pubblicare e le
                pagine che hai visitato. Rimani l’unico responsabile dei contenuti condivisi.
              </Text>
              <Text>
                Per escludere questa possibilità, evita di condividere contenuti tramite i pulsanti social. Per
                dettagli su raccolta, uso e finalità del trattamento da parte dei social, consulta le relative
                informative privacy dei Titolari dei servizi.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Divider />

        {/* Gestione preferenze */}
        <Heading size="md" color="teal.600">
          Gestione dei cookie
        </Heading>
        <Text fontSize="md" color="gray.700">
          Puoi accettare o rifiutare i cookie non essenziali dal banner iniziale (se presente) o
          intervenendo sulle impostazioni del tuo browser. Di seguito alcuni link utili:
        </Text>
        <List spacing={1} fontSize="sm" color="teal.700">
          <ListItem>
            •{" "}
            <Link href="https://support.google.com/chrome/answer/95647?hl=it" isExternal>
              Chrome
            </Link>
          </ListItem>
          <ListItem>
            •{" "}
            <Link href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" isExternal>
              Safari
            </Link>
          </ListItem>
          <ListItem>
            •{" "}
            <Link href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie" isExternal>
              Firefox
            </Link>
          </ListItem>
          <ListItem>
            •{" "}
            <Link href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" isExternal>
              Edge
            </Link>
          </ListItem>
        </List>

        <Divider />

        {/* Contatti + update */}
        <Text fontSize="sm" color="gray.600">
          Per maggiori informazioni, contatta:{" "}
          <Link href="mailto:marvinclasrl@gmail.com" color="teal.600">
            marvinclasrl@gmail.com
          </Link>
        </Text>
        <Text fontSize="sm" color="gray.500">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}.
        </Text>
      </VStack>
    </Container>
  );
}
