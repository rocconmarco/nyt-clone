import React from "react";
import { Menu, MenuButton, MenuList, Button, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import periodValues from '../../utils/periodValues'

const SelectArticleList = ({ selectedPeriod = periodValues[0], onPeriodChange }) => {
  const handleSelection = (value) => {
    const selected = periodValues.find(option => option.value === parseInt(value))
    if (selected && typeof onPeriodChange === 'function') {
      onPeriodChange(selected)
    } else {
      console.warn('onPeriodChange is not a function or is undefined');
    }
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPeriod?.title || 'Select Period'}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup 
          defaultValue={selectedPeriod?.value?.toString() || periodValues[0].value.toString()} 
          type="radio" 
          onChange={handleSelection}
        >
          {
            periodValues.map((option) => (
              <MenuItemOption key={option.id} value={option.value.toString()}>{option.title}</MenuItemOption>
            ))
          }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SelectArticleList;

