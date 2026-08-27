import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { items } = useCart();
    const totalItems = items.reduce((acc, i) => acc + i.qty, 0);
    return (
        <nav>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/carrito">Carrito ({totalItems})</Link>
        </nav>
    );
}