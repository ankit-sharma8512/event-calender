import React from "react";
import Home from "./Home/Home";
import Calender from "./Calender/Calender";
import Events from "./Events/Events";
import AddEvent from "./AddEvent/AddEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Events are stored in localStorage
  // Pre-Check on Event Data Array Stored on Local Storage
  if (!localStorage.getItem("events"))
    localStorage.setItem("events", JSON.stringify([]));

  // Client-Side-Routing: react-routerv6
  // Styling: styled-components
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<Calender />}>
          <Route path="add" element={<AddEvent />} />
        </Route>
        <Route path="/events" element={<Events />}>
          <Route path="add" element={<AddEvent />} />
        </Route>
        <Route path="*" element={<h1>Invalid Route</h1>} />
      </Routes>
    </Router>
  );
}


export default App;
