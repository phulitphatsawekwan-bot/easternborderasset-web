import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "@/ScrollToTop";
import Layout from "@/layouts/layout.jsx";
import About from "@/Pages/About";
import BuyandSell from "@/Pages/admin/RealEstate";
import Dashboard from "@/Pages/admin/Dashboard";
import Manage from "@/Pages/admin/Manage";
import Contact from "@/Pages/Contact";
import Home from "@/Pages/Home";
import Notfound from "@/Pages/Notfound";
import Recommend from "@/Pages/Recommend";
import RealEstate from "@/Pages/admin/RealEstate";
import Profile from "@/Pages/user/Profile";
import RealestateDetail from "@/Pages/user/RealestateDetail";
import MyFavorites from "@/Pages/user/MyFavorites";
import PrivacyPolicy from "@/Pages/PrivacyPolicy";
import TermsandConditions from "@/Pages/TermsandConditions";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* ใส่ ScrollToTop ไว้ตรงนี้ */}
      <ScrollToTop />

      <Routes>
        {/* Public */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="recommend" element={<Recommend />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termsandconditions" element={<TermsandConditions />} />
        </Route>

        {/* Private User */}
        <Route path="user" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="realestate/:id" element={<RealestateDetail />} />
          <Route path="realestate" element={<RealEstate />} />
          <Route path="myfavorites" element={<MyFavorites />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
