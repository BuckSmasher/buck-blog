import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Navigation = () => {
    return ( 
 
        <div className="navmenu">
        <Container>
            <Row>
                <Col>
                    <Link to="/">
                        <img className="site-logo"src="https://pbs.twimg.com/profile_images/1600758117230432257/IFvymWkI_400x400.jpg" alt="" />
                    </Link>
                </Col>
                <Col></Col>
                <Col>

                    <Stack direction="horizontal" gap={8}>

                       <div><Link to="/"><h2 className="navitem">Home</h2></Link></div>
                       <div className="ms-auto"><Link to="/new"><Button variant="primary">New Post</Button> {' '}</Link></div>

                    </Stack>
                </Col>
            </Row>
        </Container>
        </div>
    

     );
}
 
export default Navigation;