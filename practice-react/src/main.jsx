import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainBreadcrumb from "./interview-questions/BreadCrumb/MainBreadcrumb.jsx";
import ItemPage from "./interview-questions/BreadCrumb/ui/ItemPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='breadcrumb' element={<MainBreadcrumb/>}>
        <Route path="/breadcrumb/:id" element={<ItemPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
