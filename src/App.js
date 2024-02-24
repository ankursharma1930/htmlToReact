import './App.css';
import './assests/css/style.css';
import './assests/css/responsive.css';
import Header from './components/common/header';
import Slider from './components/others/slider';
import About from './components/others/about';
import Class from './components/others/class';
import Blog from './components/others/blog';
import Client from './components/others/client';
import Info from './components/others/info';

function App() {
  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
      <About />
      <Class />
      <Blog />
      <Client />
      <Info />
    </>
  );
}

export default App;
