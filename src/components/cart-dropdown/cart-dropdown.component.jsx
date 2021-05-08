import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selector";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

// import './cart-dropdown.styles.scss';

import {CartItemDropdown, CartItems, EmptyMessage, ButtonContainer} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => {

    return (
        <CartItemDropdown>
            <CartItems>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        :
                        <EmptyMessage>
                            Your cart is empty
                        </EmptyMessage>
                }
            </CartItems>
            <ButtonContainer/>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </CartItemDropdown>
    )
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));