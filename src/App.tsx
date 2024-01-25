import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Writing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
