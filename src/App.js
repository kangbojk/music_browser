import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Page from './components/Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="albums/:albumId" element={<Page />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;