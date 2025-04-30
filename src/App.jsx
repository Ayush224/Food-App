import Home from "./pages/Home";
import Placed from "./pages/Placed";
import Error from "./pages/Error";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/placed"
            element={<ProtectedRoute element={<Placed />} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
