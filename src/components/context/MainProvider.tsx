import { FC } from "react";

import CarouselProvider from "./CarouselProvider";
import ContactFormProvider from "./ContactFormProvider";
import MobileMenuProvider from "./MobileMenuProvider";

const MainProvider: FC = ({ children }) => {
  return (
    <MobileMenuProvider>
      <ContactFormProvider>
        <CarouselProvider>{children}</CarouselProvider>
      </ContactFormProvider>
    </MobileMenuProvider>
  );
};

export default MainProvider;
