import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import bookListValues from "../../utils/bookListValues";

const SelectBookList = () => {
  return (
    <Box display={{ base: "none", md: "block" }}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Combined Print & E-book Fiction
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            defaultValue={"combined-print-and-e-book-fiction"}
            type="radio"
          >
            {bookListValues.map((option) => (
              <MenuItemOption key={option.id} value={option.value}>
                {option.title}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SelectBookList;
