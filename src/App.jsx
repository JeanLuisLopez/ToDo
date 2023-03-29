import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

import {
  AuthenticateRoute,
  UnauthenticateRoute,
} from "./components/PrivateRoute/PrivateRoute";
import Register from "./pages/Register/Register";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  const { user, loading } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<AuthenticateRoute user={user} loading={loading} />}>
          <Route path="/tasks" element={<Tasks />} />
        </Route>
        <Route element={<UnauthenticateRoute user={user} loading={loading} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
