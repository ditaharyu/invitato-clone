import React, { useEffect, useState } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, DrawerOverlay, Text, useMediaQuery, useDisclosure, Box, Divider, Link, DrawerFooter } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [mediaQuery] = useMediaQuery('(min-width: 1025px)');

  useEffect(() => {
    setIsDesktop(mediaQuery);
  }, [mediaQuery]);

  return (
    <>
      <Button
        position="fixed"
        display="flex"
        left="1rem"
        bottom="1rem"
        borderRadius="50%"
        width="40px"
        height="40px"
        padding="0"
        zIndex="20"
        backgroundColor="#997a5e"
        alignItems="center"
        justifyContent="center"
        ref={btnRef}
        onClick={onOpen}
      >
        <HamburgerIcon filter="invert(100%)" />
      </Button>
      <Drawer
        size={isDesktop ? "sm" : "xs"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#F9F7F4">
          {/* <DrawerCloseButton /> */}
          <DrawerBody textAlign="right">
            <Box
              padding="2rem 1rem">
              <Text fontFamily="Butler" fontWeight="300" fontSize="34px" fontStyle="italic">#TImetoshaRE</Text>
              <Box
                paddingTop={5}
                paddingBottom={2}
                borderBottom="1px"
                borderStyle="solid"
                borderColor="black">
                  <Text fontFamily="Newsreader" fontWeight="300" letterSpacing={2}>
                    <Link textDecoration="none" href='#couple_section'>
                      BRIDE & GROOM
                    </Link>
                  </Text>
              </Box>
              <Box
                paddingTop={5}
                paddingBottom={2}
                borderBottom="1px"
                borderStyle="solid"
                borderColor="black">
                  <Text fontFamily="Newsreader" fontWeight="300" letterSpacing={2}>
                    <Link textDecoration="none" href='#livestream_section'>
                      LIVE STREAMING
                    </Link>
                  </Text>
              </Box>
              <Box
                paddingTop={5}
                paddingBottom={2}
                borderBottom="1px"
                borderStyle="solid"
                borderColor="black">
                  <Text fontFamily="Newsreader" fontWeight="300" letterSpacing={2}>
                    <Link textDecoration="none" href='#giftcard_section'>
                      WEDDING GIFT
                    </Link>
                  </Text>
              </Box>
            </Box>
          </DrawerBody>
          <DrawerFooter textAlign="center">
            <Text fontFamily="Newsreader" fontWeight="100" fontSize="sm">
              Created with Love by Invitato<br/>
              2024 Tiffany & Jared. All Rights Reserved
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
