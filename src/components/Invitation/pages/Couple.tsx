"use client";

import { Box, Text, Image, Flex, Link } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="couple_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        paddingTop="2rem"
        paddingBottom="3rem"
        textAlign="center"
      >
        <Flex
          height="100%"
          direction="column"
          alignItems="center"
          padding="0 2rem"
        >
          <Text
            fontFamily="Poppins"
            fontWeight="700"
            color="black"
            fontSize="medium"
            textAlign="center"
            marginBottom="3rem"
            letterSpacing={1}
          >
            MEET THE BRIDE & GROOM
          </Text>
          <Image
            boxSize="280px"
            objectFit="cover"
            src="/photo-3.jpg"
            alt="couple"
          />
          <Box paddingTop="3rem" paddingBottom="1rem">
            <Text fontFamily="Butler" fontWeight="light" fontSize="28px">TIFFANY SMITH</Text>
            <Link href="https://www.instagram.com/tiffanyinvitato">
              <Text fontFamily="Butler" fontWeight="light" fontSize="xl">@tiffanyinvitato</Text>
            </Link>
            <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px" color="grey" fontStyle="italic">
              The Daughter of<br/>
              Mr. Smith & Mrs. Bellyna
            </Text>
          </Box>
          <Box paddingTop="2rem" paddingBottom="1rem">
            <Text fontFamily="Butler" fontWeight="light" fontSize="28px">ROBIN JARED LUCAS</Text>
            <Link href="https://www.instagram.com/jaredinvitato">
              <Text fontFamily="Butler" fontWeight="light" fontSize="xl">@jaredinvitato</Text>
            </Link>
            <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px" color="grey" fontStyle="italic">
              The Son of<br/>
              Mr. Lucas & Mrs. Anita
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
