import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./rout/Contact";
import Experiences from "./rout/Experiences"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from "../data/experience.json";
import ExperienceDetail from "./rout/ExperienceDetail";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <Button onClick={() => setCount((count) => count + 1)}>Hello word</Button>  */}
      
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Banner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:postId" element={<ExperienceDetail />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
