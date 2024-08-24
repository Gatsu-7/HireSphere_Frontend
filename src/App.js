import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import ScrollToTop from "./components/Scrolltotop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsOfService from "./components/Termsofservice";
import HelpCentre from "./components/Helpcentre";
import NewsletterModal from "./components/Newslettersign";
import AboutUs from "./components/Aboutus";
import Login from "./components/Login";
import Register from "./components/Register";
import Remote_blog from "./components/Remote_blog";
import Master_blog from "./components/Master_blog";
import Branding_blog from "./components/Branding_blog";
import JobListingsPage from "./components/Joblistings";
import Frontend_developer from "./components/Jobs/Frontend_developer";
import Backend_developer from "./components/Jobs/Backend_developer";
import Uiux_developer from "./components/Jobs/Uiux";
import Project_manager from "./components/Jobs/Project_manager";

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
import "./styles/newslettermodal.scss";
import "./styles/aboutus.scss";
import "./styles/login.scss";
import "./styles/register.scss";
import "./styles/remote_blog.scss";
import "./styles/master_blog.scss";
import "./styles/branding_blog.scss";
import "./styles/joblistings.scss";
import "./styles/frontend_knowmore.scss";
import "./styles/applypage.scss";
import ApplyPage from "./components/Applypage";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNewsletterModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms" element={<TermsOfService />}></Route>
        <Route path="/help" element={<HelpCentre />}></Route>
        <Route path="/newsletter" element={<NewsletterModal />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Register />}></Route>
        <Route path="/remote_blog" element={<Remote_blog />}></Route>
        <Route path="/master_blog" element={<Master_blog />}></Route>
        <Route path="/branding_blog" element={<Branding_blog />}></Route>
        <Route path="/joblistings" element={<JobListingsPage />}></Route>
        <Route path="/apply/:jobId" element={<ApplyPage />} />

        <Route
          path="/frontend_knowmore"
          element={<Frontend_developer />}
        ></Route>
        <Route path="/backend_knowmore" element={<Backend_developer />}></Route>
        <Route path="/uiux_knowmore" element={<Uiux_developer />}></Route>
        <Route
          path="/projectmanager_knowmore"
          element={<Project_manager />}
        ></Route>
      </Routes>

      <Footer onNewsletterClick={openNewsletterModal} />
      {isModalOpen && <NewsletterModal onClose={() => setIsModalOpen(false)} />}
    </Router>
  );
}

export default App;
