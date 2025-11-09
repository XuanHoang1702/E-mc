import Header from "./components/layout/Header";
import SplashCursor from "./components/common/SplashCursor";
import Footer from "./components/layout/Footer";
import MainContent from "./components/layout/MainContetnt";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <SplashCursor />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
