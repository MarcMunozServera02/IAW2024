import Main from '../components/Main'

export default function HomePage({page, products, search}){

    const filteredProducts = () => products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    return(
        <>
            <Main page={page} filteredProducts={filteredProducts} />
        </>
    )
}