import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsOfService from "./components/Termsofservice";
import HelpCentre from "./components/Helpcentre";
import NewsletterModal from "./components/Newslettersign";

import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/app.scss";
import "./styles/jobsbydomain.scss";
import "./styles/scrollsection.scss";
import "./styles/scrollinglogos.scss";
import "./styles/paidservices.scss";
import "./styles/blogs.scss";
import "./styles/faq.scss";
import "./styles/testimonials.scss";
import "./styles/privacypolicy.scss";
import "./styles/termsofservice.scss";
import "./styles/helpcentre.scss";
// import "./styles/newsletter.scss";
import "./styles/newslettermodal.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNewsletterModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms" element={<TermsOfService />}></Route>
        <Route path="/help" element={<HelpCentre />}></Route>
        <Route path="/newsletter" element={<NewsletterModal />}></Route>
      </Routes>

      <Footer onNewsletterClick={openNewsletterModal} />
      {isModalOpen && <NewsletterModal onClose={() => setIsModalOpen(false)} />}
    </Router>
  );
}

export default App;
