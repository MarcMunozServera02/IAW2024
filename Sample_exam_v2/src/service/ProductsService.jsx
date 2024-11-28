import axios from 'axios'

export function getProducts(setProducts, setLoading){
    setLoading(true);
    axios.get('/data/products.json')
        .then(res => {
            if(res.data.length==0) console.log("Unable to load any products");
            else setProducts(res.data);  
        }).catch(error => {
            console.error(error);
        }).finally(
            setLoading(false)
        )
}