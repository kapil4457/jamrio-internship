import './App.css';
import {  Routes , Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Description from './components/Description/Description';


function App() {
 
  return (
  <>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/posts/:id' element={<Description />} />
  </Routes>
  </>
  );
}

export default App;
