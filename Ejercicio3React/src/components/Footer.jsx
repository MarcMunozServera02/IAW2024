export default function Footer(){
    return (
        <footer>
            <div className="secciones-footer main-container">
                <section className="nosotros">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. </p>
                </section>
                <section className="menu">
                    <h2>Webs amigas</h2>
                    <nav className="web-amigas">
                        <a href="#">Excursiones premium</a>
                        <a href="#">Circuitos únicos</a>
                        <a href="#">Cruceríssimo</a>
                        <a href="#">TodoViaje</a>
                    </nav>
                </section>
            </div>

            <p className="blog">BlogdeViajes - Todos los derechos Reservados 2019 &copy;</p>
        </footer>
    )
}