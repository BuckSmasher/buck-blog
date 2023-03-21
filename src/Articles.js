import DisplayArticles from './DisplayArticles';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';

const ArticlesList = () => {
    const { id } = useParams();
    const { data: articles, pending, error } = useFetch('http://localhost:8000/articles');

    return (  

        <div className="article-list">

            { error && <p> { error } </p> }
            { pending && <p>Loading...</p>}
            { articles && <DisplayArticles articles={articles}/> }

        </div>

    );
}
 
export default ArticlesList;