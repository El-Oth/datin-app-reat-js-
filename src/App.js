import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Onboarding from "./components/onBoarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/dashboard"} element={<Dashboard/>} />
          <Route path={"/onboarding"} element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
