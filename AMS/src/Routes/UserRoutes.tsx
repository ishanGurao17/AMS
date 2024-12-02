import { Route, Routes } from "react-router-dom";
import LoginPage from "../Components/Login";
import Layout from "../Components/Layout";
import Dashboard from "../Components/Dashboard";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
  );
};

export default UserRoute;
