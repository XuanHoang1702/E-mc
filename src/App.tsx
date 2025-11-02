import Header from "./components/layout/Header";
import SplashCursor from "./components/SplashCursor";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <SplashCursor />
      <Header />
      
      <main className="flex-grow">
        {/* <MainContent /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
