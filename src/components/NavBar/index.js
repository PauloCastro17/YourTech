import './navbar.css'

function NavBar() {
    return(
        <div className="navbarHeader">
            <h1>YourTech</h1>
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/Produtos/:idProduto"><li>Produtos</li></a>
                <a href="/ContactUs"><li>Contato</li></a>
                <a href="/AboutUs"><li>Sobre Nós</li></a>
            </ul>
        </div>
    );
}

export default NavBar;