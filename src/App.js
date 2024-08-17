import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/app.scss";
import "./styles/jobsbydomain.scss";
import "./styles/scrollsection.scss";
import "./styles/scrollinglogos.scss";
import "./styles/paidservices.scss";
import "./styles/blogs.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
