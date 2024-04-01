import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/:id' element={<Detail />}/>
        <Route path='/:id/edit' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
