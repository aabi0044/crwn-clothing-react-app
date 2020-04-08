import {createSelector} from 'reselect';
const selectCart = state => state.cart
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        console.log("selectCartItemsCount",cartItems);
      return  cartItems.reduce(
            (accumalatedQunatity, cartItem) => accumalatedQunatity + cartItem.quantity,
            0
        )
    }
   
);
export const selectCartToatal = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalatedQunatity, cartItem) =>
         accumalatedQunatity + cartItem.quantity * cartItem.price,
        0
    )
)