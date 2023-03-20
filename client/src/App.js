import './App.css';
import './bootstrap.min.css'
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">

        <Router>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Edit />} />

          </Routes>

        </Router>

      </header>
    </div>
  );
}

export default App;
