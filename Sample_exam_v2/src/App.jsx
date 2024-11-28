import TopInfo from './components/TopInfo'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './page/HomePage'
import AddPage from './page/AddPage'
import HotOffersPage from './page/HotOffersPage'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { getProducts } from './service/ProductsService'
import './App.css';

export default function App(){
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(location.pathname);

    useEffect(() => {
        getProducts(setProducts, setLoading);
    }, []);

    return(
     <>
        <TopInfo/>
        <Header search={search} setSearch={setSearch}/>
        <Navigation page={page} setPage={setPage}/>
        <Routes>
         <Route path="/home" element={<HomePage products={products}
            setProducts={setProducts} search={search}/>}/>
        <Route path="/offers" element={<HotOffersPage products={products}
            setProducts={setProducts} search={search}/> }/>
        <Route path="/add" element={<AddPage products={products}
            setProducts={setProducts}/>}/>
         <Route path="*" element={<Navigate replace to="/home"/>}/>    
        </Routes>
        <Footer/>
     </>
    )
}