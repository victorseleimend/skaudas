import { useContext } from "react";
import { contactFormCtx } from "../context/ContactFormProvider";

const useContactForm = () => {
  const { contactForm, setContactForm } = useContext(contactFormCtx);
  return {
    contactForm,
    setContactForm,
  };
};

export default useContactForm;
