import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { CircularProgress, Box, Image } from "@chakra-ui/react";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const dataProductos = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();
    dataProductos
      .then((prod) => setProductos(prod))
      .catch((error) => console.log("Error", error))
      .finally(() => setLoading(false));
  }, [categoryId]);



  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      backgroundColor={"#F8FBDE"}
    >   
      {
        loading ? 
      <CircularProgress isIndeterminate color='yellow.300' />
      :
      <ItemList productos={productos} />
        }
    </Flex>
  );
};

export default ItemListContainer;
