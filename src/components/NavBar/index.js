import './navbar.css'

function NavBar() {
    return(
        <div className="navbarHeader">
            <h1>YourTech</h1>
            <ul>
                <a href="#home"><li>Home</li></a>
                <a href="#"><li>Produtos</li></a>
                <a href="#"><li>Contato</li></a>
                <a href="#"><li>Sobre Nós</li></a>
            </ul>
        </div>
    );
}

export default NavBar;