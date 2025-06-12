import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { useState } from "react";
import Events from "./pages/events";

function App() {
  const [RoutingList] = useState([
    {
      path: "/",
      component: Home,
    },
    {
      path: "/events",
      component: Events,
    },
  ]);

  return (
    <div className="bg-[#000] text-gray-900 min-h-screen">
      <BrowserRouter>
        <Routes>
          {RoutingList.map((route, index) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={index}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
