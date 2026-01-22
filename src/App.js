import './App.css';
import { Route, Routes } from 'react-router-dom';


import Oldal from './componens/Oldal';


function App() {
  return (
    <Routes>
      <Route path="/*" element={<Oldal />}></Route>
      </Routes>
  );
}

export default App;
