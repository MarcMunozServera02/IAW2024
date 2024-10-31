import ArticleList from "./ArticleList";
import Aside from "./Aside";

export default function Main({articles}){
  return (
    <main className="main-container">
        <ArticleList articles={articles}/>
        <Aside/>
    </main>
  )
}