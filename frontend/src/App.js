import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
