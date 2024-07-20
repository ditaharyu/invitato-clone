import React from 'react';
import { Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useDrawer } from './SidebarContext'; // Adjust the path as necessary

const DrawerButton: React.FC = () => {
  const { onOpen, btnRef } = useDrawer();

  return (
    <Button
      position="fixed"
      display="flex"
      left="1rem"
      bottom="1rem"
      borderRadius="50%"
      width="20px"
      height="40px"
      padding="0"
      zIndex="20"
      ref={btnRef}
      backgroundColor="#997a5e"
      onClick={onOpen}
      alignItems="center"
      justifyContent="center"
    >
      <HamburgerIcon filter="invert(100%)" />
    </Button>
  );
};

export default DrawerButton;
