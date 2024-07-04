import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Button } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, OnAdd}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
        <Button onClick={() => OnAdd(count)}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount