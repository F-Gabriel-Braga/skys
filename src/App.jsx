import { BrowserRouter, Route, Routes } from "react-router-dom";
import Access from "./screens/Access";
import Root from "./screens/Root";
import Signin from "./screens/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/access" element={<Access />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Root />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
