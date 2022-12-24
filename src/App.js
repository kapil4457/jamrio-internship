import './App.css';
import {  Routes , Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import About from './components/AboutUs/About';


function App() {
 
  return (
  <>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/posts/:id' element={<Description />} />
    <Route path='/about' element={<About />} />
  </Routes>
  </>
  );
}

export default App;
