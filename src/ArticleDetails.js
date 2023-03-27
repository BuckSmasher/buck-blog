import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
            <p onClick={handleClick}><Button variant="primary">Delete</Button></p>
        </article>
        )}
</div>
     );
}
 
export default ArticleDetails;