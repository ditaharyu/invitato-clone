// app/page.tsx
'use client'
import LeftView from "@/components/LeftView";
import Invitation from "@/components/Invitation";
import RightView from "@/components/RightView";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import DrawerButton from "@/components/SidebarButton";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [mediaQuery] = useMediaQuery('(min-width: 1025px)');

  useEffect(() => {
    setIsDesktop(mediaQuery);
  }, [mediaQuery]);

  const openInvitation = () => {
    setShowMenu(true);
    // setPlayMusic(true);
  }

  return (
    <main>
      <Flex direction="row">
        <Box width={["0%", "calc(100% - 500px)"]} display={["none", "block"]} position="fixed" overflow="hidden" zIndex="10" height="100vh">
          {isDesktop ?
            <LeftView /> : <></>
          }
        </Box>
        <Box
          width="500px"
          margin={isDesktop ? "0px 0px 0px calc(100% - 500px)" : "0 auto"}
          position="relative"
        >
          <Box overflowY="hidden">
            <AnimatePresence mode="wait">
              {showMenu ? (
                <>
                  <motion.div
                    key="invitation"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 15,
                      duration: 0.5,
                    }}
                  >
                    <Invitation />
                  </motion.div>
                  <DrawerButton />
                  <Sidebar />
                </>
              ) : (
                <motion.div
                  key="rightView"
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    duration: 0.5,
                  }}
                >
                  <RightView handleOpen={openInvitation} />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Flex>
    </main>
  );
}
