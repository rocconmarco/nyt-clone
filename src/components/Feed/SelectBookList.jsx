import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import bookListValues from "../../utils/bookListValues";

const SelectBookList = ({ selectedBookList, onBookListChange }) => {
  const handleSelection = (value) => {
    const selected = bookListValues.find((option) => option.value === value);
    onBookListChange(selected);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedBookList?.title || "Select Book List"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue={selectedBookList?.value || bookListValues[0].value}
          type="radio"
          onChange={handleSelection}
        >
          {bookListValues.map((option) => (
            <MenuItemOption key={option.id} value={option.value}>
              {option.title}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SelectBookList;
