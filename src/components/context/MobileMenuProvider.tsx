import { createContext, FC, useMemo, useState } from "react";

export const mobileMenuCtx = createContext<{
  mobileMenuIsVisible: boolean;
  setMobileMenuIsVisible: (isVisible: boolean) => void;
}>({
  mobileMenuIsVisible: false,
  setMobileMenuIsVisible: (isVisible: boolean) => isVisible,
});

const MobileMenuProvider: FC = ({ children }) => {
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  return (
    <mobileMenuCtx.Provider
      value={useMemo(
        () => ({
          mobileMenuIsVisible,
          setMobileMenuIsVisible,
        }),
        [mobileMenuIsVisible]
      )}
    >
      {children}
    </mobileMenuCtx.Provider>
  );
};

export default MobileMenuProvider;
