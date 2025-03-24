import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Team from "./components/Team";
import Career from "./components/Career";
import Terms from "./components/Terms";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="/other/team" element={<Team />} />
            <Route path="/other/career" element={<Career />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
