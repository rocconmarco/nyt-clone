import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const LeftSideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [authUser] = useAuthState(auth)
  const navigate = useNavigate()

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
            {authUser ? (
                <Button variant="outline" mr={3} onClick={handleLogout} isLoading={isLoggingOut}>
                <Box mr={2}>
                    <RiLogoutBoxLine fontSize={20}/>
                </Box>
              Logout
            </Button>
            ) : <Button variant="outline" mr={3} onClick={() => navigate("/auth")}>
            <Box mr={2}>
                <RiLoginBoxLine fontSize={20}/>
            </Box>
          Log in
        </Button>}
            
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftSideDrawer;
