export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isCartItemExist = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(isCartItemExist) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem    
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    ); 

    if(exisitingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // base case
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    ); 
}