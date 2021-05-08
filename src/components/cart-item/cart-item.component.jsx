import React from 'react';

// import './cart-item.styles.scss';

import {CartItemContainer, CartItemImage, ItemDetailsContainer} from "./cart-item.styles";

const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item'/>
      <ItemDetailsContainer className='item-details'>
          <span>{name}</span>
          <span>
              {quantity} x ${price}
          </span>
      </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;