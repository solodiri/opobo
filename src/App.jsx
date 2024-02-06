import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./pages/Footer";

import Details from "./pages/Details";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Conditions from "./pages/Conditions";
import Constitution from "./pages/Constitution";
import Constitution2 from "./pages/Constitution2";
import Membership from "./pages/Membership";
import Blog from "./pages/Blog";
import News from "./pages/News";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Router>
        <NavBar />
        <Home />
        <Details />
        <About />
        <Services />
        <Projects />
        <Events />
        <Contact />
        <Privacy />
        <Conditions />
        <Constitution />
        <Constitution2 />
        <Blog />
        <Membership />
        <News />
        <ErrorPage />
        <Footer />
      </Router> */}
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route axact path="/" element={<Home />} />
          <Route axact path="/details" element={<Details />} />
          <Route axact path="/about" element={<About />} />
          <Route axact path="/services" element={<Services />} />
          <Route axact path="/projects" element={<Projects />} />
          <Route axact path="/events" element={<Events />} />
          <Route axact path="/contact" element={<Contact />} />
          <Route axact path="/privacy" element={<Privacy />} />
          <Route axact path="/conditions" element={<Conditions />} />
          <Route axact path="/constitution" element={<Constitution />} />
          <Route axact path="/constitution2" element={<Constitution2 />} />

          <Route axact path="/blog" element={<Blog />} />
          <Route axact path="/membership" element={<Membership />} />
          <Route axact path="/news" element={<News />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React is too much</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
