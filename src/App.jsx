import Residencies from "./component/Residencies/Residencies";
import Header from "./component/Header/Header";
import Companies from "./component/companies/Companies";
import Hero from "./component/hero/Hero";
import Value from "./component/value/value";
import Contact from "./component/contact/Contact";
import GetStarted from "./component/Getstarted/GetStarted";
import Footer from "./component/footer/Footer";
import './App.css'
function App(){
  return (
    <div className="App">
      <div >
        <div className="white-gradient"/>
      <Header/>
       <Hero/>
      </div>
       
       <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>  
    </div>
  );
}

export default App;
