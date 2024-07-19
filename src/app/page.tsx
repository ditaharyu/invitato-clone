// app/page.tsx
'use client'
import LeftView from "@/components/LeftView";
import Invitation from "@/components/Invitation";
import RightView from "@/components/RightView";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isDesktop] = useMediaQuery('(min-width: 1024px)');
  const openInvitation = () => {
    setShowMenu(true);
    // setPlayMusic(true);
  }

  return (
    <main>
      <Flex direction="row">
        <Box width={["0%", "calc(100% - 500px)"]} display={["none", "block"]} position="fixed" overflow="hidden" zIndex="10" height="100vh">
          <LeftView />
        </Box>
        <Box width={["100%", "500px"]} overflowY="auto" margin={isDesktop ? "0px 0px 0px calc(100% - 500px)" : "0 auto"} position="relative">
          {showMenu ? (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 1.5,
              }}
            >
              <Invitation />
            </motion.div>
          ) : ( <RightView handleOpen={openInvitation} /> )
          }
        </Box>
      </Flex>
    </main>
  )
}