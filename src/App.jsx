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
import AdminLog from "./pages/AdminLog";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardOverview from "./pages/admin/DashboardOverview";
import UsersManagement from "./pages/admin/UsersManagement";
import AdminSettings from "./pages/admin/AdminSettings";

// Import Admin Content Management Pages
import Projects from "./pages/admin/Projects";
import Departments from "./pages/admin/Departments";
import ServicesManagement from "./pages/admin/ServicesManagement";
import HomeCMS from "./pages/admin/HomeCMS";
import AboutCMS from "./pages/admin/AboutCMS";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
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

export default function App() {
  return (
    <ThemeProvider defaultThemeName="light">
      <AuthProvider>
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
                      <Route path="training-programs" element={<Training />} />
                      <Route path="privacypolicy" element={<PrivacyPolicy />} />
                      <Route path="customSolutions" element={<CustomSolutions />} />
                      <Route path="caseStudies" element={<CaseStudies />} />
                      <Route path="productUpdates" element={<ProductUpdates />} />

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

                    <Route path="adminlog" element={<AdminLog />} />
                  </Routes>
                  <Footer />
                </>
              }
            />

            {/* Protected Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardOverview />} />
              <Route path="users" element={<UsersManagement />} />
              <Route path="settings" element={<AdminSettings />} />
              
              {/* Core Management Routes */}
              <Route path="projects" element={<Projects />} />
              <Route path="departments" element={<Departments />} />
              <Route path="services" element={<ServicesManagement />} />
              
              {/* Home Section Management Route */}
              <Route path="home" element={<HomeCMS />} />
              
              {/* About Section Management Route */}
              <Route path="about" element={<AboutCMS />} />
              
              {/* Legacy Routes - Keep for backward compatibility */}
              <Route
                path="content"
                element={
                  <div className="p-6 text-center">
                    <h2 className="text-xl">Content Management - Coming Soon</h2>
                  </div>
                }
              />
              <Route
                path="products"
                element={
                  <div className="p-6 text-center">
                    <h2 className="text-xl">Products Management - Coming Soon</h2>
                  </div>
                }
              />
              <Route
                path="analytics"
                element={
                  <div className="p-6 text-center">
                    <h2 className="text-xl">Analytics - Coming Soon</h2>
                  </div>
                }
              />
              <Route
                path="messages"
                element={
                  <div className="p-6 text-center">
                    <h2 className="text-xl">Messages - Coming Soon</h2>
                  </div>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
