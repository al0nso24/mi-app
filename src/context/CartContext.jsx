import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existente = state.find((i) => i.id === action.payload.id);
            if (existente) {
                return state.map((i) =>
                    i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...state, { ...action.payload, qty: 1 }];
        }
        case "REMOVE_ITEM":
            return state.filter((i) => i.id !== action.payload);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [items, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext.Provider value={{ items, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}