import { useCart } from "../context/CartContext";

export default function Carrito() {
    const { items, dispatch } = useCart();
    return (
        <div>
            <h2>Carrito</h2>
            {items.map((i) => (
                <div key={i.id}>
                    {i.nombre} x{i.qty}
                    <button
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: i.id })}
                    >
                        Quitar
                    </button>
                </div>
            ))}
        </div>
    );
}