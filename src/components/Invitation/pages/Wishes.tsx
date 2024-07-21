"use client";

import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

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
        <Flex justifyContent="center" alignItems="center">
          <Box paddingTop="1rem" width="70%">
            <FormControl fontFamily="Newsreader">
              <Input
                border="1px solid"
                borderRadius="0"
                backgroundColor="white"
                placeholder="Name"
                margin="7px 0"
                type="text"
                color='black'
              />
              <Input
                border="1px solid"
                borderRadius="0"
                backgroundColor="white"
                placeholder="The Relationship"
                margin="7px 0"
                type="text"
                color="black"
              />
              <Textarea
                border="1px solid"
                borderRadius="0"
                backgroundColor="white"
                margin="7px 0"
                placeholder="Prayers & Wishes"
                color="black"
              />
            </FormControl>
            <Box marginTop=".5rem" textAlign="right">
              <Button
                border="1px black solid"
                borderRadius="0"
                backgroundColor="#cdc1b1"
                color="white"
                size="sm"
                padding="0 2rem"
              >
                <Text fontFamily="Newsreader" fontWeight="100" fontStyle="italic" fontSize="18px">
                  Submit
                </Text>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
