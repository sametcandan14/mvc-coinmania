import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import "./style.scss";
import MainPageController from "./controllers/MainPageController";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/coins" element={<MainPageController />} />
    </Routes>
  );
}

export default App;
