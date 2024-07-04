// src/components/PageNotFound.jsx
import React from "react";
import { Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="2xl">404 - Página no encontrada</Heading>
      <Text mt={4} fontSize="xl">
        Parece que has llegado a una página que no existe.
      </Text>
      <Button
        as={RouterLink}
        to="/"
        colorScheme="blue"
        mt={8}
        size="lg"
      >
        Volver a la página principal
      </Button>
    </Flex>
  );
};

export default PageNotFound;
