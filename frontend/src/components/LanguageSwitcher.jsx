import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("common"); // usa il namespace definito in i18n.ts
  const currentLang = i18n.resolvedLanguage || i18n.language;

  return (
    <ButtonGroup size="sm" variant="outline" spacing={2}>
      <Button
        onClick={() => i18n.changeLanguage("it")}
        isDisabled={currentLang === "it"}
      >
        IT
      </Button>
      <Button
        onClick={() => i18n.changeLanguage("en")}
        isDisabled={currentLang === "en"}
      >
        EN
      </Button>
    </ButtonGroup>
  );
}
