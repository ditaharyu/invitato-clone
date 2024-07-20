"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/photo-1.jpg",
  "/photo-2.jpg",
  "/photo-3.jpg",
  "/photo-4.jpg",
  "/photo-5.jpg"
];

const Hero = (): JSX.Element => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const controls = useAnimation();

  // Function to handle the background image change
  const changeImage = () => {
    setBackgroundImage(prev => {
      const currentIndex = images.indexOf(prev);
      const nextIndex = (currentIndex + 1) % images.length;
      return images[nextIndex];
    });
  };

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(changeImage,5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Zoom-in animation effect
  useEffect(() => {
    controls.start({
      scale: [1, 1.25], // Slow zoom-in effect
      transition: {
        duration: 25, // Duration for zoom and fade
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <Box
      height="100vh"
      width="100%"
      position="relative"
      overflow="hidden"
      padding="2rem"
    >
      <motion.div
        animate={controls}
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `linear-gradient(rgb(50 48 48 / 50%), rgb(50 48 48 / 50%)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        zIndex="1"
        textAlign="center"
      >
        <Text
          letterSpacing="2px"
          marginBottom="8px"
          fontWeight="bold"
          fontFamily="Poppins"
          color="white"
          fontSize="medium"
        >
          WEDDING ANNOUNCEMENT
        </Text>
        <Box
          height="80%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="4xl">
            TIFFANY & JARED
          </Text>
          <Text fontFamily="Newsreader" fontWeight="300" color="white" fontSize="4xl" fontStyle="italic">
            #TImetoshaRE
          </Text>
        </Box>
        <Box position="absolute" bottom="5rem" right="2rem">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Link href="#welcome">
              <Button
                as="a"
                backgroundColor="transparent"
                border="0px"
                color="white"
                fontFamily="Poppins"
                fontWeight="bold"
                fontSize="14px"
                _hover={{ backgroundColor: "transparent", color: "white", textDecoration: "none" }}
              >
                SCROLL TO BEGIN <ChevronDownIcon boxSize={8}/>
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
