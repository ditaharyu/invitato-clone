"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const images = ["/satu.jpg", "/dua.jpg", "/tiga.jpg", "/coverLeft.jpeg", "/coverRight.jpeg"];

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        height="100vh"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="42px"
        textAlign="center"
      >
        <Text fontWeight="bold" fontFamily="Poppins" color="black" fontSize="medium" textAlign="center">
          DEAR MR-MRS-MS,
          <br/>
          FAMILY & FRIENDS
        </Text>
        <Text padding="2rem 0" fontFamily="Butler" color="black" fontWeight="bold" textAlign="center" fontSize="3xl">
          Welcome to <br/>
          Tiffany & Jared’s <br/>
          Wedding Website
        </Text>
        <Text fontFamily="Newsreader" color="black">
          Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
        </Text>
        <Box padding="2rem 0" height="50%" justifyContent="center" alignItems="center">
          Image Slider
        </Box>      
      </Box>
    </div>
  );
};

export default Hero;
