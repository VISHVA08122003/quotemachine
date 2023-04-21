import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
    <div id="a">
    <Header/>
    </div>
    <QuoteGenerator/>
    <div id="b">
    <Footer/>
    </div>
    

    
    </div>
  );
}

export default App;