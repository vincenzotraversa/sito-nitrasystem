// src/pages/Privacy.jsx
import {
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";

export default function Privacy() {
  return (
    <Container maxW="6xl" py={[10, 16]} lineHeight="tall" bg="transparent">
      <VStack align="start" spacing={6}>
        <Heading size="lg" color="nitra.primary">
          Informativa sulla Privacy
        </Heading>

        <Text fontSize="md" color="gray.700">
          Questa informativa descrive come <b>Nitra System Ltd</b> tratta i dati
          personali degli utenti nel rispetto del Regolamento (UE) 2016/679 (<b>GDPR</b>)
          e della normativa nazionale applicabile.
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Titolare del Trattamento</Heading>
        <Text fontSize="md" color="gray.700">
          <b>Nitra System Ltd</b><br />
          8800 Sliven – Bulgaria, Road Baba Tonca n. 5A<br />
          <b>Email:</b> <ChakraLink href="mailto:nitrasystem@gmail.com" color="nitra.accent">nitrasystem@gmail.com</ChakraLink>
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Tipologie di dati trattati</Heading>
        <Text fontSize="md" color="gray.700">
          Trattiamo, a seconda dei casi, le seguenti categorie di dati: dati anagrafici
          (nome, cognome, data di nascita), dati di contatto (email, telefono, indirizzo),
          dati professionali/aziendali (ragione sociale, P.IVA/C.F., ruolo), dati di
          navigazione e <i>Strumenti di Tracciamento</i> (cookie, dati di utilizzo),
          credenziali/account (username/ID) e ulteriori informazioni che decidi di
          fornirci attraverso form o contatti diretti.
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Finalità e basi giuridiche</Heading>
        <List spacing={2} color="gray.700" fontSize="md">
          <ListItem>• <b>Erogazione dei servizi</b> e gestione di richieste/ordini (esecuzione di misure precontrattuali/contratto).</ListItem>
          <ListItem>• <b>Adempimenti di legge</b> (obblighi amministrativi, fiscali, contabili).</ListItem>
          <ListItem>• <b>Assistenza e supporto</b> su prodotti/servizi, gestione ticket e comunicazioni operative (legittimo interesse/contratto).</ListItem>
          <ListItem>• <b>Comunicazioni commerciali</b> su servizi e iniziative del Titolare (consenso o legittimo interesse nei limiti di legge).</ListItem>
          <ListItem>• <b>Analisi e sicurezza</b> del sito/applicazione, prevenzione di abusi e frodi (legittimo interesse/obbligo di legge).</ListItem>
        </List>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Modalità del trattamento</Heading>
        <Text fontSize="md" color="gray.700">
          I dati sono trattati con strumenti informatici e/o telematici secondo principi di
          liceità, trasparenza, minimizzazione e sicurezza. L’accesso ai dati è consentito
          a personale autorizzato e a soggetti terzi che forniscono servizi al Titolare
          (es. hosting, IT, consulenza, logistica, amministrazione), nominati ove necessario
          come <i>Responsabili del Trattamento</i>. I dati non sono diffusi.
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Conferimento dei dati</Heading>
        <Text fontSize="md" color="gray.700">
          Il conferimento dei dati contrassegnati come <b>obbligatori</b> è necessario per
          fornire i servizi richiesti o adempiere a obblighi di legge: il mancato conferimento
          può impedire l’erogazione del servizio. Il conferimento per finalità promozionali è
          facoltativo (puoi revocare il consenso in ogni momento).
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Ambito di comunicazione</Heading>
        <Text fontSize="md" color="gray.700">
          I dati possono essere comunicati a fornitori e partner che supportano l’erogazione
          dei servizi (es. IT, posta elettronica, pagamenti, consulenti, logistica), nonché
          ad autorità competenti ove richiesto dalla legge. L’elenco aggiornato dei
          Responsabili è disponibile su richiesta.
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Trasferimenti extra-UE</Heading>
        <Text fontSize="md" color="gray.700">
          Qualora alcuni fornitori abbiano sedi extra-UE, il trasferimento avverrà nel rispetto
          del Capo V del GDPR (decisioni di adeguatezza, Clausole Contrattuali Standard o altre
          garanzie adeguate).
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Periodo di conservazione</Heading>
        <Text fontSize="md" color="gray.700">
          Conserviamo i dati per il tempo strettamente necessario alle finalità indicate.
          I termini possono prolungarsi per obblighi di legge (es. contabili/fiscali) o
          fino a revoca del consenso per finalità basate su consenso. Al termine, i dati
          sono cancellati o anonimizzati.
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Diritti degli interessati</Heading>
        <List spacing={2} color="gray.700" fontSize="md">
          <ListItem>• accesso, rettifica, aggiornamento;</ListItem>
          <ListItem>• cancellazione e limitazione del trattamento;</ListItem>
          <ListItem>• portabilità dei dati;</ListItem>
          <ListItem>• opposizione al trattamento (incluse comunicazioni di marketing);</ListItem>
          <ListItem>• revoca del consenso, ove il trattamento si basi sul consenso.</ListItem>
        </List>
        <Text fontSize="md" color="gray.700">
          Per esercitare i diritti: scrivi a{" "}
          <ChakraLink href="mailto:nitrasystem@gmail.com" color="nitra.accent">
            nitrasystem@gmail.com
          </ChakraLink>. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Cookie e strumenti di tracciamento</Heading>
        <Text fontSize="md" color="gray.700">
          Il sito utilizza cookie tecnici e, previo consenso, eventuali cookie analitici/di terze
          parti. Per maggiori dettagli e per gestire le preferenze consulta la{" "}
          <ChakraLink href="/cookies" color="nitra.accent" textDecoration="underline">
            Cookie Policy
          </ChakraLink>.
        </Text>

        <Divider borderColor="rgba(14,74,103,0.18)" />

        <Heading size="md" color="nitra.primary">Modifiche all’informativa</Heading>
        <Text fontSize="md" color="gray.700">
          Potremmo aggiornare periodicamente questa informativa. Ti invitiamo a consultare
          questa pagina per eventuali aggiornamenti rilevanti.
        </Text>

        <Text fontSize="sm" color="gray.500">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}.
        </Text>
      </VStack>
    </Container>
  );
}
