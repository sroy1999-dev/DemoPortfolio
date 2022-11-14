import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div className="App">
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
        </main>
    </div>
  );
}

export default App;
