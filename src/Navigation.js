import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
                    <Link to="/">
                        <h2 className="navitem">Home</h2>
                    </Link>
                    <>
                    <Link to="/new"><Button variant="primary">New Post</Button> {' '}</Link>
                    </>
                </Col>
            </Row>
        </Container>
        </div>
    

     );
}
 
export default Navigation;