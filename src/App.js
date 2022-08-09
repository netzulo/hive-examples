/* Boostrap & CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/layout.css'
import 'animate.css'
/* APP */
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
/*Pages & Partials*/
import PageHome from './pages/Home'
import PageLevelBasic from './pages/LevelBasic'
import Page404 from './pages/errors/ErrorNotFound'


function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Routes>
          <Route exact path="/" element={<PageHome />} />
          <Route path="/level-basic" element={<PageLevelBasic />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
