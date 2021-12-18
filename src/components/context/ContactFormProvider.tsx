import { createContext, FC, useMemo, useState } from "react";

export const contactFormCtx = createContext<{
  setContactForm: (cf: string | ((f: string) => string)) => void;
  contactForm: string;
}>({ contactForm: "Ouvidoria", setContactForm: (cf) => cf });

const ContactFormProvider: FC = ({ children }) => {
  const [contactForm, setContactForm] = useState("Ouvidoria");

  return (
    <contactFormCtx.Provider
      value={useMemo(
        () => ({
          contactForm,
          setContactForm,
        }),
        [contactForm, setContactForm]
      )}
    >
      {children}
    </contactFormCtx.Provider>
  );
};

export default ContactFormProvider;
