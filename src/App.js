import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<div>QR CODE ELEPHANT</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
