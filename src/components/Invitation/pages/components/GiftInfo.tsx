import React, { useEffect, useState } from 'react';
import { Button, Image, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, DrawerOverlay, Text, useMediaQuery, useDisclosure, Box, useClipboard, useToast, Flex } from '@chakra-ui/react';
import CopyText from './CopyText';

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [mediaQuery] = useMediaQuery('(min-width: 1025px)');

  const number = "01234567";
  const name = "Tiffany Jared";
  const name2 = "Tiffany & Jared";
  const address = "Jalan Road 700, Kelurahan, Kecamatan, Kota";

  useEffect(() => {
    setIsDesktop(mediaQuery);
  }, [mediaQuery]);

  return (
    <>
      <Button
        padding="1rem 2rem"
        size="sm"
        border="1px solid black"
        borderRadius={0}
        backgroundColor="#F9F7F4"
        ref={btnRef}
        onClick={onOpen}>
        <Text fontFamily="Newsreader" fontWeight="100" fontSize="18px" fontStyle="italic">Send Gift</Text>
      </Button>
      <Drawer
        size={isDesktop ? "sm" : "xs"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody textAlign="center" padding="0">
            <Box paddingTop="1rem">
              <Text padding="2rem 4rem" fontFamily="Newsreader" fontWeight="400" fontSize="md">
                For beloved ones who may want to show your sincere love by sending gift, please kindly tap the button down below:
              </Text>
              <Box
                padding="1rem 2rem"
                textAlign="left"
                borderStyle="solid"
                borderTop="1px"
                borderBottom="1px"
                backgroundColor="#F9F7F4">
                <Text fontFamily="Butler" fontWeight="300" fontSize="2xl">Bank Transfer</Text>
              </Box>
              <Box padding="2rem 0">
                <Flex justifyContent="center">
                  <Image
                    width="20%"
                    objectFit="cover"
                    src="/bank-bri.png"
                    alt="bank-bri"
                    marginBottom=".5rem"
                  />
                </Flex>
                <CopyText textUp={number} textDown={name} />
              </Box>

              <Box
                padding="1rem 2rem"
                textAlign="left"
                borderStyle="solid"
                borderTop="1px"
                borderBottom="1px"
                backgroundColor="#F9F7F4">
                <Text fontFamily="Butler" fontWeight="300" fontSize="2xl">Gift</Text>
              </Box>
              <Box padding="2rem 0">
                <CopyText textUp={name2} textDown={address} />
              </Box>

              <Box
                padding="1rem 2rem"
                textAlign="left"
                borderStyle="solid"
                borderTop="1px"
                borderBottom="1px"
                backgroundColor="#F9F7F4">
                <Text fontFamily="Butler" fontWeight="300" fontSize="2xl">Confirmation</Text>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
