import LandingPage from "./pages/Landing-page.jsx";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Footer />

    </div>
  );
}

export default App;
