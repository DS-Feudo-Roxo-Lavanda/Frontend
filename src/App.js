import Login from './pages/login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Routes from './routes'
import { Router } from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Routes></Routes>  
    </div>
  );
}

export default App;
