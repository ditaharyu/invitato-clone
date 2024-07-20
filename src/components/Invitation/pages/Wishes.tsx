"use client";

import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="wishes_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="#F9F7F4"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="2rem 3rem">
        <Text
          fontFamily="Butler"
          fontWeight="300"
          fontSize="32px"
          textAlign="center"
          mb={4}>
          Prayers & Wishes
        </Text>
        <Text
          fontFamily="Newsreader"
          fontWeight="300"
          fontSize="18px"
          textAlign="center">
          Please leave your sincere prayers and wishes to us and our family:
        </Text>
        <Box padding="2rem 4rem">
          <FormControl fontFamily="Newsreader">
            <Input
              border="1px solid"
              borderRadius="0"
              backgroundColor="white"
              placeholder="Name"
              margin="7px 0"
              type='text' />
            <Input
              border="1px solid"
              borderRadius="0"
              backgroundColor="white"
              placeholder="The Relationship"
              margin="7px 0"
              type='text' />
            <Textarea
              border="1px solid"
              borderRadius="0"
              backgroundColor="white"
              margin="7px 0"
              placeholder='Prayers & Wishes' />
          </FormControl>
          <Box
            marginTop=".5rem"
            textAlign="right">
            <Button
              border="1px black solid"
              borderRadius="0"
              backgroundColor="#cdc1b1"
              color="white"
              size="sm"
              padding="0 2rem">
              <Text fontFamily="Newsreader" fontWeight="100" fontStyle="italic" fontSize="18px">Submit</Text>
            </Button>
          </Box>
        </Box>
        <Box textAlign="center">
          <Text>Hi, Tiffany and Jared!</Text>
          <Text>- Invitato, Web Invites</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
