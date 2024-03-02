import './App.css';
import './assests/css/style.css';
import './assests/css/responsive.css';
import Header from './components/common/header';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './pages/home';
import Blog from './pages/blogpage';
import Classes from './pages/classes';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blog />} />
          <Route path="classes" element={<Classes />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
