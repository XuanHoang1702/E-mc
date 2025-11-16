import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";


function App() {
  return (
    <>
      {/* <SplashCursor /> */}
      <Router>
        <Routes>
          <Route path="/" element={ <Layout> <Home /> </Layout> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
