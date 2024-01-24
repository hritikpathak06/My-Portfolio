import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Qualification from "./components/Qualification/Qualification";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects/>
        <Qualification />
        <Services />
      </main>
    </>
  );
}

export default App;
