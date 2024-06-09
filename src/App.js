
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import FontPage from './components/FontPage';
import FormPage from './components/FormPage';
import Search from './components/Search';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<FontPage/>}/>
    <Route path='/form' element={<FormPage/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/viewAll' element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
