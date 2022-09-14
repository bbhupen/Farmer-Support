
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Search from './Search';
import Crop from './Crop';
import Fertilizer from './Fertilizer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
    
      <div className="container my-3">
      <Routes>
            {/* <Route path="/about" element={</>}>
            </Route> */}
            <Route path="/" element={<Home />}>          
            </Route>

            <Route path="/search" element={<Search />}>    
            </Route>

            <Route path="/crop" element={<Crop />}>       
            </Route>

            <Route path="/fertilizer" element={<Fertilizer />}>       
            </Route>

      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
