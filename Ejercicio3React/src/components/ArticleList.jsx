import Article from './Article';
import NotFound from './NotFound';

export default function ArticleList({articles}){
    if (articles.length==0) return <NotFound/>
    else
        return (
            <section className="articulos">
            {
                articles.map(article=>
                    <Article
                        key={article.id}
                        title={article.title}
                        img={article.img}
                        desc={article.desc}
                    />
                    )
            }
            </section>
        )
 }