import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Profilepage from "./components/Profile/Profilepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/profile" element={<Profilepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
