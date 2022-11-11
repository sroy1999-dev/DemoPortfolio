import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';

const App = () => {
  return (
    <div className="App">
        <Header />
        <main className='main'>
          <Home />
          <About />
        </main>
    </div>
  );
}

export default App;
