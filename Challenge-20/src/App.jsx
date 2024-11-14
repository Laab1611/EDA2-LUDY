import { Navigate, Route, Routes } from "react-router-dom";
import { MorePage, HomePage, LoginPage } from "./pages/index";
import { NavComponent } from "./components/index";

function App() {
  return (
    <>
      <NavComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<MorePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};

export default App;
