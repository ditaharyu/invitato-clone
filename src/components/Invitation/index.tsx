import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./pages/Hero";
import Welcome from "./pages/Welcome";
import Couple from "./pages/Couple";
import Detail from "./pages/Detail";
import Giftcard from "./pages/Giftcard";
import Youtube from "./pages/Youtube";
import Lovestory from "./pages/Lovestory";
import Wishes from "./pages/Wishes";
import Countdown from "./pages/Countdown";
import Footer from "./pages/Footer";

const Invitation = (): JSX.Element => {
  return (
    // <Box height="100%" width="100%" overflowY="auto">
    <Box height="100%" width="100%">
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