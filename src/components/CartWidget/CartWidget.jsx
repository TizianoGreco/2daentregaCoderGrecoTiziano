import React, { useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Box, Flex } from '@chakra-ui/react';
import Context from "../../context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { getQuantity } = useContext(Context);

  return (
    <Flex align="center" mr={4}>
      <Link to='/cart'>
      <FaShoppingCart size={24} />
      </Link>
      <Box ml={2}>
        <p>{getQuantity()}</p>
      </Box>
    </Flex>
  );
};

export default CartWidget;
