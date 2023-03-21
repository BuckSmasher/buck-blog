import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const DisplayArticles = ({articles}) => {

        

 

    return (  
        <div className="display-articles">
            {articles.map((article) => (

                <div className="article-preview" key={ article.id }>
                    <Link to={`/articles/${article.id}`}>
                    <h2>{ article.title }</h2>
                    </Link>
                    <p>{ article.body }</p>
                    <strong>by { article.author }</strong>

                </div>

            ))}

        </div>

    );
}
 
export default DisplayArticles;