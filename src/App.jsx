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
import PrivacyPolicy from "./components/PrivacyPolicy";
import CustomSolutions from "./components/CustomSolutions";
import CaseStudies from "./components/CaseStudies";
import ProductUpdates from "./components/ProductUpdates";
import Training from "./components/Training";
import PlacementTraining from "./pages/training/PlacementTraining";
import OnlineTraining from "./pages/training/OnlineTraining";
import OurBlog from "./components/OurBlog";
import FAQ from "./components/FAQ";

import { ThemeProvider } from "./theme";

// Import individual product detail pages
import ERP from "./pages/products/ERP";
import HRMS from "./pages/products/HRMS";
import CRM from "./pages/products/CRM";
import Billing from "./pages/products/Billing";
import Inventory from "./pages/products/Inventory";
import Banking from "./pages/products/Banking";

// Import individual service detail pages
import WebDevelopment from "./pages/services/WebDevelopment";
import GraphicDesigning from "./pages/services/GraphicDesigning";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import SEO from "./pages/services/SEO";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";

import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <ThemeProvider defaultThemeName="light">
      <BrowserRouter>
        <Routes>
          {/* Public Routes with Banner and Footer */}
          <Route
            path="/*"
            element={
              <>
                <Banner />
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                    <Route path="services" element={<Services />} />
                    <Route path="other/team" element={<Team />} />
                    <Route path="careers" element={<Career />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="training-programs" element={<PlacementTraining />} />
                    <Route path="training/online" element={<OnlineTraining />} />
                    <Route path="privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="customSolutions" element={<CustomSolutions />} />
                    <Route path="caseStudies" element={<CaseStudies />} />
                    <Route path="productUpdates" element={<ProductUpdates />} />

                    <Route path="ourBlog" element={<OurBlog />} />  
                    <Route path="faq" element={<FAQ />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    {/* 🧩 Product Details Routes */}
                    <Route path="products/erp" element={<ERP />} />
                    <Route path="products/hrms" element={<HRMS />} />
                    <Route path="products/crm" element={<CRM />} />
                    <Route path="products/billing" element={<Billing />} />
                    <Route path="products/inventory" element={<Inventory />} />
                    <Route path="products/banking" element={<Banking />} />

                    {/* 🎯 Service Details Routes */}
                    <Route path="services/web-development" element={<WebDevelopment />} />
                    <Route path="services/graphic-designing" element={<GraphicDesigning />} />
                    <Route path="services/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="services/software-development" element={<SoftwareDevelopment />} />
                    <Route path="services/seo" element={<SEO />} />
                    <Route path="services/social-media-management" element={<SocialMediaManagement />} />
                    <Route path="services/ecommerce-solutions" element={<EcommerceSolutions />} />
                    <Route path="services/mobile-app-development" element={<MobileAppDevelopment />} />

                    {/* 404 Fallback */}
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
