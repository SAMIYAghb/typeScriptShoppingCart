import React from 'react'
import Button from '@mui/material/Button';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './CartItem.styles';

type Props ={
  item: CartItemType;
  addToCart: (clickedItem: CartItemType)=>void;
  removeFromCart: (id: number)=>void;
}


const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
        <div>
          <h3>{item.title.split(" ").splice(0,2).join(" ")}</h3>
          <div className="cart-item-info">
            <p>Price:{item.price} $ </p>
            <p>Total: {(item.amount * item.price).toFixed(2)} $</p>
          </div>
        </div>
        <div className="buttons">
          <Button size="small"
          disableElevation
          variant='contained'
          onClick={()=>removeFromCart(item.id)}>
            -
          </Button>
          <p>{item.amount}</p>
          <Button size="small"
          disableElevation
          variant='contained'
          onClick={()=>addToCart(item)}>
            +
          </Button>       
        </div>
        <img src={item?.image} alt={item?.title} />
    </Wrapper>
  )
}

export default CartItem