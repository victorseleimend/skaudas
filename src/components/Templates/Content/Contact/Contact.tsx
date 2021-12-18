import { useEffect, useRef, useState } from "react";
import useContactForm from "../../../hooks/useContactForm";
import Container from "../../../UI/Container/Container";
import classes from "./Contact.module.css";

const Contact = () => {
  const { contactForm, setContactForm } = useContactForm();
  const [errorMessage, setErrorMessage] = useState();

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const setContactFormHandler = (cf: string) => {
    setContactForm(cf);
  };

  const formSubmitHandler = async () => {
    const response = await fetch("", {
      body: JSON.stringify({
        method: "POST",
        body: {
          contactForm,
          email: inputRef.current?.value,
          message: inputRef.current?.value,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <Container cssClass={classes.contact}>
      <form onSubmit={formSubmitHandler} id="sendMail">
        <h3>Formas de contato</h3>
        <div>
          <button
            type="button"
            onClick={() => setContactFormHandler("Ouvidoria")}
          >
            Ouvidoria
          </button>
          <button
            type="button"
            onClick={() => setContactFormHandler("Comercial")}
          >
            Comercial
          </button>
          <button
            type="button"
            onClick={() => setContactFormHandler("Recrutamento")}
          >
            Recrutamento
          </button>
        </div>
        <div>
          <label htmlFor="email">
            Email<span>*</span>
            <input ref={inputRef} type="text" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Mensagem<span>*</span>
            <textarea ref={textareaRef} id="message" name="message" />
          </label>
        </div>
        <button onClick={formSubmitHandler} type="submit">
          Enviar
        </button>
        <input type="hidden" name="contactForm" value={contactForm} />
      </form>
    </Container>
  );
};

export default Contact;
