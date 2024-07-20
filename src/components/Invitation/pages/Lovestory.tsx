"use client";

import { Box, Text, Image, Flex, Link, Button } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="lovestory_section">
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
            fontFamily="Butler"
            fontWeight="600"
            fontSize="28px"
            textAlign="center"
            mb={4}
          >
            Tiffany & Jared are<br/>
            Getting Married!
          </Text>
          <Image
            height="350px"
            objectFit="cover"
            src="/photo-5.jpg"
            alt="couple"
          />
          <Link
            paddingTop="2rem"
            textDecoration="underline"
            fontWeight="bold"
            href="https://www.youtube.com/watch?v=WEC5RezD5jU" target="_blank">
            <Text letterSpacing={2}>WATCH OUR VIDEO</Text>
          </Link>
          <Box paddingTop="2rem" paddingBottom="1rem">
            <Text>9 APRIL 2018</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin malesuada sapien, sit amet sodales ex sagittis quis. Suspendisse facilisis mi volutpat urna pulvinar, quis aliquet dui lobortis. Sed egestas consequat risus, eu mollis est tincidunt accumsan.
            </Text>
          </Box>
          <Box>
            <Button>Next</Button>
            <Button>Prev</Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
