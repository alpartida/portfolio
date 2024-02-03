import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
