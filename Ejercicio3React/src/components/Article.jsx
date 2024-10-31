import './Article.css';

export default function Article({id, title, img, desc}){
    return (
        <article key={id} className="entrada">
            <h2>{title}</h2>
            <p>
                <img src={img} alt="Imagen Viaje a Londres"/>  
                {desc}    
            </p>
            <a href="#" className="boton">Leer Más</a>
        </article>
    )
}