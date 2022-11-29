import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "./axios";
import { updateUser } from "./redux/slices/userSlices";
import { useDispatch } from "react-redux";
import { AdminRoutes, CustomRoutes } from "./routes";
import LoginScreen from "./pages/agents/LoginScreen";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("/user/token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(updateUser(response.data));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[dispatch])


  return (
    <Wrapper>
      <Routes>
        <Route path="/login" element={<LoginScreen/>} />
        <Route
          path="/admin/*"
          element={
            <AdminPrivateRoute>
              <AdminRoutes />
            </AdminPrivateRoute>
          }
        />
        <Route path="/*" element={<CustomRoutes />} />
      </Routes>
    </Wrapper>
  );
}
