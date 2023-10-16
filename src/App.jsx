import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import GamePage from './Pages/GamePage/GamePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/gamepage' element={ <GamePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
