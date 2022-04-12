import './footer.css'

function Footer(){
    return(
        <footer>
            <div className="parteOne">
                <h1>YourTech</h1>
                <p>Contact Info</p>
                <p>17 XXXXXXXX, Brasil</p>
            </div>
            <div className="parteTwo">
                <h2>Pages</h2>
                <a href="/"><p>Home</p></a>
                <a href="ContactUs"><p>Contato</p></a>
                <a href="AboutUs"><p>Sobre nós</p></a>
            </div>
        </footer>
    );
}

export default Footer;