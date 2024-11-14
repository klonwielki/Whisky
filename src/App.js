import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Whiskies from './Whiskies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='App2'>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/whiskies' element={<Whiskies/>}/>
       </Routes>
      </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
