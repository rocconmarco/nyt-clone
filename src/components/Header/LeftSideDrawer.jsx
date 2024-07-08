import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const LeftSideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const authUser = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const { handleLogout, isLoggingOut } = useLogout();

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
          <DrawerHeader>
            {authUser ? `Hello, ${authUser.firstName}.` : "The New York Clone"}
          </DrawerHeader>

          <DrawerBody>
            <Button
              variant={"ghost"}
              w={"100%"}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            {authUser ? (
              <>
                <Button
                  variant={"ghost"}
                  w={"100%"}
                  onClick={() => navigate("/members")}
                >
                  My favorites
                </Button>
              </>
            ) : null}

            <Button variant={"ghost"} w={"100%"} onClick={() => navigate("/about")}>
              About
            </Button>
          </DrawerBody>

          <DrawerFooter>
            {authUser ? (
              <Button
                variant="outline"
                mr={3}
                onClick={handleLogout}
                isLoading={isLoggingOut}
              >
                <Box mr={2}>
                  <RiLogoutBoxLine fontSize={20} />
                </Box>
                Logout
              </Button>
            ) : (
              <Button
                variant="outline"
                mr={3}
                onClick={() => navigate("/auth")}
              >
                <Box mr={2}>
                  <RiLoginBoxLine fontSize={20} />
                </Box>
                Log in
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftSideDrawer;
