import React, { useContext, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Input,
    Heading,
    Button,
    Box,
  } from '@chakra-ui/react'
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [ error, setError ] = useState({})
    const navigate = useNavigate()
    const { cart, getTotalPrice, clearCart } = useContext(Context)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name  = 'Tenés que agregar un nombre'
        }else if(user.name.length < 3 || user.name.length > 15) {
            errors.name = "El nombre debe tener al menos 3 caracteres y un máximo de 15"
        }
        if(!user.email){
            errors.email = 'Tenés que ingresar un email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)){
            errors.email = 'Tenés que ingresar un email válido'
        }
        if(!user.repeatedEmail) {
            errors.repeatedEmail  = 'Tenés que volver a ingresar el email'
        }else if(user.email !== user.repeatedEmail) {
            errors.repeatedEmail = "Los emails no coinciden"
        }
        if(!user.phone){
            errors.phone = 'Tenés que agregar un teléfono'
        }else if(user.phone.length < 8){
            errors.phone = 'Tenés que ingresar un teléfono válido'
        }
        setError(errors)
        console.log(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if(!validateForm()){
            return
        }
        if(cart.length === 0) {
            console.log('el carrito está vacío')
            return
        }
        const ordersCollection = collection(db, 'orders')

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotalPrice(),
                fechaDeCompra: Timestamp.now()
            }

            for(const item of cart) {
            const productRef = doc(db, 'productos', item.id)
            const productDoc = await getDoc(productRef)
            const currentStock = productDoc.data().stock

            if(currentStock < item.quantity){
                swal(`No hay stock suficiente de ${item.nombre}`)
            }else {
                await updateDoc(productRef, {
                stock: currentStock - item.quantity
                    })
                    const orderRef = await addDoc(ordersCollection, order)
                    clearCart()
                    swal(`Compra existosa, el id es: ${orderRef.id}`)
                } 
            }
            
           
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} w={'100%'}>
        <Box w={'50%'} textAlign={'center'}>
            <Heading my={5} color={'#f8c8a0'}>Datos de facturación</Heading>
            <FormControl isInvalid={Object.keys(error).length > 0}>
                <Input 
                    type='text' 
                    name='name' 
                    placeholder='Nombre' 
                    sx={{
                        '::placeholder': {
                            color: '#f8c8a0',
                        },
                    }}
                    onChange={updateUser} />
                <FormErrorMessage mb={2}>{error.name}</FormErrorMessage>
                <Input 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    sx={{
                        '::placeholder': {
                            color: '#f8c8a0',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.email}</FormErrorMessage>
                <Input 
                    type='email'
                    name='repeatedEmail' 
                    placeholder='Repetir email'
                    sx={{
                        '::placeholder': {
                            color: '#f8c8a0',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.repeatedEmail}</FormErrorMessage>
                <Input 
                    type='text' 
                    name='phone' 
                    placeholder='Teléfono' 
                    sx={{
                        '::placeholder': {
                            color: '#f8c8a0',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.phone}</FormErrorMessage>
                <Flex justify={'center'} align={'center'}>
                    <Button 
                        bg={'#f8c8a0'} 
                        onClick={getOrder} 
                        mt={2}
                        _hover={{
                            backgroundColor: '#f8c8a0',
                            color: 'white',
                        }}
                        >
                            Finalizar compra
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    </Flex>
  )
}

export default Checkout