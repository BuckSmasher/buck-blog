import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewArticle = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        const article = { title, body, author };
    
        fetch('http://localhost:8000/articles', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article)
        }).then(() => {history.push('/');})

    }

    return ( 

      <Container>
        
          <div className="form">
          <Row><h1 className='page-header'>New Article</h1></Row>

            <Row>

                <Col></Col>

                <Col>
                
                    <Form onSubmit={handleSubmit}>

                        <Form.Group>

                            <Form.Label>Title</Form.Label>
                            <Form.Control value={ title } onChange={(e) => setTitle(e.target.value)}></Form.Control>

                        </Form.Group>

                        <Form.Group>

                            <Form.Label>Body</Form.Label>
                            <Form.Control as="textarea" rows={5} value={ body } onChange={(e) => setBody(e.target.value)}></Form.Control>

                        </Form.Group>

                        <Form.Group>

                            <Form.Label>Author</Form.Label>
                            <Form.Control value={ author } onChange={(e) => setAuthor(e.target.value)}></Form.Control>

                        </Form.Group>

                        <Button type="submit" className="submitdisplaybutton" variant="primary">Submit</Button>

                    </Form>
                
                </Col>

                <Col></Col>

            </Row>

          </div>
      </Container>
     );
}
 
export default NewArticle;