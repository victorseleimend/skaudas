import { FC } from "react";

import CarouselProvider from "./CarouselProvider";
import MobileMenuProvider from "./MobileMenuProvider";

const MainProvider: FC = ({ children }) => {
  return (
    <MobileMenuProvider>
      <CarouselProvider>{children}</CarouselProvider>
    </MobileMenuProvider>
  );
};

export default MainProvider;
