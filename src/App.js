import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/views/features/HomePage";
import AuthPage from "./pages/views/features/AuthPage";
import MembersPage from "./pages/views/features/MembersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </>
  );
}

export default App;
