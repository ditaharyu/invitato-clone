import React, { useEffect, useState } from 'react';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Text, useMediaQuery } from '@chakra-ui/react';
import { useDrawer } from './SidebarContext'; // Adjust the path as necessary

const Sidebar: React.FC = () => {
  const { isOpen, onClose, btnRef } = useDrawer();
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [mediaQuery] = useMediaQuery('(min-width: 1025px)');

  useEffect(() => {
    setIsDesktop(mediaQuery);
  }, [mediaQuery]);
  
  return (
    <Drawer
      size={isDesktop ? "sm" : "xs"}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody textAlign="right">
          <Text>#TImetoshaRE</Text>
          <Text>BRIDE & GROOM</Text>
          <Text>LIVE STREAMING</Text>
          <Text>WEDDING GIFT</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
