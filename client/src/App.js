import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const   App = () => {
    return (
        //<Provider>
            <div>
                <Header />
                <Footer />
            </div>
        //</Provider>
        
    );
};

export default App;