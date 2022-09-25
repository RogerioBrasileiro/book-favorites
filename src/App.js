import './App.css';

import Menu from './components/Menu';

// Routes
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';


export default function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}