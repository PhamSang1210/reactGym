import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div style={{ height: "3000px" }} className="App">
            <Header />
            <Hero />
            <Testimonials />
        </div>
    );
}

export default App;
