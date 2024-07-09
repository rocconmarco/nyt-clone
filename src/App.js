import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/views/features/HomePage";
import AuthPage from "./pages/views/features/AuthPage";
import MembersPage from "./pages/views/features/MembersPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import About from "./pages/views/features/About";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/auth"
            element={!authUser ? <AuthPage /> : <Navigate to="/members" />}
          />
          <Route
            path="/members"
            element={authUser ? <MembersPage /> : <Navigate to="/auth" />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
