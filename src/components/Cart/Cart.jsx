import React, { useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Text,
    Tfoot,
    Tr,
    Th,
    Flex,
    Heading,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Link as ChakraLink
  } from '@chakra-ui/react'

import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import './Cart.css';


export const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useContext(Context);

    if(cart.length === 0) {
    return(
        <Flex direction={'column'} textAlign={'center'} mt={10}>
            <Text>No hay productos en el carrito</Text>
            <ChakraLink as={Link} to='/' color={'blue'}>Volver</ChakraLink>
        </Flex>
    )}else{
        return (
            <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                <Tr>
                    <Th>Producto</Th>
                    <Th>Cantidad</Th>
                    <Th>Precio</Th>
                    <Th>Subtotal</Th>
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                    {
                        cart.map((prod) => (
                    <Tr key={prod.id}>
                        <Td>{prod.nombre}</Td>
                        <Td>{prod.quantity}</Td>
                        <Td>${prod.precio}</Td>
                        <Td>${prod.precio * prod.quantity}</Td>
                        <Td><Button onClick={() => removeItem(prod.id)} backgroundColor={'transparent'}><MdDelete />
                        </Button></Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
            <Flex className="cart-summary">
                <Heading>Total: ${getTotalPrice()}</Heading>
                <Button onClick={clearCart}>Vaciar carrito</Button>
                <Text><Link to={'/checkout'} colorScheme='blue' className="checkout-btn">Finalizar Compra</Link></Text>
            </Flex>
            </TableContainer>
          )
    }
  
}
