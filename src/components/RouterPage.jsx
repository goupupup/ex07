import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import BookPage from './BookPage';

const RouterPage = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className='mb-5'>
                <Container>
                    <Link to="/books">LOGO</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/">Home</Link>
                            <Link to="/books">도서검색</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/books" component={BookPage}/>
            </Switch>
        </>
    )
}

export default RouterPage