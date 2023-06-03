import React from 'react'
import Button from '@mui/material/Button';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './Item.styles';

import StarIcon from '@mui/icons-material/Star';

type Props ={
    item: CartItemType;
    handleAddToCart:(clickedItem: CartItemType) => void;
}

const Item : React.FC<Props> = ({item, handleAddToCart}) => {
  return (
    <Wrapper>
        <img src={item?.image} alt={item?.title} className='item-img'/>
        <div className="">
            <h3>{item?.title.split(" ").splice(0,2).join(" ")}</h3>
            <p>{item?.description.split(" ").splice(0,5).join(" ")}</p>
            <div className="rate">
                <h3>{item?.price}$</h3>
                <h3 className='star'><StarIcon/> </h3>
                {/* <h3 className='star'>{item?.rating?.rate}<StarIcon/> </h3> */}
            </div>
            
        </div>
        <Button onClick={()=>{handleAddToCart(item)}} >Add To Cart</Button>
    </Wrapper>
  )
}

export default Item;