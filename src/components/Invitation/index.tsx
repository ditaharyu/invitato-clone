import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";

const Invitation = (): JSX.Element => {
  return (
    <Box height="100%" width="100%" overflowY="auto">
      <Hero />
      <Welcome />
    </Box>
  );
};

export default Invitation;