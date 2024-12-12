import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import Academics from "../Components/Academics";
import Dashboard from "../Components/Dashboard";
import Layout from "../Components/Layout";
import LoginPage from "../Components/Login";
import Placements from "../Components/Placements";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/placements" element={<Placements />} />
        {/*
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/admissions" element={<Admissions />} /> */}
      </Route>
    </Routes>
  );
};

export default UserRoute;
