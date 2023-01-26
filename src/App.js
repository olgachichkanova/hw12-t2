import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import List from './components/List';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<List />}/>
        <Route path='/:id/details' element={<Card />}/>
      </Routes>
    </div>
  );
}

export default App;
