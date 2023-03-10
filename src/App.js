import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listing from "./pages/Listing";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/:listingId" element={<Listing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
