
import Slider from '../components/others/slider';
import About from '../components/others/about';
import Class from '../components/others/class';
import Blog from '../components/others/blog';
import Client from '../components/others/client';
import Info from '../components/others/info';

export default function Home(){
    return (
        <>
            <div className="hero_area">               
                <Slider />
            </div>
            <About />
            <Class />
            <Blog />
            <Client />
            <Info />
        
        </>
    )
}