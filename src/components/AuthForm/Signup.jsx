import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, signup } = useSignUpWithEmailAndPassword();
  return (
    <>
      <Box>
        <Text pb={1}>First name</Text>
        <Input
          type="text"
          fontSize={15}
          w={350}
          borderColor={"gray.400"}
          _hover={{ borderColor: "gray.400" }}
          value={inputs.firstName}
          onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
        />
      </Box>
      <Box>
        <Text pb={1}>Last name</Text>
        <Input
          type="text"
          fontSize={15}
          w={350}
          borderColor={"gray.400"}
          _hover={{ borderColor: "gray.400" }}
          value={inputs.lastName}
          onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
        />
      </Box>
      <Box>
        <Text pb={1}>Email</Text>
        <Input
          type="email"
          fontSize={15}
          w={350}
          borderColor={"gray.400"}
          _hover={{ borderColor: "gray.400" }}
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </Box>
      <Box>
        <Text pb={1}>Password</Text>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            fontSize={15}
            w={350}
            borderColor={"gray.400"}
            _hover={{ borderColor: "gray.400" }}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword(!showPassword)}
              _hover={{ bg: "transparent" }}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text as={'i'} pb={1} fontSize={'12px'}>The password must be at least 6 characters long.</Text>
      </Box>

      <Button
        w={350}
        color="white"
        bg={"black"}
        _hover={{ bg: "black" }}
        _active={{ bg: "gray" }}
        onClick={() => signup(inputs)}
        isLoading={loading}
      >
        Sign up
      </Button>
    </>
  );
};

export default Signup;
