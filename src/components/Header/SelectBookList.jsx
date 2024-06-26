import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, Box, Flex, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SelectBookList = () => {
  return (
    <Box display={{base: 'none', md:'block'}}>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Best Sellers
        </MenuButton>
        <MenuList>
        <MenuOptionGroup defaultValue={'combined-print-and-e-book-fiction'} type="radio">
          <MenuItemOption value={'combined-print-and-e-book-fiction'}>Combined Print & E-Book Fiction</MenuItemOption>
          <MenuItemOption value={'combined-print-and-e-book-non-fiction'}> Combined Print & E-Book Nonfiction</MenuItemOption>
          <MenuItemOption value={'hardcover-fiction'}> Hardcover Fiction</MenuItemOption>
          <MenuItemOption value={'hardcover-nonfiction'}>Hardcover Nonfiction</MenuItemOption>
          <MenuItemOption value={'trade-fiction-paperback'}>Paperback Trade Fiction</MenuItemOption>
          <MenuItemOption value={'paperback-nonfiction'}>Paperback Nonfiction</MenuItemOption>
          <MenuItemOption value={'advice-how-to-and-miscellaneous'}>Advice, How-To & Miscellaneous</MenuItemOption>
          <MenuItemOption value={'childrens-middle-grade-hardcover'}>Children’s Middle Grade Hardcover</MenuItemOption>
          <MenuItemOption value={'picture-books'}>Children’s Picture Books</MenuItemOption>
          <MenuItemOption value={'series-books'}>Children’s & Young Adult Series</MenuItemOption>
          <MenuItemOption value={'young-adult-hardcover'}>Young Adult Hardcover</MenuItemOption>
        </MenuOptionGroup>

        </MenuList>
        
      </Menu>
    </Box>
  );
};

export default SelectBookList;
