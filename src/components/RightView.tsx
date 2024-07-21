import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

interface OpenProps {
  handleOpen: any;
}

const RightView = ({ handleOpen }: OpenProps): JSX.Element => {
  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage="linear-gradient(rgb(50 48 48 / 50%), rgb(50 48 48 / 50%)), url('/photo-2.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      padding="42px"
      textAlign="center"
    >
      <Text marginTop="60px" letterSpacing="2px" marginBottom="8px" fontWeight="bold" fontFamily="Poppins" color="white" fontSize="medium" textAlign="center">
        WEDDING ANNOUNCEMENT
      </Text>
      <Box height="70%" lineHeight="2.5rem" marginBottom="-80px" display="flex" justifyContent="center" alignItems="center">
        <div>
          <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="4xl">
            TIFFANY & JARED
          </Text>
          <Text fontFamily="Newsreader" fontWeight="300" color="white" fontSize="4xl" fontStyle="italic">
            #TImetoshaRE
          </Text>
        </div>
      </Box>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Button bgColor="#F9F7F4" onClick={handleOpen} borderRadius="none" minWidth="2rem" height="30px" padding="0 2.4rem">
          <Text fontFamily="Newsreader" fontWeight="300" fontStyle="italic">Open</Text>
        </Button>
      </motion.div>
    </Box>
  );
};

export default RightView;
