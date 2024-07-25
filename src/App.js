
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ApiTesk from './Components/ApiTesk';
import Fome from './Components/Fome';
import GmailTask from './Components/GmailTask';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contant from './pages/Contant'
import Header from './pages/Header'
import HeroLocation from './pages/HeroLocation';

function App() {
  return (
    <>
    <HeroLocation/>
      <ApiTesk />
      <GmailTask />
      <Fome />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contant' element={<Contant />} />
      </Routes>

    </>
  );
}

export default App;
