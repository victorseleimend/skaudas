import { createContext, FC, useMemo, useState } from "react";

export const initModalCtx = createContext<{
  modalIsVisible: boolean;
  setModalIsVisible: (isVisible: boolean) => void;
}>({
  modalIsVisible: false,
  setModalIsVisible: (isVisible: boolean) => isVisible,
});

const InitModalProvider: FC = ({ children }) => {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  return (
    <initModalCtx.Provider
      value={useMemo(
        () => ({
          modalIsVisible,
          setModalIsVisible,
        }),
        [modalIsVisible]
      )}
    >
      {children}
    </initModalCtx.Provider>
  );
};

export default InitModalProvider;
