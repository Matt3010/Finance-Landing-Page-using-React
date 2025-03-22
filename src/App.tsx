import React from "react";
import {
    Navbar,
    Stats,
    Hero,
    Business,
    Billing,
    CardDeal,
    Testimonials,
    Clients,
    CTA,
    Footer,
} from "./components";

const App: React.FC = () => (
    <div className=" bg-primary w-full overflow-hidden ">
        {/* Navbar */}
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="w-full">
                <Navbar />
            </div>
        </div>

        {/* Hero */}
        <div className="sm:pl-16 pl-6 bg-primary flex justify-center items-start">
            <div className=" w-full">
                <Hero />
            </div>
        </div>

        {/* Body */}
        <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
            <div className=" w-full">
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
            </div>
        </div>
    </div>
);

export default App;
