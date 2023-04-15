import './App.css';
import RouterPage from './components/RouterPage';
import home from './images/home.jpg'
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Container className="App">
            <img src={home} width="100%"/>
            <RouterPage/>
        </Container>
    );
}

export default App;
