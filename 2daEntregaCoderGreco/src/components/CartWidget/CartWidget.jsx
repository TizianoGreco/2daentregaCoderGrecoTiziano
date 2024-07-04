import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Box, Flex } from '@chakra-ui/react';
const CartWidget = () => {
  return (
    <Flex align="center" mr={4}>
      <FaShoppingCart size={35} />
      <Box ml={2}>
        <p>2</p>
      </Box>
    </Flex>
  );
};

export default CartWidget;
