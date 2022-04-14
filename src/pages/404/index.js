import './404.css'

import NavBarTwo from '../../components/NavBarTwo'
import Footer from '../../components/footer'

import imagePage404 from '../../assets/imagePage404.svg'

function Page404(){
    return(
        <section>
            <div className="container404">
                <NavBarTwo/>
                <div className="row404">
                    <img src={imagePage404} alt=""/>
                    <h1>Ops! parece que a página que vocês está procurando não existe</h1>
                </div>
            </div>

            <Footer/>
        </section>
    );
}

export default Page404;