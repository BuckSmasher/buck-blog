import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const DisplayArticles = ({articles}) => {

        

 

    return (  
        <div className="display-articles">
            {articles.map((article) => (
            
            
                <div className="article-preview" key={ article.id }>
                    <Link to={`/articles/${article.id}`}>
                    <h3>{ article.title }</h3>
                    </Link>
                    <p>{ article.body }</p>
                    <strong>by { article.author }</strong>

                </div>
                
        
            ))}

        </div>
    );
}
 
export default DisplayArticles;