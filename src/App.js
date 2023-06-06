import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Hero from './components/Hero';
import Network from './components/Network';
function App() {
  return (
    <>
    <Header />
    <main>
      <Hero/>
      <Network/>
    </main>
    </>
  );
}

export default App;
