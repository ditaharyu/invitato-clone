import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Couple from "./components/Couple";
import Detail from "./components/Detail";
import Giftcard from "./components/Giftcard";
import Youtube from "./components/Youtube";
import Lovestory from "./components/Lovestory";
import Wishes from "./components/Wishes";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

const Invitation = (): JSX.Element => {
  return (
    <Box height="100%" width="100%" overflowY="auto">
      <Hero />
      <Welcome />
      <Couple />
      <Detail />
      <Giftcard />
      <Youtube />
      <Lovestory />
      <Wishes />
      <Countdown />
      <Footer />
    </Box>
  );
};

export default Invitation;