import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from '../../redux/cart/cart.selector';


// import './cart-icon.styles.scss';

import {CartIconContainer, ShoppingIcon, ItemCount} from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden} >
        <ShoppingIcon />
        <ItemCount >
            {itemCount}
        </ItemCount>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);