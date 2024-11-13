import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/common/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
