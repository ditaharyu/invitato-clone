"use client";

import { Box, Text, Image, Flex, Link } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="2rem"
        textAlign="center"
      >
        <Flex
          height="100%"
          direction="column"
          alignItems="center"
        >
          <Text
            fontWeight="bold"
            fontFamily="Poppins"
            color="black"
            fontSize="medium"
            textAlign="center"
            mb={4}
          >
            MEET THE BRIDE AND GROOM
          </Text>
          <Image
            boxSize="280px"
            objectFit="cover"
            src="/photo-3.jpg"
            alt="couple"
          />
          <Box paddingTop="3rem" paddingBottom="1rem">
            <Text>TIFFANY SMITH</Text>
            <Link href="https://www.instagram.com/tiffanyinvitato">@tiffanyinvitato</Link>
            <Text>
              The Daughter of<br/>
              Mr. Smith & Mrs. Bellyna
            </Text>
          </Box>
          <Box paddingTop="2rem" paddingBottom="1rem">
            <Text>ROBIN JARED LUCAS</Text>
            <Link href="https://www.instagram.com/jaredinvitato">@jaredinvitato</Link>
            <Text>
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
