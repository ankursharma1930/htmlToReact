import './App.css';
import './assests/css/style.css';
import './assests/css/responsive.css';
import Header from './components/common/header';
import Slider from './components/others/slider';
import About from './components/others/about';
import Class from './components/others/class';

function App() {
  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
      <About />
      <Class />
    </>
  );
}

export default App;
