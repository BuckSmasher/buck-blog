import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const NewArticle = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        const article = { title, body, author };
    
        fetch('http://localhost:8000/articles', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article)
        }).then(() => {
          console.log('new blog added');
        })

    }

    return ( 

      <Container>
        
          <div className="form">
          <Row>
              <h1>CREATE NEW ARTICLE</h1>
          </Row>
          
              <form onSubmit={handleSubmit}>

                  <Row><label>Title</label>
                  <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)}></input></Row>
                  <Row><label>Body</label>
                  <textarea value={ body } onChange={(e) => setBody(e.target.value)}></textarea></Row>
                  <Row><label>Author</label>
                  <input type="text" value={ author } onChange={(e) => setAuthor(e.target.value)}></input></Row>
                  <Row><button>Submit</button></Row>

              </form>

          </div>
      </Container>
     );
}
 
export default NewArticle;