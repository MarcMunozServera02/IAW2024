import {Link} from 'react-router-dom'

export default function Navigation(){
  return (
    <div className="contenedor-nav">
      <nav className="navegacion-principal contenedor">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </div>
  )
}