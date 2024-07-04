import React from "react";
import { getProductById } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CircularProgress, Flex } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.log("Error", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box backgroundColor={"#F8FBDE"}>
        {
      loading ? (
        <Flex justify="center" align="center" height="100vh">
          <CircularProgress isIndeterminate color="Yellow.300" />
        </Flex>
      )
      :
      <ItemDetail product={product} />
        }
    </Box>
  );
};

export default ItemDetailContainer;
