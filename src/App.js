import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './components/AllRoutes';
import { Filter } from './components/Filter';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Navbar/>
       <Filter/>
       <AllRoutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
