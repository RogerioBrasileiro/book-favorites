import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (

    <BrowserRouter>
    
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Não tenho essa página</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
