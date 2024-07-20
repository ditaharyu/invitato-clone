import React, { createContext, useContext, useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

interface DrawerContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <DrawerContext.Provider value={{ isOpen, onOpen, onClose, btnRef }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = (): DrawerContextProps => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
