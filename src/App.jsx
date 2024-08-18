import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/LoginPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sso" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App;
