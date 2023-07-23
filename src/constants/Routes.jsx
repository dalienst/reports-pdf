import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicLinks } from "./links";

const Home = React.lazy(() => import("../pages/Home"));
const Reports = React.lazy(() => import("../pages/Reports"));
const CreateReport = React.lazy(() => import("../pages/CreateReport"));
const EditReport = React.lazy(() => import("../pages/EditReport"));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Ringing...</div>}>
        <Routes>
          <Route exact path={publicLinks.Home} element={<Home />} />
          <Route path={publicLinks.Reports} element={<Reports />} />
          <Route path={publicLinks.CreateReport} element={<CreateReport />} />
          <Route path={publicLinks.EditReport} element={<EditReport />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
