import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid justify-content-start">
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/todo">Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
