import { Route } from "react-router-dom";
import Home from "../components/pages/Home"; // Home-sidan
import PageNotFound from "../components/pages/PageNotFound"; // 404-sidan

export const AppRoutes = (
  <>
    {/* Route for the Home page */}
    <Route path="/" element={<Home />} />

    {/* Fallback for unmatched paths */}
    <Route path="*" element={<PageNotFound />} />
  </>
);

export default AppRoutes;