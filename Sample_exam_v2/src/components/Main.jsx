import Banner from './Banner'
import Card from './Card'
import './main.css'

export default function Main({page, filteredProducts}){
    return(
        <main>
            <Banner/>    
            <h1>{page=="/offers"?"Offers":"New Products"}</h1>
            <section class="product-grid">
                {filteredProducts().map(product =>
                     <Card key={product.id} {...product}/>
                )}
            </section>
        </main>
    )
}