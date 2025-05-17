import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Grid from "./pages/Grid.tsx";
import BookDetails from "./pages/BookDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/books" element={<App />}>
            <Route index element={<Grid />}/>
            <Route path=":number" element={<BookDetails />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
