import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Legalstore from "./Store/index.js";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Services from "./routes/Services.jsx";
import ContactUs from "./routes/ContactUs.jsx";
import TermsConditions from "./components/common/TermsConditions.jsx";
import Page404 from "./components/shared/Page404.jsx";
import Admin from "./components/common/Admin.jsx";
import PrivateAdminRoute from "./components/shared/PrivateAdminRoute.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
  { path: "/terms", element: <TermsConditions /> },
  { path: "*", element: <Page404 /> },
  // ✅ Protect the Admin route
  {
    path: "/admin",
    element: <Admin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Legalstore}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
