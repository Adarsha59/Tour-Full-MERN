import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/tour"; // Ensure the file name matches
import Tourdetails from "./pages/tourdetail"; // Ensure the file name matches
import Header from "./components/header"; // Ensure the file name matches
import Footer from "./components/footer"; // Ensure the file name matches
import Register from "./pages/register"; // Ensure the file name matches
import Login from "./pages/login"; // Ensure the file name matches
import Search from "./pages/search"; // Ensure the file name matches
import "./App.css";

// Define the routes using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/tours" element={<Tour />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tours/:id" element={<Tourdetails />} />
      <Route path="/tours/search" element={<Search />} />
      {/* Add a catch-all route for unmatched paths */}
      <Route
        path="*"
        element={
          <div>
            <h1>404 Not Found</h1>
          </div>
        }
      />
    </>
  )
);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
