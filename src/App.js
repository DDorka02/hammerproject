import './App.css';
import { Route, Routes } from 'react-router-dom';


import Oldal from './componens/Oldal';
import Masik from './componens/Masik';


function App() {
  return (
    <Routes>
      <Route path="/*" element={<Oldal />}></Route>
      <Route path="/masik" element={<Masik />} />

      </Routes>
  );
}

export default App;
