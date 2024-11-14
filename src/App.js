import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
