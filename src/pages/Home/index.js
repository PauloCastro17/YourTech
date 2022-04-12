import './home.css'

import NavBar from '../../components/NavBar' 

import cadeiraGamer from '../../assets/cadeiraGamer.png'
import headsetPrata from '../../assets/headsetPrata.png'
import smartWatch from '../../assets/smartWatch.png'

function Home(){
    return(
        <>
        <section id="home">
            <div className="containerHome">
                <NavBar/>
                <div className="rowHome">
                    <div className="textoHome">
                        <span>As melhores ofertas para você</span>
                        <h1>Explore nosos novos items 
                            para começar bem seu 2022
                        </h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </span>
                    </div>
                    <div className="imageHome">
                        <img src={cadeiraGamer} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="row2Home">
                <div className="image2Home">
                        <img src={headsetPrata} alt=""/>
                </div>
                <div className="texto2Home">
                    <h1>Design Moderno e robusto</h1>
                    <ul>
                        <li>Trazendo a melhor qualidade de som</li>
                        <li>Bateria duradoura </li>
                        <li>Acabamento em aço  </li>
                    </ul>
                    </div>
                </div>
        </section>
        <section id="produtos">
            <div className="row3Home">
                <h1>Conheça os produtos</h1>
                <div className="listProduto">
                    <div className="produto">
                        <img src={smartWatch} alt=""/>
                        <div className="legendaProduto">
                            <p>Smart Watch</p>
                            <div className="legenda2Produto">
                                <span>R$ 232.12</span>
                                <span>Estoque: 10 unidades</span>
                            </div>
                        </div>
                    </div>

                    <div className="produto">
                        <img src={smartWatch} alt=""/>
                        <div className="legendaProduto">
                            <p>Smart Watch</p>
                            <div className="legenda2Produto">
                                <span>R$ 232.12</span>
                                <span>Estoque: 10 unidades</span>
                            </div>
                        </div>
                    </div>

                    <div className="produto">
                        <img src={smartWatch} alt=""/>
                        <div className="legendaProduto">
                            <p>Smart Watch</p>
                            <div className="legenda2Produto">
                                <span>R$ 232.12</span>
                                <span>Estoque: 10 unidades</span>
                            </div>
                        </div>
                    </div>

                    <div className="produto">
                        <img src={smartWatch} alt=""/>
                        <div className="legendaProduto">
                            <p>Smart Watch</p>
                            <div className="legenda2Produto">
                                <span>R$ 232.12</span>
                                <span>Estoque: 10 unidades</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;