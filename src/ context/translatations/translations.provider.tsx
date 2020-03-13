import React, { useState } from "react";
import TranslationsContext from "./translations.context";

interface Props {}

const TranslationsProvider: React.FC<Props> = ({ children }) => {
  const [translations, setTranslations] = useState<any[]>([
    {
      lgToLearn: {
        flag: "gb",
        text: "Oh mais qui voilà-je ?"
      },
      lgLearnt: {
        flag: "fr",
        text: "Oh mais qui voilà-je ?"
      }
    }
  ]);

  const [isCreatingTranslation, setCreatingTranslation] = useState(false);

  const addTranslation = (translation: any) => {
    const newTranslations: any[] = [...translations];

    newTranslations.push(translation);
    setTranslations(newTranslations);
  };

  const onDelete = (index: any) => {
    const newTranslations: any[] = [...translations];
    newTranslations.splice(index, 1);
    setTranslations(newTranslations);
  };

  return (
    <TranslationsContext.Provider
      value={{
        translations,
        setTranslations,
        isCreatingTranslation,
        setCreatingTranslation,
        addTranslation,
        onDelete
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsProvider;
