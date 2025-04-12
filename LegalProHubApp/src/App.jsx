import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainContent from "./components/wrappers/MainContent";
import { Outlet } from "react-router-dom";
import Authwrapper from "./components/wrappers/AuthWrapper";

function App() {
  return (
    <div className="App_Container">
      <Header />
      <Authwrapper />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
