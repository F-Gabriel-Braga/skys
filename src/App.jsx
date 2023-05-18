import { BrowserRouter, Route, Routes } from "react-router-dom";
import Access from "./screens/Access";
import Root from "./screens/Root";
import Signin from "./screens/Signin";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import TermsPolicies from "./screens/TermsPolicies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/access" element={<Access />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<TermsPolicies />} />
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
