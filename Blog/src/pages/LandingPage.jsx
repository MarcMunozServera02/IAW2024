import Main from '../components/Main';
import Search from '../components/Search';
import { useEffect, useState } from 'react';

const LandingPage = () => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("");
  
    const fetchArticles = async()=>{
      const response = await fetch('./data/articles.json');
      const data = await response.json();
      return data;
    }
  
    useEffect(() => {
      fetch("/data/articles.json")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            if (query!=''){
              setArticles(result.filter(e=>
                e.title.toLowerCase().includes(query.toLowerCase() 
              )
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
        <Search setQuery={setQuery}/>
        <Main articles={articles}/>
      </>
    );
}

export default LandingPage