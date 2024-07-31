import React, { useContext, useState } from 'react'
import { Flex, Card, Image, CardBody, CardFooter, Heading, Stack, Button, Text, Divider, ButtonGroup, Link as ChakraLink, Center } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
    
  const { addItem } = useContext(Context);
    const [quantity, setQuantity] = useState(0)
    const OnAdd = (count) => {
      const item = {
        id: product.id,
        nombre: product.nombre,
        precio: product.precio
      }
      setQuantity(count)
      addItem(item, count)
        toast(`Agregaste ${count} productos al carrito`)
    }

  return (
    <Flex justify={'center'} align={'center'}>
    <Card maxW='sm' m={3} color={'Black'} backgroundColor={'#00000'}>
  <CardBody>
    <Image
      src={product.img}
      alt='-'
      w={'350px'}
      h={'350px'}
      objectFit={'cover'}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.nombre}</Heading>
      <Text>
        {product.descripcion}
      </Text>
      <Text color='Black' fontSize='2xl'>
        ${product.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    {
    quantity === 0 ?
    <ButtonGroup spacing='2'>
    <ItemCount initialValue={1} stock={product.stock} OnAdd={OnAdd}/>
    </ButtonGroup>
    :
    <Flex direction={'column'} >
    <ChakraLink as={Link} to='/cart'>Ir al carrito</ChakraLink>
    <ChakraLink as={Link} to='/'>Seguir Comprando</ChakraLink>
    </Flex>
}
  </CardFooter>
  <ToastContainer />
</Card>
    </Flex>
  )
}

export default ItemDetail
