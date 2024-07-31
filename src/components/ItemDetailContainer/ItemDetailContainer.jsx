import React from "react";
import { getProductById } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CircularProgress, Flex } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const queryRef = doc(db, 'productos', productId)

      const response = await getDoc(queryRef)

      const newItem = {
        ...response.data(),
        id: response.id
      }

      setProduct(newItem)
      setLoading(false)
    }

    getData()
  }, []);

  return (
    <Box backgroundColor={"#ffffff"}>
        {
      loading ? (
        <Flex justify="center" align="center" height="100vh">
          <CircularProgress isIndeterminate color="Black" />
        </Flex>
      )
      :
      <ItemDetail product={product} />
        }
    </Box>
  );
};

export default ItemDetailContainer;
