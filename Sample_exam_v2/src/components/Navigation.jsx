import {Link} from 'react-router-dom'

export default function Navigation({page, setPage}){
    return(    
        <nav className="main-nav">
            <Link to="/home" className={page=="/home"?"activate":""} onClick={() => setPage("/home")}>Home</Link>
            <Link to="#">Categories</Link>
            <Link to="#">Men's</Link>
            <Link to="#">Women's</Link>
            <Link to="#">Jewelry</Link>
            <Link to="/add" className={page=="/add"?"activate":""} onClick={() => setPage("/add")}>Add</Link>
            <Link to="/offers" className={page=="/offers"?"activate":""} onClick={() => setPage("/offers")}>Hot Offers</Link>
        </nav>
    )
}


