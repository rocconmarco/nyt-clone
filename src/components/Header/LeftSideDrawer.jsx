import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const LeftSideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const {handleLogout, isLoggingOut} = useLogout()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant={"ghost"}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleLogout} isLoading={isLoggingOut}>
                <Box mr={2}>
                    <RiLogoutBoxLine fontSize={20}/>
                </Box>
              Logout
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftSideDrawer;