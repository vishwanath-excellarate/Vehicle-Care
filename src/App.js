import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import { Toaster } from "./components/toaster";

const NoFoundComponent = lazy(() =>
  import("./components/pages/noFoundComponent")
);
const UserDashboard = lazy(() => import("./components/user"));
const LogIn = lazy(() => import("./components/login_signup/Login"));
const SignUp = lazy(() => import("./components/login_signup/SignUp"));

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="*" element={<NoFoundComponent />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/"
            element={<PrivateRoute isAuthenticated={true} />}
          >
            <Route exact path="/user-dashboard" element={<UserDashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
