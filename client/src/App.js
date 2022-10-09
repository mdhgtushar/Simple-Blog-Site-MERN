import Home from "./Home";
import Footer from "./inc/Footer";
import Header from "./inc/Header";
import Sidebar from "./inc/Sidebar";
import { Routes, Route } from "react-router-dom";
import Post from "./Post";

function App() {
  return (
    <div>
      <Header />
      <div class="container" style={{ minHeight: "100vh" }}>
        <div class="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
          </Routes>

          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
