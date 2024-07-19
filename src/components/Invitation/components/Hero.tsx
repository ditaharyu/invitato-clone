"use client";

// import ArrowDown from "@/assets/svg/arrowDown";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const images = ["/satu.jpg", "/dua.jpg", "/tiga.jpg", "/coverLeft.jpeg", "/coverRight.jpeg"];

const Hero = (): JSX.Element => {
  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage="linear-gradient(rgb(50 48 48 / 50%), rgb(50 48 48 / 50%)), url('/photo-2.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      padding="2rem"
    >
      <Text marginTop="60px" letterSpacing="2px" marginBottom="8px" fontWeight="bold" fontFamily="Poppins" color="white" fontSize="medium" textAlign="center">
        WEDDING ANNOUNCEMENT
      </Text>
      <Box textAlign="center" height="70%" marginBottom="-30px" display="flex" justifyContent="center" alignItems="center">
        <div>
          <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="3xl">
            TIFFANY & JARED
          </Text>
          <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="3xl" textAlign="center">
            #TImetoshaRE
          </Text>
        </div>
      </Box>
      <Box
        textAlign="right">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Link
            href="#welcome_section">
            <Button
              as="a"
              backgroundColor="transparent"
              border="0px"
              color="white"
              fontFamily="Poppins"
              fontSize="xl"
              _hover={{ backgroundColor: "transparent", color: "white", textDecoration: "none" }}
            >
              Scroll to Element
            </Button>
          </Link>        
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
