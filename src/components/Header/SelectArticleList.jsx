import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useMostPopularArticles from "../../hooks/useMostPopularArticles";

const SelectArticleList = () => {
  const { handlePeriodChange } = useMostPopularArticles();

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Best Articles
      </MenuButton>
      <MenuList>
      <MenuOptionGroup defaultValue={'1'} type="radio">
        <MenuItemOption value="1" onClick={() => handlePeriodChange(1)}>1 day</MenuItemOption>
        <MenuItemOption value="7" onClick={() => handlePeriodChange(7)}>7 days</MenuItemOption>
        <MenuItemOption value="30" onClick={() => handlePeriodChange(30)}>30 days</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SelectArticleList;
