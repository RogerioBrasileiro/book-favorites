import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (
    <BrowserRouter>
      <h1>Book Favorites</h1>
      <nav>
        <ul>
          <li>
            <link to='/'>Home</link>
          </li>
          <li>
            <link to='/login'>Login</link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Não tenho essa página</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
