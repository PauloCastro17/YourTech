import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageHome from './pages/Home';
import PageAboutUs from './pages/AboutUs';
import PageContactUs from './pages/ContactUs';
import Page404 from './pages/404';
import PageListProducts from './pages/ListProducts'
import PageProducts from './pages/Products'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome/>} />
                <Route path="/AboutUs" element={<PageAboutUs/>} />
                <Route path="/ContactUs" element={<PageContactUs/>} />
                <Route path="/ListaProdutos" element={<PageListProducts/>} />
                <Route path="/Produtos" >
                    <Route path=":idProduto" element={<PageProducts/>}/>
                </Route>
                <Route path="*" element={<Page404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;