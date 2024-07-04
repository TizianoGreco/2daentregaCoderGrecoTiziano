import React from 'react'
import { Flex, Card, Image, CardBody, CardFooter, Heading, Stack, Button, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({product}) => {
    console.log(product)

    const OnAdd = (count) => {
        toast(`${count} Productos Agregados al carrito`)
    }

  return (
    <Flex justify={'center'} align={'center'}>
    <Card maxW='sm' m={3} color={'bLACK'} backgroundColor={'#F0DAB8'}>
  <CardBody>
    <Image
      src={product.img}
      alt='='
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
      <Text color='Yellow.600' fontSize='2xl'>
        ${product.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <ItemCount initialValue={1} stock={product.stock} OnAdd={OnAdd}/>
    </ButtonGroup>
  </CardFooter>
  <ToastContainer />
</Card>
    </Flex>
  )
}

export default ItemDetail
