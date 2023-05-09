import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Edit from "./Pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/edit/:id" element={<Edit/>} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
