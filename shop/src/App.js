import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/menu' exact element={<Menu/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
