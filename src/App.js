import { useEffect, useState } from 'react';
import Homepage from './pages/homepage/Homepage';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import { useNavigationType } from 'react-router';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [aniamte, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage animate={aniamte} />} />
        <Route path={'Work'} element={<Work />} />
        <Route path={'About'} element={<About />} />
        <Route path={'Blog'} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
