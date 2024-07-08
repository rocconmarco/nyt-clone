import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/views/features/HomePage";
import AuthPage from "./pages/views/features/AuthPage";
import MembersPage from "./pages/views/features/MembersPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import useSavedItemsStore from "./store/savedItemsStore";
import { useEffect } from "react";

function App() {
  const [authUser] = useAuthState(auth)

  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
