import './NavBar.css';

function NavBar() {
return (
    <div className="navBar">
        <h2 className="titulo">Umare</h2>
        <ul className="lista">
            <li className="itemLista"><a href='#' className='link'>Inicio</a></li>
            <li className="itemLista"><a href='#' className='link'>Productos</a></li>
            <li className="itemLista"><a href='#' className='link'>Nosotros</a></li>
        </ul>
    </div>
);
}

export default NavBar;