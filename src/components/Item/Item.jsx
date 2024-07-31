import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text,Button, ButtonGroup, Divider, Image } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({ nombre, img, id, precio, stock }) => {
  const OnAdd = (count) => {
    console.log(count);
    toast(`Agregaste ${count} productos al carrito`);
  };

  return (
    <Card maxW='sm' m={3} color={'Black'} backgroundColor={'#ffffff'}>
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          w={'350px'}
          h={'350px'}
          objectFit={'cover'}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>

          <Text color='black' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='black' colorScheme='Black' bg={'white'}>
            <Link to={`/producto/${id}`}>Ver detalle</Link>
          </Button>
          {/* <ItemCount initialValue={1} stock={stock} OnAdd={OnAdd} /> */}
        </ButtonGroup>
      </CardFooter>
      <ToastContainer />
    </Card>
  );
};

export default Item