"use client";

import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="#F9F7F4"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="2rem"
        textAlign="center">
        <Text>
          Prayers & Wishes
        </Text>
        <Text>
          Please leave your sincere prayers and wishes to us and our family:
        </Text>
        <Box padding="2rem 0">
          <FormControl>
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
          <Button
            border="1px black solid"
            borderRadius="0"
            backgroundColor="#cdc1b1"
            marginTop="10px"
            color="white">
            Submit
          </Button>
        </Box>
        <Box>
          <Text>Hi, Tiffany and Jared!</Text>
          <Text>- Invitato, Web Invites</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
