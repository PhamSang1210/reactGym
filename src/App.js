import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="App">
            <Header />
            <Hero />
            <Testimonials />
        </div>
    );
}

export default App;
