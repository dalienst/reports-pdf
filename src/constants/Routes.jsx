import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicLinks } from "./links";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Home = React.lazy(() => import("../pages/Home"));
const Reports = React.lazy(() => import("../pages/Reports"));
const CreateReport = React.lazy(() => import("../pages/CreateReport"));
const EditReport = React.lazy(() => import("../pages/EditReport"));
const AboutApp = React.lazy(() => import("../pages/AboutApp"));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Ringing...</div>}>
        <Navbar />
        <Routes>
          <Route exact path={publicLinks.Home} element={<Home />} />
          <Route path={publicLinks.Reports} element={<Reports />} />
          <Route path={publicLinks.CreateReport} element={<CreateReport />} />
          <Route path={publicLinks.EditReport} element={<EditReport />} />
          <Route path={publicLinks.AboutApp} element={<AboutApp />} />
        </Routes>
        <Footer/>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
