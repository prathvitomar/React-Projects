import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainBreadcrumb from "./interview-questions/BreadCrumb/MainBreadcrumb.jsx";
import ItemPage from "./interview-questions/BreadCrumb/ui/ItemPage.jsx";
import { AuthProvider } from "./interview-questions/AuthenticationAuthorization/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="breadcrumb" element={<MainBreadcrumb />} />
        <Route path="breadcrumb/:id" element={<ItemPage />} />
        {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);
