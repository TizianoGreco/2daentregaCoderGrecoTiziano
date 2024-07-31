import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({ initialValue, stock, OnAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <div className="item-count-container">
      <button onClick={decrementar}>-</button>
      <span className="item-count">{count}</span>
      <button onClick={incrementar}>+</button>
      <Button className="add-to-cart" onClick={() => OnAdd(count)}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount
