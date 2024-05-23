import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/Home";
// import AboutPage from "./pages/AboutPage";
// import Blog from "./pages/Writing";
// import Contact from "./pages/Contact";
// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/about" element={<AboutPage />} />
//   <Route path="/blog" element={<Blog />} />
//   <Route path="/contact" element={<Contact />} />
// </Routes>
