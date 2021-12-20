import { FC } from "react";

import CarouselProvider from "./CarouselProvider";
import InitModalProvider from "./InitModalProvider";
import MobileMenuProvider from "./MobileMenuProvider";

const MainProvider: FC = ({ children }) => {
  return (
    <MobileMenuProvider>
      <InitModalProvider>
        <CarouselProvider>{children}</CarouselProvider>
      </InitModalProvider>
    </MobileMenuProvider>
  );
};

export default MainProvider;
