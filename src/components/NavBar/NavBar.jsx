import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
function NavBar() {
return (
    <nav className="navBar">
        <h2 className="titulo">Umare</h2>
        <ul className="lista">
            <li className="itemLista"><a href='#' className='link'>Inicio</a></li>
            <li className="itemLista"><a href='#' className='link'>Productos</a></li>
            <li className="itemLista"><a href='#' className='link'>Nosotros</a></li>
        </ul>
        <CartWidget/>
    </nav>
);
}

export default NavBar;