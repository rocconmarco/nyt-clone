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
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, login } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
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
      </Box>
      <Button
        w={350}
        color="white"
        bg={"black"}
        _hover={{ bg: "black" }}
        _active={{ bg: "gray" }}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
