import { useCart } from "../context/CartContext";

const productos = [
    { id: 1, nombre: "Teclado", precio: 25 },
    { id: 2, nombre: "Mouse", precio: 15 },
    { id: 3, nombre: "Peluche", precio: 60 }
];

export default function Catalogo() {
    const { dispatch } = useCart();
    return (
        <div>
            <h2>Catálogo</h2>
            {productos.map((p) => (
                <div key={p.id}>
                    {p.nombre} - ${p.precio}
                    <button onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
                        Agregar
                    </button>
                </div>
            ))}
        </div>
    );
}