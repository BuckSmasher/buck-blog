import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ArticleDetails = () => {

    const { idnum } = useParams();
    const { data: article } = useFetch('http://localhost:8000/articles/' + idnum);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/articles/' + idnum, {method: 'DELETE'}).then(() => {history.push('/');})
    }

    return ( 
<div className="article-details">
        { article && (
        <article className="article-preview">
            <h2>{ article.title }</h2>
            <p>{ article.body }</p>
            <strong>{ article.author }</strong>
            <button onClick={handleClick}>Delete</button>
        </article>
        )}
</div>
     );
}
 
export default ArticleDetails;