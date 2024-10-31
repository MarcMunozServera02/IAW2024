import './App.css';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import Search from './components/Search';
import { useEffect, useState } from 'react';

//App with only one page
export default function App(){
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((result) => {
          console.log(result);
          if (query!=''){
            setArticles(result.filter(e=>
              e.title.toLowerCase().includes(query.toLowerCase())
            ));
          }else{
            setArticles(result);
          }
          console.log(result.length);
        },
        (error) => { console.log(error);}
      );
  }, [query]);

  return (
    <>
      <Header/>
      <Navigation/>
      <Search setQuery={setQuery}/>
      <Main articles={articles}/>
      <Footer/>
    </>
  );
}