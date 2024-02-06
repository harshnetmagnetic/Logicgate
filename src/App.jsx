import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/services/ServicesPage";
import Footer from "./components/Footer";
import CallToActionSection from "./components/CallToActionSection";
import ProductsPage from "./pages/products/ProductsPage";
import ContactPage from "./pages/contact/ContactPage";
import CompanyPage from "./pages/company/CompanyPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CallToActionSection />
      <Footer />
    </Router>
  );
}

export default App;
