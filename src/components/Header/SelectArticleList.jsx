import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useMostPopularArticles from "../../hooks/useMostPopularArticles";
import periodValues from '../../utils/periodValues'

const SelectArticleList = () => {
  const { handlePeriodChange } = useMostPopularArticles();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Best Articles
      </MenuButton>
      <MenuList>
      <MenuOptionGroup defaultValue={1} type="radio">
        {
          periodValues.map((option) => (
            <MenuItemOption key={option.id} value={option.value} onClick={() => handlePeriodChange(1)}>{option.title}</MenuItemOption>
          ))
        }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SelectArticleList;
