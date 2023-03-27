import DisplayArticles from './DisplayArticles';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ArticlesList = () => {
    const { id } = useParams();
    const { data: articles, pending, error } = useFetch('http://localhost:8000/articles');

    return (  
    <Container>
        <Row>
        <div className="article-list">

            { error && <p> { error } </p> }
            { pending && <p>Loading...</p>}
            { articles && <DisplayArticles articles={articles}/> }

        </div>
        </Row>
    </Container>
    );
}
 
export default ArticlesList;